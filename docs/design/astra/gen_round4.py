# 第4ラウンド（2026-11-08）: 清水「5＞4。ベースは5、フォントは2や3のような主張・インパクト系。白ベース」
# 第3ラウンドの 5（土台）・2（書体）・4（潜航図）を参照画像として渡し、5の作り分けを4案出す。
# 使い方: python3 gen_round4.py [番号...]
import base64, sys, pathlib, concurrent.futures as cf
sys.path.insert(0, '/Users/keitaro/wkspace/ai-management/06_code/scripts')
from openai_ask import _post

HERE = pathlib.Path(__file__).parent
OUT = HERE / 'raw4'; OUT.mkdir(exist_ok=True)
REF = {k: HERE / 'raw3' / f'pattern-0{n}.png' for k, n in [('base', 5), ('type', 2), ('map', 4)]}

def img(p):
    return {'type': 'input_image', 'image_url': 'data:image/png;base64,' + base64.b64encode(p.read_bytes()).decode()}

COMMON = """You are given reference images. Image 1 is the BASE design the client loved: a hand-drawn notebook-style personal homepage
(warm white paper, pencil sketch illustrations of each project, red handwritten annotations, notebook ruled lines).
Image 2 shows the BOLD heavy Japanese gothic headline typography the client wants to borrow. Image 3 shows a contour-map "dive and cross" career diagram the client also liked.

Create a NEW top page that keeps Image 1's hand-drawn notebook world, but is stronger and more confident:
- WHITE / warm-white paper base. NOT a dark background.
- Headlines in a heavy, impactful Japanese gothic (very bold, tight, large, like Image 2). Body text stays a clean readable gothic.
- The hand-drawn sketches and red handwritten notes remain the personality. It must feel like a founder's working notebook, NOT a children's picture book or a school textbook.
- Flat, front-facing screenshot of the page only, portrait, no browser chrome, no device frame.
- Render Japanese text EXACTLY as given, legible. Do NOT put any design explanation or concept description text on the page. No lorem ipsum, no logos, no fake numbers.
- No company name of any employer. No mention of PhD or university withdrawal.

Content that must exist on the page:
- Small top-left: 「清水 啓太郎」 and 「keitaro-shimizu.com」. Small nav: 「読む」「つくったもの」「お問い合わせ」
- One line: 「XR・デジタルツイン・生成AIを、産業と行政の現場へ。」
- 「書いたもの｜note」 with 「ムダは本当にムダなのか」「技術ではなく"問い"が研究をつくる」「VRで会議、新しいコミュニケーションのカタチ」
- 「つくったもの・取り組み」 with sketches for: 「XRFlowBuilder」「Samurai Training」「AI Talk Studio」「PLATEAU SDK-Toolkits」「千葉県 インフラDXアドバイザー」「読み聞かせ×会話エージェントの研究」
- Bottom: 「お問い合わせ」 and 「@GIZAGIZAHEART」
"""

VARIANTS = {
 1: """Variant: HEADLINE-DRIVEN. The hero is a huge heavy-gothic headline 「技術は、特別な人のものじゃない。」 spanning the width,
with one red handwritten aside scribbled beside it: 「わからない、から一緒に。」. Then the sketches follow in a confident grid.""",
 2: """Variant: THE DIVE MAP, HAND-DRAWN. Redraw Image 3's contour map as a pencil sketch in the notebook: hand-drawn contour islands labeled
「ゲーム・XR」「都市・産業」「生成AI」「行政」 with a red pen route diving deep and crossing between them, and the projects pinned on the map.
Heavy gothic headline: 「深く潜って、渡る。」. The map is the hero.""",
 3: """Variant: CROSSWALK NOTEBOOK. Big heavy-gothic headline 「白いところだけ、渡る。」. The page sections are laid out like the white stripes of a
pedestrian crossing drawn with a thick marker on the notebook paper (white/black-ish ink stripes, but the page base stays white),
each stripe holding 「読む」「つくる」「話す」. A small hand-drawn child jumping on the white stripes, seen from behind.""",
 4: """Variant: PLAYFUL BOLD. Heavy rounded-but-strong gothic headline 「世界を、遊び場にする。」 with a game-like sense of play:
hand-drawn checkboxes, arrows and a small hand-drawn controller doodle in the margin. The project sketches are presented like
pages of a quest notebook (no scores, no badges, no pixel art). Confident, adult, witty.""",
}

def gen(i):
    r = _post('/responses', {
        'model': 'gpt-6-astra',
        'input': [{'role': 'user', 'content': [img(REF['base']), img(REF['type']), img(REF['map']),
                                               {'type': 'input_text', 'text': COMMON + '\n' + VARIANTS[i]}]}],
        'tools': [{'type': 'image_generation', 'size': '1024x1536', 'quality': 'high'}],
        'tool_choice': {'type': 'image_generation'},
    }, timeout=900)
    for o in r.get('output', []):
        if o.get('type') == 'image_generation_call' and o.get('result'):
            p = OUT / f'pattern-{i:02d}.png'; p.write_bytes(base64.b64decode(o['result'])); return f'OK {p.name}'
    return f"FAIL {i}: {str(r.get('error'))[:300]}"

if __name__ == '__main__':
    ids = [int(a) for a in sys.argv[1:]] or list(VARIANTS)
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        for res in ex.map(lambda i: (lambda: gen(i))() if True else None, ids):
            print(res, flush=True)
