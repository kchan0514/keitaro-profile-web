# 第3ラウンド（2026-11-08）: 退学を顔にしない。人物の特徴6つから、ジャンルの違う8案を作る。
# 使い方: python3 gen_round3.py concepts | images [番号...]
import base64, json, re, sys, pathlib, concurrent.futures as cf
sys.path.insert(0, '/Users/keitaro/wkspace/ai-management/06_code/scripts')
from openai_ask import ask, _post

HERE = pathlib.Path(__file__).parent
CONCEPTS = HERE / 'concepts_round3.json'
OUT = HERE / 'raw3'
OUT.mkdir(exist_ok=True)

BRIEF = """
あなたは、個人サイトのアートディレクターです。清水 啓太郎（Keitaro Shimizu）の個人サイト keitaro-shimizu.com のトップページを、
**互いに大きく異なる8パターン**で提案してください。

# これまでの経緯
- 第1ラウンド: 全案が「大きな名前＋記事カード3枚＋一覧」の同じ骨組み → 「個性がない」
- 第2ラウンド: 個性は出たが、5案中4案が「博士課程を満期退学」を顔にした → 本人「退学を全面に押し出すつもりはない」
- 今回: **退学には触れない**。人物の特徴そのものからデザインを作る

# この人の特徴（経歴・人柄の分析）
1. 没頭してから越境する — 高校でオンラインゲームに没頭（ネトゲ廃人）→ 大学で専攻の壁が消える →
   ソニー → スクウェア・エニックス（ゲームプログラマー）→ リコー（PM）→ 博報堂（研究ディレクター）→ Unity → グローバルテック企業のソリューションアーキテクト → 起業、県のインフラDXアドバイザー。浅く広くではなく、毎回深く潜ってから次へ渡る
2. ルールは自分で作る — 幸せの比喩は「横断歩道の白いところだけを渡ることを楽しむ子ども」。ニーチェの創造的ニヒリズム「価値は自分で創る」
3. 遊びを本気でやる — 会社 Play Life Studio のミッションは「Gamify the World — 世界をゲーム化せよ」。人生を「ゲームのように生きてきた」と呼ぶ。新人歓迎会でコント、発売1か月前のボス戦仕様変更
4. 得たものと失ったものを両方言う — ネトゲで青春を失い、世界中の仲間とリーダーシップを得た。部門消滅でレイオフ、共同創業者が去ったことも隠さない
5. 作って現場に置く — XR・デジタルツイン・生成AIを、研究や構想で止めず産業現場と行政に実装する。ウィーンの歴史建築をフォトグラメトリした
6. 技術を開く — 「技術は特別な人のものではない」
一言で: **自分でルールを決めて、世界を遊び場に変える人。**
コミュニケーションは構造的・高密度。X のハンドルは @GIZAGIZAHEART

# サイトが果たすこと（守る）
- note の記事を読んで来た人が「この人は何者か」を感じ取れる
- 書いたもの（note 記事）を読み進められる。例: 「ムダは本当にムダなのか」「技術ではなく"問い"が研究をつくる」「VRで会議、新しいコミュニケーションのカタチ」
- 作ったもの・取り組み（XRFlowBuilder／Samurai Training／AI Talk Studio／PLATEAU SDK-Toolkits for Unity／千葉県 インフラDXアドバイザー／読み聞かせ×会話エージェントの研究）が分かる
- 連絡できる／日本語が主役で読める

# 自由にしてよいこと
- 構造・比喩・写真・イラスト・図・遊びのある演出。名前を大きく置く必要はない
- 無難さより記憶に残ること。ただし胡散臭くしない

# 避けること
- 光る幾何学・パーティクル・ネオン・グロー・宇宙背景
- 「大きな名前＋カード3枚＋一覧」の骨組み
- 退学・博士課程への言及、NVIDIA など勤務先の社名
"""

def concepts():
    prompt = BRIEF + """

# 出力形式（重要）
画像はまだ作らず、8パターンの設計だけを JSON で返してください。前置き・コードフェンスなしの JSON 配列のみ。
8案は**デザインのジャンルを1案ずつ変える**こと: ①雑誌・エディトリアル ②スイス・タイポグラフィのポスター ③ゲームの画面（ただしレトロ風の安直な模倣はしない）④地図・図解 ⑤手描き・ノート・スケッチ ⑥写真主導のドキュメンタリー ⑦ブルータリズム・実験的 ⑧和の余白・ミニマル。どの案も上の特徴のどれかを核にし、核が重ならないようにする。
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
    with cf.ThreadPoolExecutor(max_workers=4) as ex:
        for res in ex.map(gen, targets):
            print(res, flush=True)

if __name__ == '__main__':
    mode = sys.argv[1] if len(sys.argv) > 1 else 'concepts'
    concepts() if mode == 'concepts' else images([int(a) for a in sys.argv[2:]])
