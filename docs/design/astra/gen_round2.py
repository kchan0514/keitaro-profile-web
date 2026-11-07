# 第2ラウンド: 「個性がない」（清水 2026-11-07）を受けて、縛りを緩め、個性の材料を渡し、
# 各案に「この人にしか作れない一手（シグネチャー）」を必須にする。
# 使い方: python3 gen_round2.py concepts | images [番号...]
import base64, json, re, sys, pathlib, concurrent.futures as cf
sys.path.insert(0, '/Users/keitaro/wkspace/ai-management/06_code/scripts')
from openai_ask import ask, _post

HERE = pathlib.Path(__file__).parent
CONCEPTS = HERE / 'concepts_round2.json'
OUT = HERE / 'raw2'
OUT.mkdir(exist_ok=True)

BRIEF = """
あなたは、個人サイトのアートディレクターです。清水 啓太郎（Keitaro Shimizu）の個人サイト keitaro-shimizu.com のトップページを、
**互いに大きく異なる5パターン**で提案してください。

# 前回の失敗（必ず読んで避けること）
前回の5案は、全部「大きな名前 ＋ 記事カード3枚 ＋ 作ったものの一覧」という**同じ骨組みに色を塗り替えただけ**で、
本人から「全部ダメ、個性がない」と言われた。整っているが、誰のサイトでも通用する。
今回は**この人にしか作れない、一度見たら忘れないサイト**にすること。整っているだけの案は不要。

# この人の個性の材料（本人が講演・SNSで公に語っていること）
- 高校時代、食事もせず学校にも行かずオンラインゲームに没頭した「ネトゲ廃人」。親を困らせ、青春を失った。
  同時に、世界中の仲間、リーダーシップ、多様性への理解、そして「自分の意志次第で何にでもなれる」という感覚を手に入れた。
  失ったものと得たものを、両方そのまま語る人
- 大学で専攻の壁が消え「越境思考」が開いた。「自分の人生をプレイしよう」という主体性がそこから始まった
- 世間の「選択と集中」「専門主義」「君の役割はこれだから」と、自分の「好奇心旺盛」「マルチポテンシャライト」「楽しいことをやりたい」の間で葛藤してきた
- ニーチェの創造的ニヒリズムが支え。「価値は自分で創るもの」「一度きりの人生をゲームのように」
- 幸せの比喩として好んで使う言葉:「**横断歩道の白いところだけを渡ることを楽しむ子ども**」
- 経歴を「ゲームのように生きてきた人生」と呼ぶ。中身は: ソニー → スクウェア・エニックス（ゲームプログラマー）→ リコー → 博報堂（研究ディレクター）→ Unity → 起業。
  途中で、部門がなくなりレイオフ／シリコンバレーのスタートアップと関係構築／ウィーンの歴史建築をフォトグラメトリ／
  発売1か月前にボス戦の仕様変更指令／共同創業者が去って会社がめちゃくちゃに／VCピッチ／官公庁プロジェクト／新人歓迎会でコント
- 会社 Play Life Studio のミッションは「Gamify the World — 世界をゲーム化せよ」。XR・デジタルツイン・生成AIを産業現場と行政に実装している
- X のハンドルは @GIZAGIZAHEART
- 博士課程を6年近く続けたが満期退学し、その失敗と教訓を note に正直に書いたら18万人に読まれた。読者は「失敗を正直に書く人」として訪れる

# サイトが果たすこと（ここは守る）
- 記事を読んで来た人が「この人は何者か」を感じ取れる
- 他に書いたもの（note 記事）を読み進められる
- 作ったもの・取り組み（XRFlowBuilder／Samurai Training／AI Talk Studio／PLATEAU SDK-Toolkits for Unity／千葉県 インフラDXアドバイザー／読み聞かせ×会話エージェントの研究）が分かる
- 連絡できる
- 日本語が主役で読める

# 緩めた条件
- 名前を大きく置く必要はない。構造そのもの（1枚の地図、横に進む道、ゲームのタイトル画面、雑誌の表紙…）を変えてよい
- 写真・イラスト・図・遊びのある演出を使ってよい
- 品位は保つが、無難さより記憶に残ることを優先する。ただし、ふざけすぎて胡散臭くはしない

# 引き続き避けること
- AIが作りがちな「光る幾何学・パーティクル・ネオン・グロー・宇宙背景」（個性ではなくテンプレの記号なので）
- 「大きな名前 ＋ カード3枚 ＋ 一覧」の骨組み
"""

def concepts():
    prompt = BRIEF + """

# 出力形式（重要）
画像はまだ作らず、5パターンの設計だけを JSON で返してください。前置き・コードフェンスなしの JSON 配列のみ。
5案は、シグネチャーの種類が重ならないようにする（例: 比喩から作る／構造から作る／文字組みから作る／イラストから作る／動き・遊びから作る）。
各要素:
{
  "id": 1,
  "name_ja": "コンセプト名（短く）",
  "signature_ja": "この人にしか作れない一手。訪問者が帰った後に覚えているもの（2文以内）",
  "source_ja": "その一手が、上の材料のどれから来ているか",
  "tagline_ja": "一言の説明",
  "risk_ja": "この方向の弱点（1文）",
  "image_prompt_en": "この1パターンのトップページを画像生成するための英語プロンプト。構造・配色・書体・シグネチャーの描き方を具体的に。日本語の表示文字列は 「」 で正確に指定する。350語以内"
}"""
    txt = ask(prompt, effort='high')
    m = re.search(r'\[.*\]', txt, re.S)
    data = json.loads(m.group(0) if m else txt)
    CONCEPTS.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding='utf-8')
    for c in data:
        print(f"{c['id']}. {c['name_ja']} — {c['signature_ja']}")

COMMON = """Design the top page of a personal website for a Japanese founder, as a flat, front-facing screenshot of the page itself
(no browser chrome, no device frame, no perspective). Portrait, so the page reads top to bottom.
This must have a strong, memorable PERSONALITY. Do NOT produce the generic layout of "big name + three article cards + a project list".
Avoid AI-cliche visuals (glowing geometry, particles, neon, glow, space backgrounds).
Japanese is the primary language; render Japanese text EXACTLY as given, character by character, legible.
No logos, no watermark, no lorem ipsum. If a person appears, keep the face small, from behind, or partly out of frame.
"""

def gen(c):
    r = _post('/responses', {
        'model': 'gpt-6-astra',
        'input': COMMON + '\n\nConcept: ' + c['name_ja'] + ' — ' + c['tagline_ja'] +
                 '\nSignature (must be clearly visible): ' + c['signature_ja'] + '\n\n' + c['image_prompt_en'],
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
    concepts() if mode == 'concepts' else images([int(a) for a in sys.argv[2:]])
