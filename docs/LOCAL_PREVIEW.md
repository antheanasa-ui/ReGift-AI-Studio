# macOS 本機預覽

不要直接雙擊 `06_App/index.html` 作為正式測試，因為 Service Worker 與部分瀏覽器功能需要 HTTP 環境。

## 建議方式

雙擊：

```text
scripts/preview.command
```

它會使用 macOS 內建的 Python 在 `http://127.0.0.1:8000` 啟動本機網站，並自動開啟預設瀏覽器。

停止預覽時，回到 Terminal 按 `Control + C`。

## VS Code 方式

也可以用 VS Code 開啟 `06_App`，再透過 Live Server 開啟 `index.html`。

若 Safari 顯示舊快取，按一次 `Command + Shift + R`。
