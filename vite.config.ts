import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path"
import eslintPlugin from 'vite-plugin-eslint'
const pathResolve = (dir) => resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.vue']
    })
  ],
  resolve: {
    alias: {
      '@': pathResolve('./src')
    }
  },
  base: './',
  server: {
    port: 4000,
    open: true,
    cors: true
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve('src/style/baseColor.less')}";`,
        },
        javascriptEnabled: true,
      }
    }
  },
})
