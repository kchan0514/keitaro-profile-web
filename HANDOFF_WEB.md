# 引き継ぎ文書: keitaro-profile-web を Claude Code Web で扱う

> 作成日: 2026-05-17
> 対象: Claude Code Web セッション（claude.ai/code）
> 元環境: Keitaroさんのローカル（ai-management monorepo の submodule）
> 元コンテキスト: `03_projects/keitaro-profile-web/`（GitHub: https://github.com/kchan0514/keitaro-profile-web ）

---

## TL;DR

- 清水啓太郎の **個人プロフィールサイト**（React + Vite + i18n）。所属レベルでの NVIDIA 明示は**例外的にOK**（CLAUDE.md ルール参照）。
- ブランチは `main` 直 push 運用（小規模個人サイト）。OG 画像/SEO/ヒーロー整備済み。
- Web セッションは **そのまま `main` で作業 → push** でOK。CIなし。
- 次にやること: ①記事/ブログ整備、②多言語コンテンツ追従、③Spatial Hub 個人活動セクション充実、④パフォーマンス改善。

---

## 1. リポジトリ基本情報

| 項目 | 値 |
|---|---|
| GitHub | https://github.com/kchan0514/keitaro-profile-web |
| 公開ドメイン | （`scripts/` 配下の SEO 設定参照、`index.html` の canonical/OG URL を確認） |
| ブランチ運用 | `main` 直 push（個人サイト・軽運用） |
| 技術スタック | React 19 + Vite + TypeScript + Tailwind CSS + i18next + react-router-dom 7 |
| 多言語 | i18next（`src/i18n/local/` に翻訳JSON、`LanguageWrapper.tsx` で切替） |
| その他 | Supabase / Firebase / Stripe / Recharts を依存に含む（用途要確認） |

---

## 2. 重要ルール: NVIDIA 表記の例外

ai-management の親ルール（CLAUDE.md §「外向き発信における NVIDIA 表現ルール」）では、**SNS/LP/記事/動画等で NVIDIA 社名を明示しない**のが原則。

**ただし keitaro-profile-web は例外として、所属レベルでの NVIDIA 明示OK**:

| 表現 | 可否 |
|---|---|
| ✅ "Senior Solution Architect at NVIDIA" | OK |
| ✅ "Senior SA, NVIDIA / Founder, Play Life Studio" | OK |
| ❌ NVIDIA社内の具体プロジェクト名 | NG |
| ❌ NVIDIA顧客名・案件詳細 | NG |
| ❌ NVIDIA未公開ロードマップ・社内情報 | NG |
| ❌ NVIDIA社内ツール・社内システム言及 | NG |

→ **「肩書きはOK、実務の具体は一切書かない」が境界線**。判断に迷う表現は本ファイル §6 に追記して Keitaroさんに確認。

詳細: ai-management `01_strategy/personal_branding_strategy.md` §1〜§7（Web からは見えない、要点は §6 に転記）

---

## 3. ローカルとの差分・引き継ぎ状態

### 2026-05-17 時点のローカル状態

- ブランチ: `main`
- 未コミット変更: なし
- 最新コミット: `35e4de0 feat(og): generate 1200x630 OG image + reusable template`
- リモートとの差分: なし

→ **Web セッション開始時は origin/main を pull するだけで最新**。

### Cloudflare / ホスティング情報（要補完）

- 親 ai-management の `7cbda2d chore(submodule): bump keitaro-profile-web with OG image` から「Cloudflare 系で運用」推察
- **デプロイ先・カスタムドメイン・環境変数の正確な情報を README に追記する必要あり**（次にやることのP1に入れた）

---

## 4. 次にやること（優先順）

### P1: ドキュメント整備（Web セッションが迷わないため）

- [ ] **README.md 作成**: 現状 README が存在しないか不完全。以下を最低限書く
  - デプロイ先・カスタムドメイン
  - ローカル開発手順（`npm install && npm run dev`）
  - i18n の追加方法（`src/i18n/local/` の構造）
  - ページ追加方法（`src/pages/` 配下の規約）
- [ ] **CLAUDE.md 作成**: プロジェクト固有のルール（NVIDIA表記例外、機微情報境界）

### P1: コンテンツ追従

- [ ] **ヒーロー文の最新化**: `9909976 feat(hero): align with personal branding strategy P0` 以降の戦略更新を反映
  - 3軸（民主化×Built to be Used×Human-Centered）の打ち出しが弱ければ強化
- [ ] **多言語コンテンツ追従**: 日本語で書いた最新ヒーロー/プロフィール文が `i18n/local/en/` に未反映なら追加

### P2: 記事/ブログ機能

