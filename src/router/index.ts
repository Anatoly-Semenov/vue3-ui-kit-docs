import {
	createRouter,
	createWebHistory,
	Router,
	RouteRecordRaw
} from "vue-router"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "index",
		component: () => import("../pages/index.vue")
	},
	{
		path: "/installation",
		name: "installation",
		component: () => import("../pages/installation.vue")
	},
	{
		path: "/usage",
		name: "usage",
		component: () => import("../pages/usage.vue")
	},
	{
		path: "/colors",
		name: "colors",
		component: () => import("../pages/colors.vue")
	},
	{
		path: "/components",
		name: "components",
		component: () => import("../pages/components/index.vue")
	},
	{
		path: "/ui-button",
		name: "ui-button",
		component: () => import("../pages/components/button.vue")
	}
]

const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
