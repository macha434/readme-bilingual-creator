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

No install step is required. The repository contents are plain Markdown skill and template files.

## Usage

Use the included templates as the basis for project documentation:

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
git diff
git status
```

When updating the templates or skills:

- keep `README.md` as the primary English document
- keep `README.ja.md` as the Japanese counterpart
- preserve matching section order across both languages

## Security

This repository does not currently include a separate security policy. Please review changes before publishing generated README content, especially if a source repository may contain sensitive internal details.

## License

`MIT`
