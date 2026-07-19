# 免費部署：GitHub Pages

GitHub Pages 可用公開儲存庫免費發布此靜態網站。ReGift AI Studio 不需要伺服器、資料庫或付費 API。

## 一、發布前確認

1. 雙擊 `scripts/preview.command`。
2. Safari 開啟後進入辦公室。
3. 確認人物、背景、Team Chat 與 AI Assistant Hub 正常。
4. 在 Terminal 執行：

```bash
bash scripts/verify-release.sh
```

看到 `DEPLOYMENT QA PASS` 才進行發布。

## 二、建立免費網站

1. 登入 GitHub，建立新的公開儲存庫。
2. 建議名稱使用 `regift-ai-studio`。
3. 將本 `07_Deployment` 資料夾內的全部內容放在儲存庫根目錄。
4. 確認 GitHub 上能看到：
   - `06_App`
   - `.github/workflows/deploy-pages.yml`
   - `scripts`
   - `VERSION.json`
5. 前往 `Settings → Pages`。
6. 在 `Build and deployment` 的 `Source` 選擇 `GitHub Actions`。
7. 前往 `Actions`，選擇 `Deploy ReGift AI Studio to GitHub Pages`。
8. 點擊 `Run workflow`。

完成後，部署頁面會顯示正式網址。

## 三、更新網站

1. 不要直接在線上修改 `06_App`。
2. 在本機建立新版本並完成 QA。
3. 替換儲存庫中的 `06_App`。
4. 更新 `VERSION.json` 與 `RELEASE_NOTES.md`。
5. 執行校驗腳本後再推送到 `main`。

推送完成會自動開始新的 Pages 部署。

## 四、注意事項

- 免費 GitHub Pages 建議使用公開儲存庫。
- App 資料保存在使用者自己的瀏覽器 `localStorage`，不會自動同步到 GitHub。
- 不要把私人訂單、客戶資料、API Key 或密碼放進儲存庫。
- 自訂網域是選用項目，沒有網域也能使用 GitHub 提供的網址。
- 若看見舊畫面，在 Safari 使用 `Command + Shift + R`。
