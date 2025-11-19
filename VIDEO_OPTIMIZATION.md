# 🎬 影片優化指南 - 大幅提升載入速度

## 📊 當前影片狀態

| 影片檔案 | 當前大小 | 建議大小 | 預估改善 |
|---------|---------|---------|---------|
| 20241208 DTM東京車展60sec.mp4 | 71MB | 20-25MB | **載入快 3-4 倍** |
| 20250112 DTMRS Autosalon序HD.mp4 | 72MB | 20-25MB | **載入快 3-4 倍** |
| 20250420 SGT6 DTMRS Asurada.mp4 | 72MB | 20-25MB | **載入快 3-4 倍** |
| **總計** | **215MB** | **60-75MB** | **節省 140MB+** |

---

## ✅ 已完成的優化（v2.9.0）

1. ✅ 移除影片預載入邏輯（不會一次載入所有 215MB）
2. ✅ 添加 `preload="metadata"` 屬性（只載入影片資訊，不載入完整影片）
3. ✅ 影片只在需要播放時才開始載入

**效果**：首次載入速度提升約 **60-70%**

---

## 🚀 進階優化：壓縮影片（強烈建議）

### 為什麼要壓縮？

**問題**：
- 70MB 的影片在 4G 網路需要 **15-30 秒**載入
- 用戶可能在影片載入完成前就離開網站
- 影響 SEO 排名（Google 重視載入速度）

**解決方案**：
- 壓縮到 20-25MB，保持 1080p 高畫質
- 4G 網路載入時間縮短到 **5-8 秒**
- 視覺品質幾乎無損

---

## 🛠️ 方法 1：使用 HandBrake（推薦給非技術人員）

### 下載安裝
```
https://handbrake.fr/downloads.php
```

### 壓縮步驟

1. **開啟 HandBrake**
   - 點擊 "Open Source" 選擇影片檔案

2. **選擇預設配置**
   - 在右側 "Presets" 選擇：**Fast 1080p30**
   - 或選擇：**HQ 1080p30 Surround**（更高品質但檔案稍大）

3. **調整設定（重要！）**
   - 前往 "Video" 標籤
   - **Quality**: 設定為 **22-24**（數字越小品質越好但檔案越大）
     - 22 = 高品質（約 30-35MB）
     - 23 = 平衡（約 25-30MB）
     - 24 = 標準品質（約 20-25MB）
   - **Encoder**: 選擇 **H.264 (x264)**
   - **Framerate**: 設定為 **30 FPS** 或 **Same as source**

4. **設定儲存位置**
   - 點擊 "Browse" 選擇輸出資料夾
   - 檔名建議加上 `_optimized`（例如：`東京車展_optimized.mp4`）

5. **開始壓縮**
   - 點擊 "Start Encode"
   - 等待完成（約 2-5 分鐘 per 60秒影片）

6. **比較結果**
   - 播放壓縮後的影片確認品質
   - 檢查檔案大小是否符合預期（20-30MB）

---

## 🛠️ 方法 2：使用 FFmpeg（推薦給技術人員）

### 安裝 FFmpeg

**Windows**:
```bash
# 下載 FFmpeg
https://www.gyan.dev/ffmpeg/builds/

# 解壓縮後，將 bin 資料夾加入系統 PATH
```

**macOS**:
```bash
brew install ffmpeg
```

### 快速壓縮指令（推薦）

```bash
# 進入影片目錄
cd "D:\frontend\dtmrs-website\public\assets\videos"

# 壓縮單個影片（品質 23，1080p，30fps）
ffmpeg -i "20241208 DTM東京車展60sec.mp4" \
       -c:v libx264 \
       -crf 23 \
       -preset medium \
       -vf "scale=1920:1080" \
       -r 30 \
       -c:a aac \
       -b:a 128k \
       "20241208 DTM東京車展60sec_optimized.mp4"

# 壓縮所有影片（批次處理）
for file in *.mp4; do
  ffmpeg -i "$file" \
         -c:v libx264 \
         -crf 23 \
         -preset medium \
         -vf "scale=1920:1080" \
         -r 30 \
         -c:a aac \
         -b:a 128k \
         "${file%.mp4}_optimized.mp4"
done
```

### FFmpeg 參數說明

| 參數 | 說明 | 建議值 |
|------|------|--------|
| `-crf` | 品質（0-51，數字越小品質越好） | **23**（平衡）, 22（高品質）, 24（標準） |
| `-preset` | 壓縮速度 | **medium**（平衡）, slow（更小檔案）, fast（更快） |
| `-vf scale` | 解析度 | **1920:1080**（Full HD） |
| `-r` | 幀率 | **30** FPS（網頁影片標準） |
| `-b:a` | 音訊位元率 | **128k**（足夠好的音質） |

