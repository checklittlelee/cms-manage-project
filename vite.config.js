import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
// Element Plus 按需导入的两个插件
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 共享配置
  base: "/cms-manage/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 自动导入到每个Less文件中
        additionalData: '@import "@/styles/mixin.less";',
      },
    },
  },
  // 服务器配置
  server: {
    host: "127.0.0.1",
    port: 3011,
  },
})
