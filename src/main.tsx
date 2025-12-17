import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('🚀 DTMRS Website v2.9.14');
console.log('📱 手機版 RWD 完整優化');
console.log('⚡ 進場動畫優化 - Logo 加快速度、手機版隱藏紅色梯形');
console.log('✨ 修正 Sidebar 遮擋文字問題 - 改用響應式 vw 單位');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
