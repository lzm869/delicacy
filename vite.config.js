import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig({
  base: './',
  plugins:[ vue(),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/icons/svg')],
      symbolId: 'icon-[dir]-[name]',
    }),],
  server:{
    proxy:{
      '/api':{
        //允许端口号为http://localhost:4000进行跨域，将端口号传入空值api中
        target:'http://localhost:4000',
        changeOrigin:true,
        rewrite: (path) => path.replace(/^\/api/,'')
      }
    }
  },
  resolve: { 
    //设置绝对路径为符号@，位置为src
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      }
    ]
  }
})
