import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

// Ui
import AntDesign from "ant-design-vue"
import componentCode from "@/components/component-code.vue"
import propsColumns from "@/components/props-columns.vue"

// Directives
import VueClickAway from "vue3-click-away"

// Css
import "ant-design-vue/dist/antd.css"
import "vue-code-highlight/themes/duotone-sea.css"
import "vue-code-highlight/themes/window.css"
import "./assets/styles/styles.styl"

createApp(App)
	.use(router)
	.use(AntDesign)
	.component("component-code", componentCode)
	.component("props-columns", propsColumns)
	.use(VueClickAway)
	.mount("#app")
