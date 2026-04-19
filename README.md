[日本語版はこちら](README.ja.md)

# readme-bilingual-creator

A small repository that packages bilingual README templates and reusable skill definitions for creating English-first and Japanese-secondary project READMEs.

## Overview

- Target users: maintainers who want a practical bilingual README workflow for repositories that publish both English and Japanese documentation
- Problem solved: starting from a blank README or an inconsistent existing README takes time, and it is easy for English and Japanese versions to drift apart
- Value: this repository provides a compressed short-form structure that stays easy to maintain in both languages

The template structure in this repository was shaped from GitHub Docs, Google's README style guidance, Make a README, and Open Source Guides, then compressed into a practical short format for day-to-day repository maintenance.

## Key Features

- Includes short-form README templates in English and Japanese with matching section order
- Includes a Codex skill under `.agents/skills/readme-bilingual-creator/` for English-first and Japanese-secondary README maintenance
- Includes a Claude Code skill under `.claude/skills/readme-bilingual-creator/` with the same workflow and reference files

## Tech Stack

- Language: Markdown
- Framework: none
- Data store: none

## Setup

```bash
git clone https://github.com/macha434/readme-bilingual-creator.git
cd readme-bilingual-creator
```

For repository development, no install step is required. The source repository contents are plain Markdown skill and template files.

To install the bundled skills into your home directory with pnpm:

```bash
pnpm dlx @macha434/readme-bilingual-creator install
```

## Usage

To install the bundled skills into your home directory:

```bash
pnpm dlx @macha434/readme-bilingual-creator install
```

Useful variants:

```bash
pnpm dlx @macha434/readme-bilingual-creator install --dry-run
pnpm dlx @macha434/readme-bilingual-creator install --force
pnpm dlx @macha434/readme-bilingual-creator install --agents-only
pnpm dlx @macha434/readme-bilingual-creator install --claude-only
```

Command details:

| Command | What it does |
| --- | --- |
| `install` | Installs both bundled skill directories into your home directory. |
| `install --dry-run` | Prints the target paths and planned actions without writing files. |
| `install --force` | Overwrites an existing installed skill directory. |
| `install --agents-only` | Installs only the `~/.agents` skill tree. |
| `install --claude-only` | Installs only the `~/.claude` skill tree. |

The installer writes to:

- `~/.agents/skills/readme-bilingual-creator/`
- `~/.claude/skills/readme-bilingual-creator/`

By default, the installer stops if the target skill directory already exists. Use `--force` only when you want to overwrite the installed copy.

The repository also includes the raw templates and skill sources. Use the included templates as the basis for project documentation:

- `.agents/skills/readme-bilingual-creator/references/README_TEMPLATE_SHORT.en.md`
- `.agents/skills/readme-bilingual-creator/references/README_TEMPLATE_SHORT.ja.md`

Use the included skills when you want an AI coding assistant to generate or update bilingual READMEs:

- Codex skill: `.agents/skills/readme-bilingual-creator/`
- Claude Code skill: `.claude/skills/readme-bilingual-creator/`

The short-form structure centers on:

- `Overview`
- `Key Features`
- `Setup`
- `Usage`
- `Development`
- `Security`
- `License`

This keeps the English and Japanese versions easy to align while still covering the practical information needed for an initial open source release.

## Development

```bash
node ./bin/readme-bilingual-creator.cjs install --dry-run
git diff
git status
```

Repository-specific commands:

| Command | What it does |
| --- | --- |
| `node ./bin/readme-bilingual-creator.cjs install --dry-run` | Checks what the installer would place under `~/.agents` and `~/.claude` without writing files. |
| `git diff` | Reviews local changes before publishing or committing. |
| `git status` | Confirms which files are modified, staged, or untracked. |

When updating the templates or skills:

- keep `README.md` as the primary English document
- keep `README.ja.md` as the Japanese counterpart
- preserve matching section order across both languages
- keep the packaged installer in sync with the bundled `.agents` and `.claude` source trees

## Security

This repository does not currently include a separate security policy. Please review changes before publishing generated README content, especially if a source repository may contain sensitive internal details.

## License

`MIT`
