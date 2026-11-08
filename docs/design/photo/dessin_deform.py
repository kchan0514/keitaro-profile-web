"""デフォルメしたデッサン（2段階）。参考写真＝A_natural.jpg"""
import sys, base64, json, pathlib
here=pathlib.Path(__file__).parent
sys.path.insert(0,str(here.parents[4]/'06_code/scripts'))
from openai_ask import _post
level=sys.argv[1]
data='data:image/jpeg;base64,'+base64.b64encode((here/'A_natural.jpg').read_bytes()).decode()
common=("Keep him clearly recognizable: the same messy dark hair with bangs falling to one side, narrow smiling eyes, "
        "gentle closed-mouth smile, round face, open-collar knit polo. Graphite pencil only on plain white paper, "
        "monochrome, no color, no background (just blank paper), no text, no signature, no frame. "
        "Head and shoulders, centered, fading out at the chest.")
P={'light':"Draw this person as a lightly stylized pencil portrait sketch: simplified, fewer lines than realism, "
           "slightly enlarged head and softened features, confident loose strokes like an illustrator's sketchbook, "
           "warm and friendly. ",
   'strong':"Draw this person as a deformed / caricature-style pencil sketch illustration: noticeably larger head on a small body "
            "(about 1:2 head-to-body feel), simple clean pencil linework with minimal hatching, playful and friendly like a "
            "character sketch in a game designer's notebook, still a pencil dessin, not anime, not chibi cute. "}[level]
r=_post('/responses',{'model':'gpt-6-astra','input':[{'role':'user','content':[{'type':'input_text','text':P+common},{'type':'input_image','image_url':data}]}],
    'tools':[{'type':'image_generation','size':'1024x1536','quality':'high'}],'tool_choice':{'type':'image_generation'}},timeout=600)
for it in r.get('output',[]):
    if it.get('type')=='image_generation_call' and it.get('result'):
        (here/f'E_{level}_raw.png').write_bytes(base64.b64decode(it['result'])); print(level,'ok'); break
else: print(json.dumps(r)[:600])
