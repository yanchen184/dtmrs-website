# 🚀 部署到 cPanel 指引

## 📋 部署資訊
- **域名**: dtmracingsport.com
- **cPanel 登入**: https://bear.potia.net:2083
- **用戶名**: dtmracingsport
- **密碼**: d86BmhWIev
- **專案版本**: v2.9.8

---

## ✅ 已完成的準備工作
- ✅ 修改 `vite.config.ts` 的 `base` 為 `'/'`（自定義域名）
- ✅ 建置生產版本（`npm run build`）
- ✅ 產生 `dist/` 資料夾

---

## 📦 部署方式

### 方式一：使用 cPanel 檔案管理器（推薦，最簡單）

#### 步驟 1: 登入 cPanel
1. 開啟瀏覽器，前往：https://bear.potia.net:2083
2. 輸入帳號密碼：
   - **用戶名**: `dtmracingsport`
   - **密碼**: `d86BmhWIev`
3. 登入成功

#### 步驟 2: 進入檔案管理器
1. 在 cPanel 首頁，找到並點擊「**檔案管理器**」（File Manager）
2. 導航到網站根目錄，通常是 `public_html/`
   - 如果 `dtmracingsport.com` 是主域名，路徑為：`/home/dtmracingsport/public_html/`
   - 如果是附加域名（Addon Domain），路徑可能為：`/home/dtmracingsport/public_html/dtmracingsport.com/`

#### 步驟 3: 清空舊檔案（如果有）
⚠️ **重要：先備份舊檔案！**
1. 選取 `public_html/` 目錄下的所有檔案和資料夾
2. 點擊「壓縮」（Compress）將它們打包為 `backup-YYYYMMDD.zip`
3. 然後刪除所有舊檔案（保留 `.htaccess` 如果已存在且有特殊配置）

#### 步驟 4: 上傳新檔案
1. 點擊「上傳」（Upload）按鈕
2. 選擇本地的 `D:\frontend\dtmrs-website\dist\` 資料夾內的**所有檔案和資料夾**：
   - `index.html`
   - `vite.svg`
   - `assets/` 資料夾（包含所有 CSS 和 JS）
3. 等待上傳完成（通常幾秒鐘）

#### 步驟 5: 建立 .htaccess（可選，但推薦）
在 `public_html/` 目錄下建立或編輯 `.htaccess` 檔案，加入以下內容：

```apache
# 啟用 GZIP 壓縮
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# 瀏覽器快取
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>

# 禁止目錄瀏覽
Options -Indexes

# 強制 HTTPS（如果有 SSL 憑證）
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# 安全性標頭
<IfModule mod_headers.c>
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

#### 步驟 6: 驗證部署
1. 開啟瀏覽器，前往 https://dtmracingsport.com
2. 按 F12 打開開發者工具，查看 Console：
   - 應該看到：`🚀 DTMRS Website v2.9.8`
   - 應該看到：`DTMRS Website v2.9.8`（紅色粗體）
3. 檢查網站功能是否正常
4. 測試響應式設計（手機、平板、桌面）

---

### 方式二：使用 FTP/SFTP（適合大量檔案）

#### 推薦工具
- **FileZilla**（免費）：https://filezilla-project.org/
- **WinSCP**（免費，Windows）：https://winscp.net/

#### FTP 連線資訊
```
主機: bear.potia.net 或 dtmracingsport.com
協定: FTP 或 SFTP
埠號: 21 (FTP) 或 22 (SFTP)
用戶名: dtmracingsport
密碼: d86BmhWIev
```

#### FileZilla 上傳步驟
1. 開啟 FileZilla，點擊「站台管理員」
2. 建立新站台：
   - **主機**: `bear.potia.net`
   - **協定**: `FTP - 檔案傳輸協定`
   - **加密**: `使用明確的 FTP over TLS（如可用）`
   - **登入型式**: `正常`
   - **使用者**: `dtmracingsport`
   - **密碼**: `d86BmhWIev`
3. 點擊「連線」
4. 連線成功後，導航到 `public_html/`
5. 將本地的 `D:\frontend\dtmrs-website\dist\` 內的**所有檔案**拖曳上傳
6. 等待上傳完成

---

### 方式三：使用 PowerShell 自動化部署（進階）

#### 建立自動部署腳本
建立檔案 `deploy-to-cpanel.ps1`：

```powershell
# DTMRS Website - cPanel 自動部署腳本

param(
    [switch]$WhatIf
)

# 設定
$FTP_HOST = "ftp://bear.potia.net"
$FTP_USER = "dtmracingsport"
$FTP_PASS = "d86BmhWIev"
$REMOTE_PATH = "/public_html/"
$LOCAL_DIST = "D:\frontend\dtmrs-website\dist"

Write-Host "🚀 開始部署 DTMRS Website 到 cPanel..." -ForegroundColor Green

