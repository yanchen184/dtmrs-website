# 影片壓縮指南

## 📋 問題說明

GitHub Pages 有單個文件 100MB 的限制。目前的影片大小：

- `20250420 SGT6 DTMRS Asurada.mp4` - **329MB** ❌
- `20250112 DTMRS Autosalon序HD .mp4` - **244MB** ❌
- `20241208 DTM東京車展60sec.mp4` - **140MB** ❌

**全部超過 100MB，需要壓縮！**

---

## 🎯 目標

將每個影片壓縮到 **80-95MB**，保持 1080p 畫質。

---

## ✅ 方案 1：使用 HandBrake（推薦，最簡單）

### 下載 HandBrake
- 官網：https://handbrake.fr/
- Windows/Mac/Linux 都支援
- **完全免費**，操作簡單

### 壓縮步驟

1. **打開 HandBrake**
2. **Open Source** → 選擇影片
3. **設定輸出**：
   - **Format**: MP4
   - **Web Optimized**: ✅ 勾選

4. **Video 設定**：
   - **Video Codec**: H.264 (x264)
   - **Quality**: **RF 24-26**
     - RF 24: 較高畫質，檔案較大（約 95MB）
     - RF 26: 平衡畫質，檔案較小（約 80MB）
   - **Framerate**: Same as source
   - **Encoder Preset**: Medium

5. **Dimensions**：
   - **Resolution**: 1920x1080（保持原始解析度）
   - **Anamorphic**: None

6. **Audio**：
   - **Codec**: AAC
   - **Bitrate**: 128 kbps（可以降低，影片通常不需要高音質）

7. **點擊 Start Encode**

8. **檢查檔案大小**：
   - 如果還是太大，增加 RF 值（例如 RF 27）
   - 如果太小，降低 RF 值（例如 RF 23）

---

## ✅ 方案 2：使用 FFmpeg（適合有技術背景的用戶）

### 安裝 FFmpeg

#### Windows
```bash
# 使用 Winget
winget install FFmpeg

# 或下載：https://www.gyan.dev/ffmpeg/builds/
```

#### Mac
```bash
brew install ffmpeg
```

### 壓縮指令

#### 壓縮到約 80-90MB (高品質)
```bash
ffmpeg -i "input.mp4" -vcodec h264 -crf 24 -preset medium -acodec aac -b:a 128k "output.mp4"
```

#### 壓縮到約 60-70MB (中等品質)
```bash
ffmpeg -i "input.mp4" -vcodec h264 -crf 26 -preset medium -acodec aac -b:a 96k "output.mp4"
```

#### 壓縮到約 40-50MB (可接受品質)
```bash
ffmpeg -i "input.mp4" -vcodec h264 -crf 28 -preset fast -acodec aac -b:a 96k "output.mp4"
```

### 批次壓縮所有影片

#### Windows (PowerShell)
```powershell
cd "D:\frontend\dtmrs-website\public\assets\videos\"

# 壓縮所有 mp4
Get-ChildItem *.mp4 | ForEach-Object {
    $output = $_.BaseName + "_compressed.mp4"
    ffmpeg -i $_.Name -vcodec h264 -crf 24 -preset medium -acodec aac -b:a 128k $output
}
```

---

## ✅ 方案 3：在線壓縮工具（無需安裝軟體）

### 推薦網站
1. **FreeConvert** - https://www.freeconvert.com/video-compressor
   - 免費
   - 最大 1GB
   - 可自訂壓縮率

2. **Clideo** - https://clideo.com/compress-video
   - 簡單易用
   - 最大 500MB

3. **VideoSmaller** - https://www.videosmaller.com/
   - 完全免費
   - 無需註冊

### 使用步驟
1. 上傳影片
2. 選擇壓縮等級（建議：Medium 或 High）
3. 下載壓縮後的影片
4. 檢查檔案大小是否 <100MB

---

## 📝 壓縮後的操作步驟

### 1. 替換影片檔案
```bash
cd D:\frontend\dtmrs-website\public\assets\videos\

# 備份原始影片
mkdir backup
move *.mp4 backup\

# 將壓縮後的影片複製到這裡
# 確保檔名相同：
# - 20250420 SGT6 DTMRS Asurada.mp4
# - 20241208 DTM東京車展60sec.mp4
# - 20250112 DTMRS Autosalon序HD .mp4
```

### 2. 從 Git LFS 移除（改用普通 Git）
```bash
cd D:\frontend\dtmrs-website

# 移除 LFS tracking
git lfs untrack "*.mp4"

# 刪除 .gitattributes 中的 LFS 設定
# 手動編輯 .gitattributes，移除 "*.mp4 filter=lfs diff=lfs merge=lfs -text"

# 重新添加影片（現在是普通 Git）
git rm --cached public/assets/videos/*.mp4
git add public/assets/videos/*.mp4
```

### 3. 提交並推送
```bash
git add public/assets/videos/*.mp4 .gitattributes
git commit -m "feat: 壓縮影片至 <100MB 以符合 GitHub 限制"
git push
```

### 4. 重新部署
```bash
npm run deploy
```

---

## 🎯 推薦設定

### 對於您的影片

| 影片 | 目前大小 | 建議 CRF | 預估結果 |
|------|---------|---------|---------|
| 20250420 SGT6 DTMRS Asurada.mp4 | 329MB | 26 | ~85MB |
| 20250112 DTMRS Autosalon序HD .mp4 | 244MB | 25 | ~80MB |
| 20241208 DTM東京車展60sec.mp4 | 140MB | 24 | ~90MB |

---

## ❓ FAQ

### Q: CRF 值是什麼？
A: Constant Rate Factor，數字越小畫質越好，檔案越大。
- **18-23**: 非常高畫質（接近無損）
- **24-26**: 高畫質（推薦）
- **27-28**: 中等畫質（可接受）
- **29+**: 低畫質（不推薦）

### Q: 壓縮會損失多少畫質？
A: 使用 CRF 24-26，肉眼幾乎看不出差異，特別是在網頁播放時。

### Q: 為什麼不用更低的解析度？
A: 降低解析度（如 720p）雖然可以減小檔案，但在高解析度螢幕上會很模糊。保持 1080p + 壓縮是最佳選擇。

### Q: 如果壓縮後還是太大怎麼辦？
A:
1. 增加 CRF 值（+1 或 +2）
2. 降低音頻位元率（96k 或 64k）
3. 縮短影片長度

---

## 🚨 重要提醒

1. **先備份原始影片**！
2. **壓縮後測試播放**，確保畫質可接受
3. **檢查檔案大小** < 100MB
4. **檔名保持不變**，否則需要修改程式碼

---

## 📞 需要幫助？

如果遇到問題：
1. 嘗試使用 HandBrake（最簡單）
2. 使用在線工具（無需安裝）
3. 提供錯誤訊息給我，我會協助解決
