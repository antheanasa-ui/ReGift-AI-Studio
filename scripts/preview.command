#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SITE_DIR="$ROOT_DIR/06_App"
PORT="${PORT:-8000}"
URL="http://127.0.0.1:$PORT/"

if ! command -v python3 >/dev/null 2>&1; then
    echo "找不到 python3。請改用 VS Code Live Server 開啟 06_App/index.html。"
    read -r -p "按 Enter 結束。"
    exit 1
fi

echo "ReGift AI Studio 本機預覽：$URL"
echo "停止預覽請按 Control + C"
python3 -m http.server "$PORT" --bind 127.0.0.1 --directory "$SITE_DIR" &
SERVER_PID=$!
trap 'kill "$SERVER_PID" 2>/dev/null || true' EXIT INT TERM
sleep 1
open "$URL"
wait "$SERVER_PID"
