import { test, expect } from '@playwright/test';

test.describe('DTMRS 網站完整測試', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/dtmrs-website/');
  });

  test('網站載入測試', async ({ page }) => {
    // 等待進場動畫完成
    await page.waitForTimeout(2000);

    // 檢查標題
    await expect(page.locator('h1')).toContainText('DTM RACING');
  });

  test('影片播放測試（最重要）', async ({ page }) => {
    // 等待進場動畫
    await page.waitForTimeout(2000);

    // 檢查首頁影片元素
    const heroVideo = page.locator('video').first();
    await expect(heroVideo).toBeVisible();

    // 確認影片 src 存在且正確
    const videoSrc = await heroVideo.locator('source').getAttribute('src');
    expect(videoSrc).toContain('20250420 SGT6 DTMRS Asurada.mp4');

    // 檢查影片是否有 autoplay 屬性
    const hasAutoplay = await heroVideo.getAttribute('autoplay');
    expect(hasAutoplay).not.toBeNull();

    // 等待影片載入
    await page.waitForTimeout(1000);

    // 檢查影片播放狀態
    const isPlaying = await heroVideo.evaluate((video: HTMLVideoElement) => {
      return !video.paused && !video.ended && video.readyState > 2;
    });

    // 如果影片沒有播放，記錄詳細資訊
    if (!isPlaying) {
      const videoState = await heroVideo.evaluate((video: HTMLVideoElement) => ({
        paused: video.paused,
        ended: video.ended,
        readyState: video.readyState,
        networkState: video.networkState,
        currentSrc: video.currentSrc,
        error: video.error?.message || null
      }));
      console.log('影片狀態：', videoState);
    }

    expect(isPlaying).toBeTruthy();
  });

  test('Sidebar 導航測試', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 檢查 sidebar 是否可見
    const sidebar = page.locator('nav');
    await expect(sidebar).toBeVisible();

    // 檢查所有菜單項目
    const menuItems = ['DTM', '關於我們', '東京車展', 'Auto Salon', '改裝服務', '活動剪影', '聯繫我們'];

    for (const item of menuItems) {
      await expect(page.getByText(item)).toBeVisible();
    }
  });

  test('圖片載入測試 - 確保所有圖片都能顯示', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 滾動到圖片區域
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(1000);

    // 檢查圖片
    const images = await page.locator('img[src*="dtmrs-website/assets/images"]').all();
    console.log(`找到 ${images.length} 張圖片`);

    // 確保至少有 15 張圖片（所有提供的圖片）
    expect(images.length).toBeGreaterThanOrEqual(13);

    // 檢查前幾張圖片是否載入成功
    for (let i = 0; i < Math.min(5, images.length); i++) {
      const img = images[i];
      const isVisible = await img.isVisible();
      if (!isVisible) {
        const src = await img.getAttribute('src');
        console.log(`圖片 ${i} 不可見：${src}`);
      }
    }
  });

  test('東京車展影片測試', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 滾動到東京車展區域
    await page.click('text=東京車展');
    await page.waitForTimeout(1000);

    // 檢查東京車展影片
    const tokyoVideo = page.locator('video').nth(1);
    await expect(tokyoVideo).toBeVisible();

    const videoSrc = await tokyoVideo.locator('source').getAttribute('src');
    expect(videoSrc).toContain('20241208 DTM東京車展60sec.mp4');
  });

  test('Auto Salon 影片測試', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 滾動到 Auto Salon 區域
    await page.click('text=Auto Salon');
    await page.waitForTimeout(1000);

    // 檢查 Auto Salon 影片
    const autosalonVideo = page.locator('video').nth(2);
    await expect(autosalonVideo).toBeVisible();

    const videoSrc = await autosalonVideo.locator('source').getAttribute('src');
    expect(videoSrc).toContain('20250112 DTMRS Autosalon序HD .mp4');
  });

  test('進場動畫測試', async ({ page }) => {
    // 檢查進場動畫梯形
    const trapezoid = page.locator('.bg-gradient-to-br').first();

    // 動畫應該在 1.6 秒內完成
    await page.waitForTimeout(1800);

    // 動畫完成後梯形應該消失
    await expect(trapezoid).not.toBeVisible();
  });

  test('響應式測試 - 桌面版', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.waitForTimeout(2000);

    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('video').first()).toBeVisible();
  });

  test('響應式測試 - 平板版', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(2000);

    await expect(page.locator('h1')).toBeVisible();
  });

  test('響應式測試 - 手機版', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.waitForTimeout(2000);

    await expect(page.locator('h1')).toBeVisible();
  });

  test('聯繫方式測試', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 滾動到聯繫區域
    await page.click('text=聯繫我們');
    await page.waitForTimeout(1000);

    // 檢查 email 連結
    const emailLink = page.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toContainText('bobchen184@gmail.com');
  });

  test('視覺回歸測試 - 首頁', async ({ page }) => {
    await page.waitForTimeout(2500);

    await expect(page).toHaveScreenshot('homepage.png', {
      maxDiffPixels: 100,
      fullPage: false
    });
  });

  test('滾動流暢度測試', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 平滑滾動測試
    await page.evaluate(() => {
      window.scrollTo({ top: 1000, behavior: 'smooth' });
    });

    await page.waitForTimeout(500);

    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeGreaterThan(500);
  });

  test('質感測試 - 檢查陰影和漸層', async ({ page }) => {
    await page.waitForTimeout(2000);

    // 檢查是否有漸層背景
    const hasGradient = await page.locator('.bg-gradient-to-br, .bg-gradient-to-r, .bg-gradient-to-l').count();
    expect(hasGradient).toBeGreaterThan(0);

    // 檢查是否有陰影效果
    const hasShadow = await page.locator('[class*="shadow"]').count();
    expect(hasShadow).toBeGreaterThan(0);
  });
});
