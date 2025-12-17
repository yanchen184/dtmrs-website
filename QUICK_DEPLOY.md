# 🚀 快速部署到 cPanel

## 📦 準備工作（已完成）
- ✅ 建置檔案已準備好在 `dist/` 資料夾
- ✅ 版本號已更新為 v2.9.8
- ✅ `.htaccess` 已包含在 `dist/` 中

## 🎯 最快速部署方式（推薦）

### 步驟 1: 登入 cPanel
```
網址: https://bear.potia.net:2083
用戶名: dtmracingsport
密碼: d86BmhWIev
```

### 步驟 2: 開啟檔案管理器
1. 在 cPanel 首頁，點擊「**檔案管理器**」（File Manager）
2. 進入 `public_html/` 資料夾

### 步驟 3: 上傳檔案（三種方式任選一種）

#### 方式 A: 壓縮上傳（最快！推薦）
```powershell
# 在本地執行（Windows PowerShell）
cd D:\frontend\dtmrs-website
Compress-Archive -Path dist\* -DestinationPath dist.zip -Force
```

然後：
1. 在 cPanel 檔案管理器中，點擊「上傳」
2. 上傳 `dist.zip`
3. 右鍵點擊 `dist.zip` → 選擇「解壓縮」（Extract）
4. 刪除 `dist.zip`

#### 方式 B: 直接上傳（簡單）
1. 在 cPanel 檔案管理器中，點擊「上傳」
2. 選擇 `D:\frontend\dtmrs-website\dist\` 資料夾內的**所有檔案**：
   - `index.html`
   - `vite.svg`
   - `.htaccess`
   - `assets/` 資料夾（包含所有 CSS 和 JS）
3. 等待上傳完成

#### 方式 C: 使用 FileZilla（適合大型專案）
1. 開啟 FileZilla
2. 連線資訊：
   - **主機**: `bear.potia.net`
   - **用戶名**: `dtmracingsport`
   - **密碼**: `d86BmhWIev`
   - **埠號**: `21`
3. 連線後，導航到 `public_html/`
4. 將 `D:\frontend\dtmrs-website\dist\` 內的所有檔案拖曳上傳

### 步驟 4: 驗證部署
1. 開啟瀏覽器，前往 https://dtmracingsport.com 或 http://dtmracingsport.com
2. 按 F12 打開 Console，確認：
   - ✅ 顯示：`🚀 DTMRS Website v2.9.8`
   - ✅ 顯示：`DTMRS Website v2.9.8`（紅色粗體）
   - ✅ 沒有錯誤訊息
3. 測試所有功能正常運作

---

## ⚡ 超快速上傳命令（PowerShell）

**一鍵打包 dist 資料夾：**
```powershell
cd D:\frontend\dtmrs-website
Compress-Archive -Path dist\* -DestinationPath dtmrs-v2.9.8.zip -Force
Write-Host "✅ 已打包為 dtmrs-v2.9.8.zip，請上傳到 cPanel" -ForegroundColor Green
```

執行後，上傳 `dtmrs-v2.9.8.zip` 到 cPanel，解壓縮即可。

---

## 📋 部署檢查清單

- [ ] **已建置最新版本** (`npm run build`)
- [ ] **版本號正確** (v2.9.8)
- [ ] **已上傳所有檔案** (index.html, assets/, .htaccess)
- [ ] **網站可訪問** (https://dtmracingsport.com)
- [ ] **Console 無錯誤**
- [ ] **版本號顯示正確** (按 F12 查看)
- [ ] **所有功能正常** (Sidebar, 影片, 按鈕等)
- [ ] **響應式正常** (手機、平板、桌面)

---

## 🔄 未來更新流程（簡化版）

```bash
# 1. 修改程式碼
# ... 開發 ...

# 2. 建置
npm run build

# 3. 打包
cd D:\frontend\dtmrs-website
Compress-Archive -Path dist\* -DestinationPath dist.zip -Force

# 4. 上傳到 cPanel（使用檔案管理器）
# 5. 解壓縮 dist.zip
# 6. 刪除 dist.zip
# 7. 驗證：https://dtmracingsport.com
```

---

## ❓ 遇到問題？

查看完整部署指引：`DEPLOY_CPANEL.md`

---

**祝部署順利！🎉**
