// CDN 配置
// 使用 GitHub raw URL 來減少 cPanel 頻寬消耗

const GITHUB_VIDEO_BASE = 'https://raw.githubusercontent.com/yanchen184/dtmrs-videos/master';
const GITHUB_IMAGE_BASE = 'https://raw.githubusercontent.com/yanchen184/dtmrs-images/master';

// ============ 影片 URLs ============
export const videoUrls = {
  // 首頁影片
  hero: `${GITHUB_VIDEO_BASE}/hero-video.mp4`,
  sgt6: `${GITHUB_VIDEO_BASE}/20250420%20SGT6%20DTMRS%20Asurada.mp4`,

  // Events 頁面影片
  tokyoAutoshow2024: `${GITHUB_VIDEO_BASE}/20241208-dtm-tokyo-autoshow-60sec.mp4`,
  autosalon2025: `${GITHUB_VIDEO_BASE}/20250112-dtmrs-autosalon-intro-hd.mp4`,

  // ScrollHome 活動影片
  events: {
    supra2024: `${GITHUB_VIDEO_BASE}/events/1-2024-supra-tokyo-intro.mp4`,
    tokyo2024: `${GITHUB_VIDEO_BASE}/events/2-2024-tokyo-autoshow.mp4`,
    sgt6_2025: `${GITHUB_VIDEO_BASE}/events/3-2025-sgt6.mp4`,
    tokyoIntro2025: `${GITHUB_VIDEO_BASE}/events/4-2025-tokyo-intro.mp4`,
    autoshow2025: `${GITHUB_VIDEO_BASE}/events/5-2025-tokyo-autoshow.mp4`,
  }
};

// ============ 圖片 URLs ============
export const imageUrls = {
  // Logo
  logo: {
    white: `${GITHUB_IMAGE_BASE}/logo/dtm-logo-white.png`,
    bw: `${GITHUB_IMAGE_BASE}/logo/dtm-logo-bw.jpg`,
  },

  // 主要產品/團隊圖片
  main: {
    'DIRK7360.jpg': `${GITHUB_IMAGE_BASE}/DIRK7360.jpg`,
    'DIR06525.jpg': `${GITHUB_IMAGE_BASE}/DIR06525.jpg`,
    'DIR06227.jpg': `${GITHUB_IMAGE_BASE}/DIR06227.jpg`,
    'DIR06240.jpg': `${GITHUB_IMAGE_BASE}/DIR06240.jpg`,
    'DIR06244.jpg': `${GITHUB_IMAGE_BASE}/DIR06244.jpg`,
    'DIR06406.jpg': `${GITHUB_IMAGE_BASE}/DIR06406.jpg`,
    'DIR06483.jpg': `${GITHUB_IMAGE_BASE}/DIR06483.jpg`,
    'DIR06485.jpg': `${GITHUB_IMAGE_BASE}/DIR06485.jpg`,
    'DIR06506.jpg': `${GITHUB_IMAGE_BASE}/DIR06506.jpg`,
    'DIR06516.jpg': `${GITHUB_IMAGE_BASE}/DIR06516.jpg`,
    'DIR06557.jpg': `${GITHUB_IMAGE_BASE}/DIR06557.jpg`,
    'DIR06574.jpg': `${GITHUB_IMAGE_BASE}/DIR06574.jpg`,
    'DIR06591.jpg': `${GITHUB_IMAGE_BASE}/DIR06591.jpg`,
    'DFM03708.jpg': `${GITHUB_IMAGE_BASE}/DFM03708.jpg`,
    'DFM03713.jpg': `${GITHUB_IMAGE_BASE}/DFM03713.jpg`,
    'DSC00004.JPG': `${GITHUB_IMAGE_BASE}/DSC00004.JPG`,
    '3d-scan.jpg': `${GITHUB_IMAGE_BASE}/3d-scan.jpg`,
  },

  // Events 圖片
  events: {
    '2024-tokyo': {
      'DFM03583.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03583.jpg`,
      'DFM03605.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03605.jpg`,
      'DFM03608.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03608.jpg`,
      'DFM03614.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03614.jpg`,
      'DFM03650.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03650.jpg`,
      'DFM03661.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03661.jpg`,
      'DFM03708.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03708.jpg`,
      'DFM03713.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DFM03713.jpg`,
      'DIRK7360.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DIRK7360.jpg`,
      'DIRK7399.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DIRK7399.jpg`,
      'DIRK7650.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DIRK7650.jpg`,
      'DIRK7774.jpg': `${GITHUB_IMAGE_BASE}/events/2024-tokyo/DIRK7774.jpg`,
    },
    '2025-tokyo': {
      'DIR06225.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06225.jpg`,
      'DIR06233.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06233.jpg`,
      'DIR06240.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06240.jpg`,
      'DIR06330.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06330.jpg`,
      'DIR06406.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06406.jpg`,
      'DIR06483.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06483.jpg`,
      'DIR06485.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06485.jpg`,
      'DIR06506.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06506.jpg`,
      'DIR06516.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06516.jpg`,
      'DIR06518.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06518.jpg`,
      'DIR06525.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06525.jpg`,
      'DIR06560.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06560.jpg`,
      'DIR06574.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06574.jpg`,
      'DIR06591.jpg': `${GITHUB_IMAGE_BASE}/events/2025-tokyo/DIR06591.jpg`,
    },
  },
};

// 輔助函數：根據檔名獲取圖片 URL
export const getImageUrl = (filename: string): string => {
  return imageUrls.main[filename as keyof typeof imageUrls.main] || `${GITHUB_IMAGE_BASE}/${filename}`;
};

// 輔助函數：獲取 Logo URL
export const getLogoUrl = (type: 'white' | 'bw' = 'white'): string => {
  return imageUrls.logo[type];
};

export default { videoUrls, imageUrls, getImageUrl, getLogoUrl };
