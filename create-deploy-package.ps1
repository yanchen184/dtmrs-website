# DTMRS Website - 建立部署壓縮包
# 自動打包 dist/ 資料夾，準備上傳到 cPanel

$VERSION = "2.9.8"
$DIST_PATH = ".\dist"
$OUTPUT_FILE = "dtmrs-v$VERSION.zip"

Write-Host "🚀 DTMRS Website - 建立部署壓縮包" -ForegroundColor Cyan
Write-Host "版本: v$VERSION" -ForegroundColor Yellow
Write-Host ""

# 檢查 dist 資料夾是否存在
if (-not (Test-Path $DIST_PATH)) {
    Write-Host "❌ 錯誤: 找不到 dist/ 資料夾" -ForegroundColor Red
    Write-Host "請先執行: npm run build" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ 找到 dist/ 資料夾" -ForegroundColor Green

# 刪除舊的壓縮檔（如果存在）
if (Test-Path $OUTPUT_FILE) {
    Write-Host "🗑️  刪除舊的壓縮檔: $OUTPUT_FILE" -ForegroundColor Yellow
    Remove-Item $OUTPUT_FILE -Force
}

# 建立壓縮檔
Write-Host "📦 正在打包..." -ForegroundColor Yellow
try {
    Compress-Archive -Path "$DIST_PATH\*" -DestinationPath $OUTPUT_FILE -Force
    Write-Host "✅ 壓縮完成！" -ForegroundColor Green
    Write-Host ""

    # 顯示檔案資訊
    $fileInfo = Get-Item $OUTPUT_FILE
    $fileSizeMB = [math]::Round($fileInfo.Length / 1MB, 2)

    Write-Host "📊 檔案資訊:" -ForegroundColor Cyan
    Write-Host "   檔案名稱: $OUTPUT_FILE" -ForegroundColor White
    Write-Host "   檔案大小: $fileSizeMB MB" -ForegroundColor White
    Write-Host "   儲存位置: $((Get-Location).Path)\$OUTPUT_FILE" -ForegroundColor White
    Write-Host ""

    # 顯示下一步指示
    Write-Host "📤 下一步:" -ForegroundColor Cyan
    Write-Host "1. 登入 cPanel: https://bear.potia.net:2083" -ForegroundColor White
    Write-Host "2. 開啟「檔案管理器」" -ForegroundColor White
    Write-Host "3. 進入 public_html/ 資料夾" -ForegroundColor White
    Write-Host "4. 上傳 $OUTPUT_FILE" -ForegroundColor White
    Write-Host "5. 右鍵解壓縮 $OUTPUT_FILE" -ForegroundColor White
    Write-Host "6. 刪除 $OUTPUT_FILE" -ForegroundColor White
    Write-Host "7. 訪問 https://dtmracingsport.com 驗證部署" -ForegroundColor White
    Write-Host ""

    Write-Host "🎉 部署壓縮包已準備完成！" -ForegroundColor Green

} catch {
    Write-Host "❌ 壓縮失敗: $_" -ForegroundColor Red
    exit 1
}

# 詢問是否要開啟檔案所在位置
Write-Host ""
$openFolder = Read-Host "是否要開啟檔案所在位置？(Y/N)"
if ($openFolder -eq "Y" -or $openFolder -eq "y") {
    explorer.exe (Get-Location).Path
}
