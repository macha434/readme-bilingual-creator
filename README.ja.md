[English version is here](README.md)

# readme-bilingual-creator

英語版をメイン、日本語版をサブとしてそろえた README を作るための、短版テンプレートとスキル定義をまとめた小さなリポジトリである。

## 概要

- 対象ユーザー: 英語と日本語の両方で README を公開したいリポジトリのメンテナ
- 解決する課題: README をゼロから作るのは手間がかかり、英語版と日本語版の構成や内容がずれやすい
- 提供価値: 日英で対応しやすい短版構成を、そのまま再利用できる

このリポジトリの README テンプレート構成は、GitHub Docs、Google の README スタイルガイド、Make a README、Open Source Guides を元にしつつ、実運用で使いやすい最小構成へ圧縮して整理したものである。

## 主な機能

- 見出し順をそろえた英語版・日本語版の短版 README テンプレートを含む
- `.agents/skills/readme-bilingual-creator/` に、英語メイン・日本語サブで README を整備する Codex 用スキルを含む
- `.claude/skills/readme-bilingual-creator/` に、同じ運用ルールを持つ Claude Code 用スキルを含む

## 技術スタック

- 言語: Markdown
- フレームワーク: なし
- データストア: なし

## セットアップ

```bash
git clone https://github.com/macha434/readme-bilingual-creator.git
cd readme-bilingual-creator
```

リポジトリを開発するだけであればインストールは不要で、そのまま Markdown のテンプレートとスキル定義を参照できる。

同梱されたスキルをホームディレクトリへ配置するには、次を実行する。

```bash
pnpm dlx @macha434/readme-bilingual-creator install
```

## 使い方

同梱されたスキルをホームディレクトリへ配置するには、次を実行する。

```bash
pnpm dlx @macha434/readme-bilingual-creator install
```

主な派生コマンドは次のとおりである。

```bash
pnpm dlx @macha434/readme-bilingual-creator install --dry-run
pnpm dlx @macha434/readme-bilingual-creator install --force
pnpm dlx @macha434/readme-bilingual-creator install --agents-only
pnpm dlx @macha434/readme-bilingual-creator install --claude-only
```

各コマンドの内容は次のとおりである。

| コマンド | 内容 |
| --- | --- |
| `install` | 同梱された 2 つのスキルディレクトリをホームディレクトリへ配置する。 |
| `install --dry-run` | ファイルを書き込まず、配置先と予定動作だけを表示する。 |
| `install --force` | 既に配置済みの同名スキルディレクトリを上書きする。 |
| `install --agents-only` | `~/.agents` 側のスキルツリーだけを配置する。 |
| `install --claude-only` | `~/.claude` 側のスキルツリーだけを配置する。 |

インストーラの配置先は次のとおりである。

- `~/.agents/skills/readme-bilingual-creator/`
- `~/.claude/skills/readme-bilingual-creator/`

標準動作では、対象のスキルディレクトリが既に存在する場合は停止する。既存の配置を上書きしたい場合のみ `--force` を使う。

リポジトリに含まれる生のテンプレートとスキル定義を直接使うこともできる。README の土台として、次のテンプレートを使う。

- `.agents/skills/readme-bilingual-creator/references/README_TEMPLATE_SHORT.en.md`
- `.agents/skills/readme-bilingual-creator/references/README_TEMPLATE_SHORT.ja.md`

AI コーディングアシスタントに README 作成や更新を任せたい際は、次のスキル定義を使う。

- Codex 用スキル: `.agents/skills/readme-bilingual-creator/`
- Claude Code 用スキル: `.claude/skills/readme-bilingual-creator/`

短版構成の中心セクションは次のとおりである。

- `Overview / 概要`
- `Key Features / 主な機能`
- `Setup / セットアップ`
- `Usage / 使い方`
- `Development / 開発`
- `Security / セキュリティ`
- `License / ライセンス`

これにより、初期公開に必要な説明を押さえつつ、日英の対応関係も保ちやすくしている。

## 開発

```bash
node ./bin/readme-bilingual-creator.cjs install --dry-run
git diff
git status
```

このリポジトリで使う主なコマンドの内容は次のとおりである。

| コマンド | 内容 |
| --- | --- |
| `node ./bin/readme-bilingual-creator.cjs install --dry-run` | `~/.agents` と `~/.claude` に何を配置するかを、書き込みなしで確認する。 |
| `git diff` | 公開やコミットの前にローカル差分を確認する。 |
| `git status` | 変更済み、ステージ済み、未追跡のファイルを確認する。 |

テンプレートやスキルを更新する際の基本方針は次のとおりである。

- `README.md` を英語版の主ファイルにする
- `README.ja.md` を日本語版の対になるファイルにする
- 両言語で見出し順とセクション対応をそろえる
- パッケージ化したインストーラと `.agents` / `.claude` の同梱資産を常に同期させる

## セキュリティ

このリポジトリには、現時点で専用のセキュリティポリシーは含まれていない。生成した README を公開する前に、元リポジトリの機密情報や内部情報が混ざっていないかを確認すること。

## ライセンス

`MIT`
