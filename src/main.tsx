import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

console.log('🚀 DTMRS Website v2.9.8');
console.log('📱 新增手機版響應式 Sidebar（頂部水平佈局）');
console.log('✨ 調整梯形斜度至 65% 更斜');

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
