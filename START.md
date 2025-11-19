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

**當前版本：v2.4.0**

### v2.4.0 更新內容
- ✅ 修復所有圖片路徑（GitHub Pages 相容）
- ✅ 加大進場梯形動畫（180vw，上面更寬）
- ✅ 加快淡出速度（1.6秒完成）
- ✅ 完整 Playwright E2E 測試套件
- ✅ 影片播放狀態檢測
- ✅ 15 張圖片全部使用
- ✅ 質感優化（漸層、陰影、光澤）
