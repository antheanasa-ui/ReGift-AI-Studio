#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SITE_DIR="$ROOT_DIR/06_App"
CHECKSUM_FILE="$ROOT_DIR/checksums/SHA256SUMS.txt"

required_files=(
    "index.html"
    "css/main.css"
    "css/tooltip.css"
    "css/office-v2.css"
    "js/main.js"
    "js/tooltip.js"
    "js/office-v2.js"
    "config/app-config.json"
    "data/office.json"
    "service-worker.js"
    "manifest.webmanifest"
    "assets/office-isometric-v3.png"
)

for relative_path in "${required_files[@]}"; do
    if [[ ! -f "$SITE_DIR/$relative_path" ]]; then
        echo "MISSING: 06_App/$relative_path"
        exit 1
    fi
done

if command -v node >/dev/null 2>&1; then
    node --check "$SITE_DIR/js/main.js"
    node --check "$SITE_DIR/js/tooltip.js"
    node --check "$SITE_DIR/js/office-v2.js"
    node -e 'const fs=require("fs"); for (const f of process.argv.slice(1)) JSON.parse(fs.readFileSync(f,"utf8"));' \
        "$SITE_DIR/config/app-config.json" \
        "$SITE_DIR/data/office.json" \
        "$SITE_DIR/assets/agents/sprite-atlas.json" \
        "$SITE_DIR/manifest.webmanifest"
fi

if [[ -f "$CHECKSUM_FILE" ]]; then
    if command -v sha256sum >/dev/null 2>&1; then
        (cd "$ROOT_DIR" && sha256sum -c "checksums/SHA256SUMS.txt")
    elif command -v shasum >/dev/null 2>&1; then
        (cd "$ROOT_DIR" && shasum -a 256 -c "checksums/SHA256SUMS.txt")
    else
        echo "WARNING: 找不到 SHA-256 校驗工具，略過 checksum。"
    fi
fi

if find "$SITE_DIR" -type f \( -name '.DS_Store' -o -name 'Thumbs.db' -o -name '*.zip' \) | grep -q .; then
    echo "ERROR: 06_App 內含不應發布的隱藏檔或壓縮檔。"
    exit 1
fi

echo "DEPLOYMENT QA PASS — ReGift AI Studio v7.5.0"
