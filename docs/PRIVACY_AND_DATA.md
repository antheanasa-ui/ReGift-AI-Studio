# 隱私與資料範圍

ReGift AI Studio v7.5.0 是本機優先的靜態網站。

## 資料保存位置

- 任務、聊天內容、設定與進度預設保存在使用者瀏覽器的 `localStorage`。
- `Export Data` 會由使用者主動下載 JSON 備份。
- GitHub Pages 只負責提供 HTML、CSS、JavaScript 與圖片檔案。

## 不會自動進行的行為

- 不會把 App 內容同步到 GitHub 儲存庫。
- 不會自動上傳訂單、客戶或聊天資料。
- 不會自動呼叫付費 OpenAI API。
- ChatGPT Bridge 只產生可複製的 Prompt，由使用者自行貼到 ChatGPT。

## 發布安全原則

- 不要在 `06_App` 寫入 API Key、密碼或客戶個資。
- 發布前搜尋是否誤放 `.env`、私鑰、訂單表或備份 JSON。
- 若未來加入真正的後端或 API，必須重新設計權限與隱私機制。
