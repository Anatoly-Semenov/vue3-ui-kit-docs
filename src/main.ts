import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Ui
import AntDesign from "ant-design-vue"

// Css
import "ant-design-vue/dist/antd.css"
import "./assets/styles/styles.styl"

createApp(App).use(router).use(AntDesign).mount("#app")