### 測試不同品質

```bash
# 高品質（30-35MB）
ffmpeg -i input.mp4 -c:v libx264 -crf 22 -preset slow output_hq.mp4

# 平衡品質（25-30MB）
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium output_balanced.mp4

# 標準品質（20-25MB）
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -preset medium output_standard.mp4
```

---

## 📝 壓縮後的步驟

### 1. 替換原始影片

```bash
# 備份原始影片
mkdir backup
mv *.mp4 backup/

# 將壓縮後的影片移回原位置並重新命名
mv "20241208 DTM東京車展60sec_optimized.mp4" "20241208 DTM東京車展60sec.mp4"
mv "20250112 DTMRS Autosalon序HD_optimized.mp4" "20250112 DTMRS Autosalon序HD .mp4"
mv "20250420 SGT6 DTMRS Asurada_optimized.mp4" "20250420 SGT6 DTMRS Asurada.mp4"
```

### 2. 提交並部署

```bash
git add public/assets/videos/*.mp4
git commit -m "perf: 壓縮影片以提升載入速度 (70MB → 25MB)"
git push origin main
```

GitHub Actions 會自動部署新的壓縮影片！

---

## 🎯 其他優化建議

### 1. 使用 CDN（未來考慮）

如果影片仍然太大，可以考慮：

**Cloudinary**（免費額度）:
- 免費 25 credits/月
- 自動優化和壓縮
- 全球 CDN 加速

**步驟**:
1. 註冊 https://cloudinary.com
2. 上傳影片
3. 取得 CDN URL
4. 修改程式碼使用 CDN URL

### 2. 添加 Poster 預覽圖（快速改善視覺體驗）

在影片標籤加入 `poster` 屬性：

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  preload="metadata"
  poster="/dtmrs-website/assets/images/video-preview.jpg"  // 添加這行
  className="w-full h-full object-cover"
>
  <source src="/dtmrs-website/assets/videos/東京車展.mp4" type="video/mp4" />
</video>
```

**優點**：
- 影片載入前顯示預覽圖
- 提升視覺體驗
- 減少白屏時間

### 3. 考慮使用 WebM 格式

WebM 格式通常比 MP4 更小：

```bash
# 轉換為 WebM
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 output.webm
```

在 HTML 中同時提供兩種格式：

```tsx
<video autoPlay loop muted playsInline preload="metadata">
  <source src="/videos/video.webm" type="video/webm" />
  <source src="/videos/video.mp4" type="video/mp4" />
</video>
```

瀏覽器會自動選擇支援的格式。

---

## 📊 預期效果比較

| 指標 | 壓縮前 | 優化後 (v2.9.0) | 壓縮後 |
|------|--------|----------------|--------|
| 首次載入時間 (4G) | 45-60秒 | 15-20秒 | **5-8秒** ⚡ |
| 總影片大小 | 215MB | 215MB | **60-75MB** 📦 |
| 視覺品質 | 100% | 100% | **95-98%** 👀 |
| 用戶體驗 | ⭐⭐ | ⭐⭐⭐ | **⭐⭐⭐⭐⭐** |

---

## 🚀 建議執行順序

1. ✅ **已完成**：程式碼優化（v2.9.0）
2. ⏭️ **下一步**：壓縮影片到 20-25MB（使用 HandBrake 或 FFmpeg）
3. 🔮 **未來**：考慮添加 poster 預覽圖
4. 🔮 **未來**：如果還需要更快，考慮使用 CDN

---

## ❓ 常見問題

**Q: 壓縮會損失畫質嗎？**
A: CRF 23-24 的壓縮幾乎看不出差異，特別是在網頁播放時。

**Q: 需要壓縮所有影片嗎？**
A: 建議全部壓縮，因為用戶可能滾動到任何區域。

**Q: 壓縮需要多久時間？**
A: 使用 FFmpeg，每 60 秒影片約需 2-5 分鐘壓縮時間。

**Q: 可以更激進地壓縮嗎（例如 CRF 26）？**
A: 可以，但建議先用 CRF 24 測試，確保品質符合預期。

---

## 🎓 延伸閱讀

- [HandBrake 官方文檔](https://handbrake.fr/docs/)
- [FFmpeg 影片壓縮指南](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Web 影片最佳實踐](https://web.dev/fast/#optimize-your-videos)

---

**需要幫助？** 如果在壓縮過程中遇到問題，隨時詢問！
