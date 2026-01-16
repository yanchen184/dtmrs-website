import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // 根據建置模式決定 base 路徑
  const base = mode === 'cpanel' ? '/' : '/dtmrs-website/'

  console.log(`🔧 Build Mode: ${mode}`)
  console.log(`📂 Base Path: ${base}`)

  return {
    plugins: [react()],
    base: base,
    build: {
      outDir: mode === 'cpanel' ? 'dist-cpanel' : 'dist-github',
      emptyOutDir: true,
    }
  }
})
