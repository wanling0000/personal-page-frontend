import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/personal-page-frontend/',
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.254.91.64:7921', // 目标服务器地址
        changeOrigin: true, // 是否改变域名
        rewrite: (path) => path.replace(/^\/api/, '') // 路径重写
      }
    }
  }
})
