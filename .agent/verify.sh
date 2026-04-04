#!/usr/bin/env bash
set -euo pipefail

echo "=== Forge Verification ==="

# Detect and run available checks
if [ -f "package.json" ]; then
    echo "--- Node.js project detected ---"
    [ "$(node -e 'console.log(!!require("./package.json").scripts?.lint)')" = "true" ] && npm run lint || echo "No lint script"
    [ "$(node -e 'console.log(!!require("./package.json").scripts?.typecheck)')" = "true" ] && npm run typecheck || echo "No typecheck script"
    [ "$(node -e 'console.log(!!require("./package.json").scripts?.test)')" = "true" ] && npm run test || echo "No test script"
    [ "$(node -e 'console.log(!!require("./package.json").scripts?.build)')" = "true" ] && npm run build || echo "No build script"
elif [ -f "requirements.txt" ] || [ -f "pyproject.toml" ]; then
    echo "--- Python project detected ---"
    command -v ruff &>/dev/null && ruff check . || echo "No ruff"
    command -v mypy &>/dev/null && mypy . || echo "No mypy"
    command -v pytest &>/dev/null && pytest || echo "No pytest"
else
    echo "Unknown project type. Add custom checks to this script."
fi

echo "=== Verification complete ==="