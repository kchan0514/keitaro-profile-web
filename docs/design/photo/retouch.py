"""プロフィール写真のレタッチ（色調のみ。顔の形は変えない）。PILだけで動く。
A ナチュラル / B 紙になじむ（周辺を生成りへ溶かす）/ C 鉛筆トーン（墨×生成りの2色）"""
from PIL import Image, ImageEnhance, ImageDraw, ImageFilter, ImageOps
import colorsys
PAPER=(250,248,243); INK=(29,29,27)
src=Image.open('original.jpg').convert('RGB')

def mute_greens(im, s_mul=.55, v_add=10):
    h,s,v=im.convert('HSV').split()
    hp,sp,vp=h.load(),s.load(),v.load()
    W,H=im.size
    for y in range(H):
        for x in range(W):
            hh=hp[x,y]
            if 35<=hh<=115:            # 黄緑〜緑
                sp[x,y]=int(sp[x,y]*s_mul); vp[x,y]=min(255,vp[x,y]+v_add)
    return Image.merge('HSV',(h,s,v)).convert('RGB')

def tone(im, lift=14, warm=(1.03,1.0,.96)):
    r,g,b=im.split()
    f=lambda k:(lambda v:min(255,int((lift+v*(255-lift)/255)*k)))
    return Image.merge('RGB',(r.point(f(warm[0])),g.point(f(warm[1])),b.point(f(warm[2]))))

def natural(im):
    im=mute_greens(im)
    im=ImageEnhance.Color(im).enhance(.88)
    im=ImageEnhance.Contrast(im).enhance(.93)
    im=tone(im)
    return ImageEnhance.Brightness(im).enhance(1.03)

def fade_to_paper(im, cx=.40, cy=.42, rx=.48, ry=.62, blur=120):
    W,H=im.size
    m=Image.new('L',(W,H),0); d=ImageDraw.Draw(m)
    d.ellipse([W*(cx-rx),H*(cy-ry),W*(cx+rx),H*(cy+ry)],fill=255)
    m=m.filter(ImageFilter.GaussianBlur(blur))
    paper=Image.new('RGB',(W,H),PAPER)
    return Image.composite(im,paper,m)

def pencil(im):
    g=ImageOps.grayscale(im)
    g=ImageEnhance.Contrast(g).enhance(1.08)
    return ImageOps.colorize(g,black=INK,white=PAPER,mid=(140,136,128))

a=natural(src).crop((0,0,722,903)); a.save("A_natural.jpg",quality=92)  # 4:5
b=fade_to_paper(a); b.save('B_paper.jpg',quality=92)
c=fade_to_paper(pencil(src)); c.save('C_pencil.jpg',quality=92)
# 並べて比較
sheet=Image.new('RGB',(903*4+60,903+20),PAPER)
for i,im in enumerate([src,a,b,c]): sheet.paste(im,(10+i*(903+13),10))
sheet.thumbnail((2000,2000)); sheet.save('compare.jpg',quality=88)
