# DTMRS Website - 專業賽車改裝形象網站

## 🚀 快速啟動

### 1. 安裝依賴
```bash
npm install
```

### 2. 啟動開發伺服器
```bash
npm run dev
```

開啟瀏覽器訪問： `http://localhost:5173/dtmrs-website/`

### 3. 建置專案
```bash
npm run build
```

### 4. 部署到 GitHub Pages

#### 🤖 自動部署（推薦）
專案已配置 GitHub Actions，推送到 main 分支時會自動部署：

```bash
git add .
git commit -m "your commit message"
git push origin main
```

**首次使用需要在 GitHub 設定：**
1. 前往 `https://github.com/yanchen184/dtmrs-website/settings/pages`
2. 在 "Build and deployment" 下的 "Source" 選擇 **GitHub Actions**
3. 推送程式碼後，前往 Actions 頁面查看部署狀態
4. 部署完成後訪問：https://yanchen184.github.io/dtmrs-website/

#### 📦 手動部署（備用方案）
```bash
npm run deploy
```

線上網站： https://yanchen184.github.io/dtmrs-website/

---

## 🧪 執行測試

### E2E 自動化測試（使用 Playwright）

**完整測試套件：**
```bash
npm run test
```

**UI 模式（推薦 - 可視覺化看到測試過程）：**
```bash
npm run test:ui
```

**有頭模式（看到真實瀏覽器操作）：**
```bash
npm run test:headed
```

**除錯模式：**
```bash
npm run test:debug
```

**查看測試報告：**
```bash
npx playwright show-report
```

### 🎯 測試覆蓋項目

✅ **影片播放測試（重點）** - 確保所有影片正常播放
✅ **圖片顯示測試** - 驗證所有 15 張圖片載入
✅ **響應式測試** - 桌面/平板/手機版
✅ **互動測試** - 導航、滾動、聯繫功能
✅ **視覺測試** - 質感檢查（漸層、陰影）

---

## 📝 版本資訊

**當前版本：v2.9.3**

### v2.9.3 更新內容（2024.11.19）
- ✅ Logo 跟梯形同步飛行（從右到左）
- ✅ 梯形飛行時間：1.5秒 → 3.0秒（更慢更流暢）
- ✅ 飛完後立即淡出，無等待時間
- ✅ 總動畫時間：4.5秒（飛行 3秒 + 淡出 1.5秒）
- 🎯 **流暢的進場動畫體驗**

### v2.9.2 更新內容（2024.11.19）
- ✅ 添加 Logo 閃爍動畫填補梯形與淡出間隔
- ✅ 優化動畫流程：梯形飛行(1.5秒) → Logo閃爍(1.5秒) → 淡出(1秒)
- ✅ Logo 閃爍 3 次營造專業感
- ✅ 總動畫時間：4.0秒（給影片充足載入時間）
- 🎯 **解決梯形飛完後的空白感，提升 UX 體驗**

### v2.9.1 更新內容（2024.11.19）
- ✅ 延長入場動畫時間，爭取影片載入時間
- ✅ 梯形飛行時間：0.9秒 → 1.8秒（慢 2倍）
- ✅ 淡出動畫時間：0.3秒 → 1.0秒（更柔和）
- ✅ 總動畫時間：1.2秒 → 3.5秒（多 2.3秒載入時間）
- ✅ Logo 動畫更柔和（0.4秒 → 0.8秒）
- 🎯 **給影片額外 2-3 秒背景載入時間**

### v2.9.0 更新內容（2024.11.19）
- ✅ 優化影片載入速度
- ✅ 移除影片預載入邏輯（一次載入所有影片會拖慢速度）
- ✅ 添加 `preload="metadata"` 到所有影片標籤
- ⚠️ **建議壓縮影片到 20-30MB 以進一步提升載入速度**（見 VIDEO_OPTIMIZATION.md）

### v2.8.0 更新內容（2024.11.19）
- ✅ 修復 GitHub Pages 影片路徑問題
- ✅ 統一所有影片路徑為 `/dtmrs-website/assets/videos/`
- ✅ 配置 GitHub Actions 自動部署
- ✅ 更新 Home.tsx, Events.tsx, ScrollHome.tsx 影片路徑
- ✅ Console 輸出版本號碼 v2.8.0

### v2.4.0 更新內容
- ✅ 修復所有圖片路徑（GitHub Pages 相容）
- ✅ 加大進場梯形動畫（180vw，上面更寬）
- ✅ 加快淡出速度（1.6秒完成）
- ✅ 完整 Playwright E2E 測試套件
- ✅ 影片播放狀態檢測
- ✅ 15 張圖片全部使用
- ✅ 質感優化（漸層、陰影、光澤）