- [ ] **記事ページのリスト化**: `0d0f05b 記事ように変更` 以降の構造を確認、Note記事へのリンク集 or 内製記事ページとして整備
- [ ] **Note記事との連動**: ai-management 側で `note-article` スキルで生成した記事を、profile-web から参照可能にする導線

### P2: Spatial Hub 個人活動セクション

- [ ] PLS 代表としての活動・登壇・著作（XR Robotics 本）等の Showcase セクションを追加
- [ ] 講演実績・出版物リストの整備

### P3: パフォーマンス / SEO 改善

- [ ] **Lighthouse 計測**: パフォーマンス・アクセシビリティ・SEO・ベストプラクティスの4項目で90点以上を目標
- [ ] **画像最適化**: `public/` 配下の画像を WebP 化、適切な width/height 指定
- [ ] **Core Web Vitals**: LCP / CLS / INP の改善
- [ ] **構造化データ追加**: Person schema（JSON-LD）が `79da365 feat(seo)` で入っているはずなので、Article/Project schema も追加検討

### P3: 依存ライブラリの整理

- [ ] `package.json` を確認: Stripe / Supabase / Firebase / Recharts が使われていなければ削除（バンドルサイズ削減）
- [ ] React 19 / react-router-dom 7 のメジャー対応漏れチェック

---

## 5. Web セッションでの作業フロー

```bash
# 1. main で作業（個人サイト・直push運用）
git checkout main
git pull origin main

# 2. 編集

# 3. ローカル動作確認（Web sandbox でも可）
npm install
npm run dev   # → vite dev server

# 4. push
git add -A
git commit -m "feat: 内容"
git push origin main
# → ホスティング側で自動デプロイ（要設定確認）
```

### Claude Code Web で「直接できない」こと

- ホスティング側ダッシュボード操作（Cloudflare Pages? Vercel? 要確認）
- カスタムドメイン設定
- Stripe / Supabase / Firebase の本番キー操作
- 実機ブラウザでの視覚確認（Web sandbox はスクショ機能なし／限定的）

→ 視覚的な最終確認は Keitaroさんに依頼。本ファイル §7 に追記。

---

## 6. パーソナルブランディング要点（Web セッション用ローカルコピー）

> ai-management `01_strategy/personal_branding_strategy.md` から要点抜粋。
> ⚠️ 詳細・最新版はローカルが SSOT。差異があればローカル優先。

### 自己定義の3軸

1. **民主化** — 専門技術を誰でも使える形に届ける
2. **Built to be Used** — 触れる・動かせる・実装可能なものを作る
3. **Human-Centered** — 人の認知・感情に立脚した設計

### ロール表現

- **Senior Solution Architect, NVIDIA**（所属レベルOK）
- **Founder & CEO, Play Life Studio**
- **Ph.D. Candidate, HCI / Gamification / Conversational AI**（博士課程）
- **Visiting Researcher / Advisor**（該当する社外活動があれば）

### 機微情報の境界

| 種類 | 公開可否 |
|---|---|
| NVIDIA所属表記 | ✅ OK |
| NVIDIA社内プロジェクト名 | ❌ NG |
| NVIDIA顧客名・案件 | ❌ NG |
| PLS自社プロダクト | ✅ OK（XRFlowBuilder/AI Talk Studio/Samurai Training/EmotionMirror等） |
| PLS顧客の社名 | ⚠️ 顧客許諾済みのもののみ |
| 受託案件の単価 | ❌ NG |
| 採用・財務情報 | ❌ NG |
| 研究テーマ（出版済み） | ✅ OK |
| 研究テーマ（未投稿） | ⚠️ 概念レベルのみ |

### トーン

- 簡潔・誠実・押し付けがましくない
- 専門用語は最小化、必要時のみ
- 過剰な煽り（「革命」「最強」「衝撃」）禁止
- 英語ページは Native check が理想（i18n の `en/` 追従時は要レビュー）

---

## 7. Keitaroさん依頼事項（Web → ローカル）

Web セッション中に発生した「ローカルでしかできないこと」をここに追記する：

- [ ] （例）デプロイ確認: commit XXX が本番反映されているか視覚チェック
- [ ] （例）NVIDIA 表記境界の確認: 「○○の文脈で『NVIDIAでのリードSA経験』と書いてOKか」
- [ ] （例）Note記事URL差し込み: ai-management 側の最新 Note 記事URLを教えてほしい

---

## 8. このファイルの更新ルール

- Web セッションで作業を進めるたびに「4. 次にやること」と「7. Keitaroさん依頼事項」を更新
- ローカル側戦略文書から要点を転記する際は §6 を拡張、SSOTはローカルである旨を明記
- ファイル自体は `main` に push して Web/ローカル両方から最新を共有
