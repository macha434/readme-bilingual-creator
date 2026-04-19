---
name: readme-bilingual-creator
description: このリポジトリで README を新規作成または更新する際に使うスキルである。references/README_TEMPLATE_SHORT.en.md と references/README_TEMPLATE_SHORT.ja.md を使って、英語版 README.md をメイン、日本語版 README.ja.md をサブとして整備したい際に使う。README の統一フォーマット化、日英2言語化、既存 README の短版テンプレ準拠への移行が必要な場面で使う。
---

# README Bilingual Creator

このスキルは、この repo で日英 README を短版テンプレートで整備するための実行手順をまとめたものである。

## 固定方針

- 英語版 `README.md` をメインにする。
- 日本語版 `README.ja.md` をサブにする。
- テンプレートは `references/` 配下の次を使う。
  - `references/README_TEMPLATE_SHORT.en.md`
  - `references/README_TEMPLATE_SHORT.ja.md`

## 実行手順

1. まず `references/README_TEMPLATE_SHORT.en.md` と `references/README_TEMPLATE_SHORT.ja.md` を読む。
2. 既存 `README.md` の事実情報（機能、セットアップ、コマンド）を抽出する。
3. 英語版 `README.md` を短版テンプレ準拠で作成・更新する。
4. 日本語版 `README.ja.md` を短版テンプレ準拠で作成・更新する。
5. `README.md` の先頭に日本語版へのリンクを入れる。
6. `README.ja.md` の先頭に英語版へのリンクを入れる。
7. 両ファイルの見出し順とセクション対応をそろえる。

## 記述ルール

- 事実ベースで書く。未実装機能や推測は書かない。
- コマンド例は実行可能なものだけを載せる。
- コマンドの内容を説明する場合は、可能であれば表で整理する。
- リポジトリ固有のコマンドが存在している場合は、コマンド名だけで終わらせず、何をするコマンドかも記載する。
- 文章は短く、1セクション1目的で書く。
- 長文の背景説明は避け、詳細は別ドキュメントへリンクする。
- 英語版を基準にし、日本語版は意味対応を優先して翻訳する。

## 出力チェック

- `README.md` が英語であること。
- `README.ja.md` が日本語であること。
- 両 README に相互リンクがあること。
- セットアップと開発コマンドが最新状態と一致していること。
- テンプレの必須見出し（Overview/概要、Setup/セットアップ、Usage/使い方、Development/開発、License/ライセンス）が埋まっていること。

## 想定リクエスト例

- 「README を英語メイン・日本語サブで整備して」
- 「短版テンプレで README を作って」
- 「既存 README を日英2言語にして」
