#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const os = require("node:os");

const PACKAGE_NAME = "readme-bilingual-creator";
const SKILL_NAME = "readme-bilingual-creator";
const REPO_ROOT = path.resolve(__dirname, "..");

function printUsage() {
  console.log(`Usage:
  ${PACKAGE_NAME} install [--force] [--dry-run] [--agents-only] [--claude-only]

Commands:
  install       Install the bundled skills into ~/.agents and ~/.claude

Options:
  --force       Overwrite an existing installed skill directory
  --dry-run     Print planned actions without writing files
  --agents-only Install only ~/.agents/skills/${SKILL_NAME}
  --claude-only Install only ~/.claude/skills/${SKILL_NAME}
  --help        Show this help message
`);
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}

function parseArgs(argv) {
  const args = argv.slice(2);
  const options = {
    force: false,
    dryRun: false,
    agentsOnly: false,
    claudeOnly: false
  };

  let command = null;

  for (const arg of args) {
    if (arg === "--help" || arg === "-h") {
      printUsage();
      process.exit(0);
    }
    if (arg === "--force") {
      options.force = true;
      continue;
    }
    if (arg === "--dry-run") {
      options.dryRun = true;
      continue;
    }
    if (arg === "--agents-only") {
      options.agentsOnly = true;
      continue;
    }
    if (arg === "--claude-only") {
      options.claudeOnly = true;
      continue;
    }
    if (arg.startsWith("-")) {
      fail(`unknown option: ${arg}`);
    }
    if (command !== null) {
      fail(`unexpected argument: ${arg}`);
    }
    command = arg;
  }

  if (command === null) {
    printUsage();
    process.exit(1);
  }

  if (options.agentsOnly && options.claudeOnly) {
    fail("--agents-only and --claude-only cannot be used together");
  }

  return { command, options };
}

function copyDirectoryRecursive(sourceDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(sourceDir, { withFileTypes: true })) {
    const sourcePath = path.join(sourceDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirectoryRecursive(sourcePath, destPath);
      continue;
    }
    if (entry.isSymbolicLink()) {
      const linkTarget = fs.readlinkSync(sourcePath);
      fs.symlinkSync(linkTarget, destPath);
      continue;
    }
    fs.copyFileSync(sourcePath, destPath);
  }
}

function installTarget(target) {
  const { label, sourcePath, destPath, force, dryRun } = target;
  const exists = fs.existsSync(destPath);

  if (exists && !force) {
    fail(`${label} already exists at ${destPath}. Re-run with --force to overwrite it.`);
  }

  if (dryRun) {
    if (exists) {
      console.log(`[dry-run] overwrite ${label}: ${destPath}`);
    } else {
      console.log(`[dry-run] create ${label}: ${destPath}`);
    }
    return;
  }

  fs.mkdirSync(path.dirname(destPath), { recursive: true });

  if (exists) {
    fs.rmSync(destPath, { recursive: true, force: true });
  }

  copyDirectoryRecursive(sourcePath, destPath);
  console.log(`Installed ${label}: ${destPath}`);
}

function runInstall(options) {
  const homeDir = os.homedir();
  const targets = [];

  if (!options.claudeOnly) {
    targets.push({
      label: ".agents skill",
      sourcePath: path.join(REPO_ROOT, ".agents", "skills", SKILL_NAME),
      destPath: path.join(homeDir, ".agents", "skills", SKILL_NAME),
      force: options.force,
      dryRun: options.dryRun
    });
  }

  if (!options.agentsOnly) {
    targets.push({
      label: ".claude skill",
      sourcePath: path.join(REPO_ROOT, ".claude", "skills", SKILL_NAME),
      destPath: path.join(homeDir, ".claude", "skills", SKILL_NAME),
      force: options.force,
      dryRun: options.dryRun
    });
  }

  for (const target of targets) {
    if (!fs.existsSync(target.sourcePath)) {
      fail(`source path not found: ${target.sourcePath}`);
    }
  }

  for (const target of targets) {
    installTarget(target);
  }

  if (options.dryRun) {
    console.log("[dry-run] no files were written");
  }
}

function main() {
  const { command, options } = parseArgs(process.argv);

  if (command !== "install") {
    fail(`unknown command: ${command}`);
  }

  runInstall(options);
}

main();
