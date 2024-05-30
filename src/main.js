import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import * as ElementPlusIconsVue from "@element-plus/icons-vue"
import "@/styles/app.less" // 后台装修搭建系统公共CSS

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.mount("#app")
