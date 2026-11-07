# 個人サイト（keitaro-shimizu.com）のデザインパターンを gpt-6-astra で出す。
# ① concepts: Astra に5コンセプトを自由に考えさせる（JSON） → concepts.json
# ② images:   コンセプトごとにトップページのモックを生成 → raw/pattern-0N.png
# 使い方: python3 gen_patterns.py concepts | images [番号...]
import base64, json, re, sys, pathlib, concurrent.futures as cf
sys.path.insert(0, '/Users/keitaro/wkspace/ai-management/06_code/scripts')
from openai_ask import ask, _post

HERE = pathlib.Path(__file__).parent
BRIEF = (HERE.parent.parent / 'astra_prompt.md').read_text(encoding='utf-8')
BRIEF = BRIEF.split('---- ここから ----')[1].split('---- ここまで ----')[0].strip()
CONCEPTS = HERE / 'concepts.json'
OUT = HERE / 'raw'

def concepts():
    prompt = BRIEF + """

# 今回の出力形式（重要）
まず画像は作らず、5パターンの設計だけを JSON で返してください。前置き・コードフェンスなしの JSON 配列のみ。
各要素:
{
  "id": 1,
  "name_ja": "コンセプト名（短く）",
  "tagline_ja": "一言の説明",
  "why_ja": "この人にこの方向が合う理由（2文以内）",
  "risk_ja": "この方向の弱点（1文）",
  "palette": "背景・文字・アクセントの HEX と使い方",
  "typography": "見出し・本文の書体の方向",
  "layout": "ファーストビューと『書いたもの』の見せ方",
  "image_prompt_en": "この1パターンのトップページのモックを画像生成するための英語プロンプト。日本語の表示文字列は 「」 で正確に指定する。300語以内"
}
5つは互いに大きく異なること。少なくとも1つは、ヒントの4方向のどれでもないこと。"""
    txt = ask(prompt, effort='high')
    m = re.search(r'\[.*\]', txt, re.S)
    data = json.loads(m.group(0) if m else txt)
    CONCEPTS.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    for c in data:
        print(f"{c['id']}. {c['name_ja']} — {c['tagline_ja']}")

COMMON = """Design a single full-page website mockup (desktop, landscape) for the personal website of a Japanese founder.
Show it as a clean, realistic screenshot of the page itself, flat and front-facing (no browser chrome, no device frame, no perspective).
Show the first view AND, below it, the beginning of the writing (articles) section, so the page reads top to bottom.
Hard rules: the person's NAME is the hero, no big slogan; NO abstract CG (no glowing geometry, particles, neon, glow, space backgrounds);
Japanese is the primary language and must be large and legible; writing (articles) is more prominent than projects;
it must look trustworthy to a corporate visitor. Render Japanese text EXACTLY as given, character by character.
No logos, no watermark, no lorem ipsum. If you show a photo of a person, keep the face small or partly out of frame.
"""

def gen(c):
    r = _post('/responses', {
        'model': 'gpt-6-astra',
        'input': COMMON + '\n\nPattern concept: ' + c['name_ja'] + ' — ' + c['tagline_ja'] +
                 '\nPalette: ' + c['palette'] + '\nTypography: ' + c['typography'] +
                 '\nLayout: ' + c['layout'] + '\n\n' + c['image_prompt_en'],
        'tools': [{'type': 'image_generation', 'size': '1024x1536', 'quality': 'high'}],
        'tool_choice': {'type': 'image_generation'},
    }, timeout=900)
    for o in r.get('output', []):
        if o.get('type') == 'image_generation_call' and o.get('result'):
            p = OUT / f"pattern-{c['id']:02d}.png"
            p.write_bytes(base64.b64decode(o['result']))
            return f"OK {p.name}"
    return f"FAIL {c['id']}: {str(r.get('error'))[:300]}"

def images(ids):
    data = json.loads(CONCEPTS.read_text(encoding='utf-8'))
    targets = [c for c in data if not ids or c['id'] in ids]
    with cf.ThreadPoolExecutor(max_workers=5) as ex:
        for res in ex.map(gen, targets):
            print(res, flush=True)

if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'concepts'
    if mode == 'concepts':
        concepts()
    else:
        images([int(a) for a in sys.argv[2:]])
