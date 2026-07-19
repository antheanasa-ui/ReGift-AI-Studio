# 備份與還原

## 發布前備份

每次更新前，將目前線上的完整 `06_App` 壓縮並命名：

```text
ReGift-AI-Studio-v版本號-Stable.zip
```

同時保存：

- `VERSION.json`
- `RELEASE_NOTES.md`
- `checksums/SHA256SUMS.txt`
- GitHub 成功部署的 Commit ID

## 使用者資料備份

App 的任務與設定保存在瀏覽器本機。更新前先在 App 內按 `Export Data`，下載 JSON 備份。

網站檔案備份不包含每位使用者瀏覽器中的本機資料。

## 還原舊版本

1. 取出最後一個正常版本的 `06_App`。
2. 在本機執行預覽與驗證。
3. 用正常版本替換 GitHub 儲存庫中的 `06_App`。
4. 更新 `VERSION.json`，並在 `RELEASE_NOTES.md` 記錄還原原因。
5. 推送到 `main`，等待 GitHub Pages 重新部署。
6. Safari 使用 `Command + Shift + R` 清除舊介面快取。

不要刪除失敗版本；將它另外保存以便分析問題。
