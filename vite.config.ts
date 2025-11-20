import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // 根據部署平台動態設定 base 路徑
  // Vercel: 使用根路徑 '/'
  // GitHub Pages: 使用專案路徑 '/dtmrs-website/'
  base: process.env.VERCEL ? '/' : '/dtmrs-website/',
})
