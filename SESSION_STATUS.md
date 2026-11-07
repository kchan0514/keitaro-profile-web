# SESSION_STATUS — keitaro-profile-web（keitaro-shimizu.com）

**最終更新**: 2026-11-07
**フェーズ**: 事実修正を本番反映済み → 抜本リデザインの方向決め

---

## 現在の状況
- 公開: https://keitaro-shimizu.com/ja （/en）。main への push で自動デプロイ（反映まで1〜2分）
- 中身は v0.4（2026-05）のまま。8月の刷新方針 `docs/site_design_policy.md` は**未実装**
- 2026-11-07 清水さん「デザインを抜本的に変えたい」→ 方向 **A「書く人」＋作ったもの・取り組みの紹介** を選択

## 直近の決定
| 日付 | 決定 | 理由 / 却下 |
|---|---|---|
| 2026-11-07 | **事実修正を先に本番反映**（db73104）: 博士課程の在籍表記を全て満期退学に。hero 肩書・About 現在のポジション・研究への想い・Contact 所属/研究室・学歴の期間と状態・meta 3箇所・JSON-LD | 9/30 満期退学後も「Ph.D Candidate」表記。退学 note 拡散で本名検索される |
| 2026-11-07 | 方向は **A「書く人」が主役、作ったもの・取り組みが2番手** | 実際に人が集まったのは記事経由。8月の B「工房（Works 主役）」は実物写真・数字がそろわず止まっていた |
| 2026-08-03 | 役割＝名刺、ヒーローは名前主役、NVIDIA・博士は Career のみ | `docs/site_design_policy.md`。A 方向で改訂予定 |

## ブロッカー（2026-11-07）
- Astra 生成の準備完了（`docs/design/astra/gen_patterns.py`：① Astra が5コンセプトを考える → ② 画面を生成）。
  ただし **OpenAI の API キーが無効（HTTP 401）**。`06_code/scripts/.env` の `OPENAI_API_KEY` を差し替えれば `python3 gen_patterns.py concepts` → `images` で再開できる。10/24 のセキュリティ対応で失効させたキーの可能性

## 次のアクション
- [ ] A 方向の構成・ビジュアル案を清水さんが確認（構成: 書いたもの／作ったもの／About／Contact）
- [ ] 「作ったもの・取り組み」の掲載リスト確定
- [ ] 記事一覧を note RSS（note.com/keitaro_shimizu/rss）から自動生成に切替（現状は手書き16件で 2025-10 で停止。退学 note も未掲載）
- [ ] `docs/site_design_policy.md` を A 方向で改訂

## メモ
- git identity はこのリポジトリのみ `kchan0514 <k.taroooo@gmail.com>`（既存履歴に合わせた）
- `out/` はビルド出力（未追跡・未 ignore）
- everyonelearns（思想サイト）は 2026-08-02 で実装前のまま停止 → 個人サイトとの役割の食い合いは当面なし
