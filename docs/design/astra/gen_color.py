# 配色検討（2026-11-08）: 清水「色が一番悩んでいる」「強みは越境」。第4ラウンド案2（深く潜って、渡る。）を固定し配色だけ変える。
# 使い方: python3 gen_color.py [番号...]
import base64, sys, pathlib, concurrent.futures as cf
sys.path.insert(0, '/Users/keitaro/wkspace/ai-management/06_code/scripts')
from openai_ask import _post
HERE = pathlib.Path(__file__).parent
OUT = HERE / 'color'; OUT.mkdir(exist_ok=True)
REF = HERE / 'raw4' / 'pattern-02.png'
COMMON = """Reproduce this exact page (same layout, same hand-drawn notebook style, same heavy Japanese gothic headline, same Japanese text exactly,
same white paper base). Change ONLY the color scheme as described. Keep it a flat, front-facing screenshot, portrait. Japanese text must stay legible and identical.
"""
V = {
 1: "Color: single deep INDIGO / ink blue (#1F3A8A-ish) replaces all the red: the route line, handwritten notes, underlines. Pencil grey drawings, near-black type. Calm, intellectual.",
 2: "Color: single VIVID ORANGE-VERMILION (#F04E23-ish) replaces the red, brighter and more energetic, like a highlighter-ink. Pencil grey drawings, near-black type. Playful, energetic.",
 3: "Color: CROSSING TWO COLORS. Each domain island on the map gets its own soft tint (ゲーム・XR = soft blue, 都市・産業 = soft green, 生成AI = soft yellow, 行政 = soft violet; very light, watercolor-like), and ONE strong vermilion route line crosses through all of them. Elsewhere on the page, only black type and the vermilion accent. The color logic itself expresses 'crossing between fields'.",
 4: "Color: DEEP GREEN (#1E5B4A-ish) as main accent for route and notes, plus a small amount of warm mustard yellow for highlights (like a marker swipe under key words). Pencil grey drawings, near-black type. Mature, field/on-site feel.",
}
def img(p): return {'type':'input_image','image_url':'data:image/png;base64,'+base64.b64encode(p.read_bytes()).decode()}
def gen(i):
    r = _post('/responses', {'model':'gpt-6-astra',
        'input':[{'role':'user','content':[img(REF),{'type':'input_text','text':COMMON+V[i]}]}],
        'tools':[{'type':'image_generation','size':'1024x1536','quality':'high'}],
        'tool_choice':{'type':'image_generation'}}, timeout=900)
    for o in r.get('output', []):
        if o.get('type')=='image_generation_call' and o.get('result'):
            p=OUT/f'color-{i:02d}.png'; p.write_bytes(base64.b64decode(o['result'])); return f'OK {p.name}'
    return f"FAIL {i}: {str(r.get('error'))[:300]}"
if __name__=='__main__':
    ids=[int(a) for a in sys.argv[1:]] or list(V)
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        for res in ex.map(gen, ids): print(res, flush=True)