# 1. 檢查 dist 資料夾
if (-not (Test-Path $LOCAL_DIST)) {
    Write-Host "❌ 找不到 dist/ 資料夾，請先執行 npm run build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ 找到建置檔案" -ForegroundColor Green

# 2. 使用 WinSCP 或其他 FTP 工具上傳
# 注意：需要安裝 WinSCP 或使用 .NET FTP 類別

# 使用 .NET WebClient 上傳（簡單方式）
try {
    $webClient = New-Object System.Net.WebClient
    $webClient.Credentials = New-Object System.Net.NetworkCredential($FTP_USER, $FTP_PASS)

    # 上傳 index.html
    $localFile = Join-Path $LOCAL_DIST "index.html"
    $remoteFile = $FTP_HOST + $REMOTE_PATH + "index.html"

    if (-not $WhatIf) {
        Write-Host "📤 上傳 index.html..." -ForegroundColor Yellow
        $webClient.UploadFile($remoteFile, $localFile)
        Write-Host "✅ index.html 上傳完成" -ForegroundColor Green
    } else {
        Write-Host "📋 [模擬] 上傳 index.html" -ForegroundColor Cyan
    }

    # 上傳 assets 資料夾（需要遞迴處理）
    # TODO: 實作完整的資料夾上傳邏輯

} catch {
    Write-Host "❌ 上傳失敗: $_" -ForegroundColor Red
    exit 1
}

Write-Host "🎉 部署完成！" -ForegroundColor Green
Write-Host "🌐 請訪問: https://dtmracingsport.com" -ForegroundColor Cyan
```

**執行：**
```powershell
# 測試模式（不實際上傳）
.\deploy-to-cpanel.ps1 -WhatIf

# 實際部署
.\deploy-to-cpanel.ps1
```

⚠️ **注意：此腳本需要進一步完善，建議使用方式一（cPanel 檔案管理器）或方式二（FileZilla）。**

---

## 🔍 部署後檢查清單

完成部署後，請逐項檢查：

- [ ] **網站可訪問**: https://dtmracingsport.com 正常載入
- [ ] **Console 版本號正確**: 按 F12，查看 Console 顯示 `v2.9.8`
- [ ] **無 Console 錯誤**: 沒有紅色錯誤訊息
- [ ] **樣式正常**: CSS 正確載入，沒有樣式缺失
- [ ] **圖片正常**: 所有圖片和 logo 正確顯示
- [ ] **影片正常**: 背景影片可以播放
- [ ] **響應式正常**: 測試手機版（375px）、平板版（768px）、桌面版（1920px）
- [ ] **互動功能正常**: Sidebar、按鈕、聯絡表單等
- [ ] **效能良好**: 使用 Lighthouse 測試，分數 > 90
- [ ] **HTTPS 正常**: 如果有 SSL 憑證，確保強制 HTTPS 生效

---

## 🔧 SSL 憑證設定（重要！）

### 免費 SSL 憑證（Let's Encrypt）

#### 步驟 1: 登入 cPanel
前往 https://bear.potia.net:2083，登入後台

#### 步驟 2: 安裝 SSL 憑證
1. 在 cPanel 中找到「**SSL/TLS Status**」或「**Let's Encrypt SSL**」
2. 點擊「安裝免費 SSL」
3. 勾選域名：`dtmracingsport.com` 和 `www.dtmracingsport.com`
4. 點擊「安裝」
5. 等待 1-2 分鐘，憑證自動生成並安裝

#### 步驟 3: 強制 HTTPS
確保 `.htaccess` 包含 HTTPS 重定向規則（見上方）

---

## 🛠️ 常見問題排除

### 問題 1: 網站顯示 404 Not Found
**原因**: 檔案上傳路徑錯誤
**解決**: 確認檔案上傳到 `public_html/`，不是子目錄

### 問題 2: 網站是空白頁
**原因**: JS/CSS 路徑錯誤
**解決**:
1. 按 F12 查看 Console 錯誤
2. 確認 `vite.config.ts` 的 `base` 是 `'/'`
3. 重新建置：`npm run build`
4. 重新上傳

### 問題 3: 樣式缺失
**原因**: CSS 檔案未上傳或路徑錯誤
**解決**: 確保 `assets/` 資料夾完整上傳

### 問題 4: 圖片無法顯示
**原因**: 圖片路徑錯誤或未上傳
**解決**:
1. 確認 `public/` 資料夾的內容已打包到 `dist/`
2. 檢查圖片引用路徑是否正確

### 問題 5: FTP 連線失敗
**原因**: 防火牆或 FTP 設定問題
**解決**:
1. 嘗試使用 SFTP（埠號 22）
2. 檢查防火牆設定
3. 聯絡主機商確認 FTP 是否啟用

---

## 📊 效能優化建議

### 1. 啟用 GZIP 壓縮
已包含在 `.htaccess` 中

### 2. 瀏覽器快取
已包含在 `.htaccess` 中

### 3. 圖片優化
- 使用 WebP 格式
- 壓縮大型圖片
- 使用 lazy loading

### 4. 壓縮影片
- 使用 H.264 或 H.265 編碼
- 降低位元率（保持品質）
- 考慮使用 CDN

---

## 🔄 未來更新流程

當需要更新網站時：

```bash
# 1. 修改程式碼
# ... 開發 ...

# 2. 更新版本號（在 package.json 和 App.tsx）
npm version patch  # 或 minor / major

# 3. 建置
npm run build

# 4. 上傳到 cPanel
# 使用 cPanel 檔案管理器或 FTP 上傳 dist/ 內容

# 5. 驗證部署
# 訪問 https://dtmracingsport.com
# 檢查 Console 版本號
```

---

## 📞 支援資訊

如有問題，請聯絡：
- **開發者**: bobchen184@gmail.com
- **主機商**: 查看 cPanel 的支援頁面
- **域名註冊商**: 如需修改 DNS 設定

---

## 🎉 部署完成！

祝您的網站運行順利！ 🚀

**DTMRS Website v2.9.8**
Powered by React + Vite + Tailwind CSS
