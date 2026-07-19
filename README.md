# ReGift AI Studio — 07_Deployment

狀態：**部署資料夾已完成，可進行免費發布**

這是 `06_App v7.5.0` 的正式部署資料夾。`06_App` 已凍結，不再加入新功能；此階段只處理驗證、備份、發布與還原。

## 資料夾內容

- `06_App/`：可直接發布的完整正式站點
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自動部署流程
- `scripts/verify-release.sh`：發布前完整性檢查
- `scripts/preview.command`：macOS 本機預覽
- `checksums/SHA256SUMS.txt`：正式站點檔案校驗碼
- `docs/`：免費部署、備份、還原與 QA 說明
- `VERSION.json`：App 與部署包版本資料

## 最快開始方式

1. 在 Mac 解壓縮本資料夾。
2. 雙擊 `scripts/preview.command`，先確認本機畫面正常。
3. 建立一個 GitHub 公開儲存庫。
4. 將 `07_Deployment` 內的全部內容上傳到該儲存庫根目錄。
5. 在 GitHub 的 `Settings → Pages → Source` 選擇 `GitHub Actions`。
6. 開啟 `Actions`，執行 `Deploy ReGift AI Studio to GitHub Pages`。

詳細步驟請閱讀 `docs/FREE_DEPLOYMENT.md`。

## 發布原則

- 不直接修改線上版本。
- 所有新版本先在新的工作副本完成並通過 QA。
- 發布前執行 `bash scripts/verify-release.sh`。
- 發布失敗時，保留目前線上版本並依照還原文件處理。
- ChatGPT Bridge 維持免費手動方式，不需要 API Key。
