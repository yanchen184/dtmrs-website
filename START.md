# DTMRS 公司形象網站

> 版本：v1.0.0

DTMRS (DTM Racing Sport) 專業賽車改裝公司的官方形象網站。

## 🎨 設計特色

- ✅ 紅色梯形 Sidebar 設計（參考 SIRUDA 官網風格）
- ✅ 右側圓形聯繫按鈕（Email、電話）
- ✅ 首頁淡入淡出效果與影片背景
- ✅ 響應式設計，支援各種螢幕尺寸
- ✅ 流暢的頁面切換動畫
- ✅ 專業的賽車改裝風格設計

## 🛠️ 技術棧

- **前端框架**: React 18+ with TypeScript
- **建置工具**: Vite
- **樣式**: Tailwind CSS
- **路由**: React Router v6
- **動畫**: Framer Motion
- **圖標**: React Icons

## 📂 專案結構

```
dtmrs-website/
├── public/
│   └── assets/
│       ├── logo/          # DTMRS Logo
│       ├── images/        # 活動照片
│       └── videos/        # 活動影片
├── src/
│   ├── components/
│   │   ├── Sidebar.tsx        # 左側梯形選單
│   │   ├── ContactButtons.tsx # 右側聯繫按鈕
│   │   └── Layout.tsx         # 頁面佈局
│   ├── pages/
│   │   ├── Home.tsx           # 首頁（影片背景）
│   │   ├── About.tsx          # 關於我們
│   │   ├── Products.tsx       # 販售商品
│   │   ├── Events.tsx         # 參與過的活動
│   │   ├── Gallery.tsx        # 活動剪影
│   │   └── Catalog.tsx        # 電子型錄
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
└── package.json
```

## 🚀 如何啟動專案

### 1. 安裝依賴

```bash
cd dtmrs-website
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

專案會在 `http://localhost:5173` 啟動

### 3. 建置正式版本

```bash
npm run build
```

建置檔案會產生在 `dist/` 資料夾

### 4. 預覽正式版本

```bash
npm run preview
```

## 📄 頁面說明

### 🏠 首頁 (/)
- 進入時顯示 DTMRS Logo 淡入動畫（2 秒）
- Logo 淡出後播放賽車影片背景
- 顯示公司標語和介紹
- 影片播放後才顯示 Sidebar 和 ContactButtons

### 👥 關於我們 (/about)
- 公司簡介
- 團隊經驗展示
- 專業數據統計

### 🛒 販售商品 (/products)
- 引擎改裝套件
- 空力套件
- 懸吊系統
- 煞車系統

### 🏁 參與過的活動 (/events)
- 2024 東京車展
- 2025 Auto Salon
- Super GT Round 6

### 📸 活動剪影 (/gallery)
- 完整的活動照片展示
- 支援 Lightbox 放大檢視
- 瀑布流式佈局

### 📚 電子型錄 (/catalog)
- 產品型錄下載
- 詳細規格說明
- 聯繫資訊

## 🎨 配色方案

```css
主色（紅色）: #CC0000
輔色（藍色）: #0066CC
深色背景: #1a1a1a
文字顏色: #1a1a1a
白色文字: #FFFFFF
```

## 📱 響應式設計

- **桌面版**: 1920px 以上
- **平板版**: 768px - 1919px
- **手機版**: 320px - 767px

## ✨ 特色功能

1. **梯形 Sidebar**
   - 紅色梯形設計
   - 平滑的進入動畫
   - 選單項目 hover 效果
   - 支援多語言切換（TW, JP, EN, Q微博）

2. **右側聯繫按鈕**
   - 固定在畫面右側
   - Email 和電話快速連結
   - Hover 顯示詳細資訊
   - 圓形按鈕設計

3. **首頁影片效果**
   - Logo 淡入淡出動畫
   - 自動播放背景影片
   - 漸層遮罩效果
   - 文字動畫進場

4. **圖片畫廊**
   - 網格式佈局
   - Lightbox 放大功能
   - Hover 顯示標題
   - 縮放動畫效果

## 🔧 開發說明

### 版本號顯示
專案已在 Console 輸出版本號：
```javascript
console.log('DTMRS Website v1.0.0');
```

### 新增頁面
1. 在 `src/pages/` 建立新的 .tsx 檔案
2. 在 `src/App.tsx` 中新增路由
3. 在 `src/components/Sidebar.tsx` 更新選單項目

### 自訂樣式
- 主要樣式定義在 `tailwind.config.js`
- 全域樣式在 `src/index.css`
- 組件樣式使用 Tailwind CSS utility classes

## 📞 聯繫資訊

- **Email**: bobchen184@gmail.com
- **網站**: [https://yanchen184.github.io/game-portal](https://yanchen184.github.io/game-portal)

## 📝 更新日誌

### v1.0.0 (2025-11-18)
- ✅ 初始版本發布
- ✅ 完成所有主要頁面
- ✅ 實現梯形 Sidebar 設計
- ✅ 實現右側聯繫按鈕
- ✅ 實現首頁影片淡入淡出效果
- ✅ 完成響應式設計
- ✅ 整合所有圖片和影片資源

## 🚀 部署

### GitHub Pages 部署

1. 在 `vite.config.ts` 設定 base URL
2. 執行建置指令
3. 部署到 GitHub Pages

### Vercel 部署

```bash
# 安裝 Vercel CLI
npm install -g vercel

# 部署
vercel
```

---

**Made with ❤️ by DTM Racing Sport Team**
