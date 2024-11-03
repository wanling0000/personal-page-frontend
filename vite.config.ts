import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7921',
        changeOrigin: true, // 是否改变域名
        secure: false, // 如果目标地址使用 https，需要设置为 false
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }



})
