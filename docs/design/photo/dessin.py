"""デッサン調。方法1=写真を鉛筆画風に変換（PIL、本人性を保つ）／方法2=画像生成AIに参考写真から描かせる。"""
import sys, base64, json, pathlib
from PIL import Image, ImageOps, ImageFilter, ImageEnhance, ImageDraw
PAPER=(250,248,243); INK=(40,38,35)
here=pathlib.Path(__file__).parent

def pencil_filter(src):
    g=ImageOps.grayscale(src)
    g=ImageEnhance.Contrast(g).enhance(1.15)
    inv=ImageOps.invert(g).filter(ImageFilter.GaussianBlur(9))
    gp,ip=g.load(),inv.load(); W,H=g.size
    out=Image.new('L',(W,H)); op=out.load()
    for y in range(H):
        for x in range(W):
            b=gp[x,y]; t=ip[x,y]
            op[x,y]=255 if t>=255 else min(255,b*255//(255-t))   # 覆い焼き
    out=out.point(lambda v:int(255*((v/255)**2.2)))               # 線を濃く
    out=ImageEnhance.Contrast(out).enhance(1.25)
    return ImageOps.colorize(out,black=INK,white=PAPER)

def fade_edges(im, start=.70):
    W,H=im.size; m=Image.new('L',(W,H),255); d=ImageDraw.Draw(m)
    for y in range(int(H*start),H):
        t=(y-H*start)/(H*(1-start)); d.line([(0,y),(W,y)],fill=int(255*(1-t)**1.6))
    return Image.composite(im,Image.new('RGB',(W,H),PAPER),m)

if 'ai' not in sys.argv:
    src=Image.open(here/'original.jpg').convert('RGB').crop((0,0,722,903))
    fade_edges(pencil_filter(src)).save(here/'D1_pencil_filter.jpg',quality=92)
else:
    sys.path.insert(0,str(here.parents[4]/'06_code/scripts'))
    from openai_ask import _post
    data='data:image/jpeg;base64,'+base64.b64encode((here/'A_natural.jpg').read_bytes()).decode()
    prompt=("Redraw this exact person as a graphite pencil portrait drawing (dessin) on plain off-white paper. "
            "Preserve the face, hairstyle, expression and proportions faithfully — it must clearly be the same person. "
            "Loose confident pencil lines and light cross-hatching like an artist's sketchbook study, head and shoulders to upper chest, "
            "the clothing and background only lightly suggested and fading out to blank paper at the edges. "
            "Monochrome graphite only, no color, no text, no signature, no frame.")
    r=_post('/responses',{'model':'gpt-6-astra','input':[{'role':'user','content':[{'type':'input_text','text':prompt},{'type':'input_image','image_url':data}]}],
        'tools':[{'type':'image_generation','size':'1024x1536','quality':'high'}],'tool_choice':{'type':'image_generation'}},timeout=600)
    for it in r.get('output',[]):
        if it.get('type')=='image_generation_call' and it.get('result'):
            (here/'D2_ai_raw.png').write_bytes(base64.b64decode(it['result'])); print('ok'); break
    else: print(json.dumps(r)[:800])
