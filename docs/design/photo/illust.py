"""イラスト調の見本（頭身はそのまま、タッチだけ変える）。参考写真＝A_natural.jpg"""
import sys, base64, json, pathlib
here=pathlib.Path(__file__).parent
sys.path.insert(0,str(here.parents[4]/'06_code/scripts'))
from openai_ask import _post
k=sys.argv[1]
data='data:image/jpeg;base64,'+base64.b64encode((here/'A_natural.jpg').read_bytes()).decode()
keep=("Keep realistic proportions (no big head, no chibi, no caricature) and keep him clearly recognizable: "
      "same messy dark hair with bangs to one side, narrow eyes, gentle closed-mouth smile, round face, navy knit open-collar polo. "
      "Head and shoulders, centered, on a plain off-white paper background (#FAF8F3) with no scenery. No text, no signature, no frame.")
S={'line':"Turn this photo into a clean editorial line illustration: confident black ink outlines, flat muted colors "
          "(navy shirt, warm skin, dark hair), minimal shading, like a portrait in a modern Japanese magazine or a tech conference speaker page. ",
   'watercolor':"Turn this photo into a soft hand-drawn illustration: thin pencil outlines with light transparent watercolor washes, "
          "muted gentle colors, lots of paper showing through, like an illustration in a designer's notebook. ",
   'flat':"Turn this photo into a simple flat vector-style illustration: smooth shapes, no outlines or very thin ones, "
          "a limited muted palette (navy, warm beige skin, near-black hair, a tiny vermilion accent), calm and friendly. "}[k]
r=_post('/responses',{'model':'gpt-6-astra','input':[{'role':'user','content':[{'type':'input_text','text':S+keep},{'type':'input_image','image_url':data}]}],
    'tools':[{'type':'image_generation','size':'1024x1536','quality':'high'}],'tool_choice':{'type':'image_generation'}},timeout=600)
for it in r.get('output',[]):
    if it.get('type')=='image_generation_call' and it.get('result'):
        (here/f'I_{k}.png').write_bytes(base64.b64decode(it['result'])); print(k,'ok'); break
else: print(k,json.dumps(r)[:500])
