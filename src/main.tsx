import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('🚀 DTMRS Website v2.9.17');
console.log('✅ 修復所有中文檔名問題 (圖片+影片)');
console.log('🎨 更新網站標題和 Logo (favicon)');
console.log('🌐 完全支援 cPanel 部署');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
