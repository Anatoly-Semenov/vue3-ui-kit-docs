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
	},
	{
		path: "/ui-button-icon",
		name: "ui-button-icon",
		component: () => import("../pages/components/button-icon.vue")
	},
	{
		path: "/ui-avatar",
		name: "ui-avatar",
		component: () => import("../pages/components/avatar.vue")
	},
	{
		path: "/ui-delimiter",
		name: "ui-delimiter",
		component: () => import("../pages/components/delimiter.vue")
	},
	{
		path: "/ui-badge",
		name: "ui-badge",
		component: () => import("../pages/components/badge.vue")
	},
	{
		path: "/ui-input",
		name: "ui-input",
		component: () => import("../pages/components/input.vue")
	},
	{
		path: "/ui-checkbox",
		name: "ui-checkbox",
		component: () => import("../pages/components/checkbox.vue")
	},
	{
		path: "/ui-image",
		name: "ui-image",
		component: () => import("../pages/components/image.vue")
	},
	{
		path: "/ui-logo",
		name: "ui-logo",
		component: () => import("../pages/components/logo.vue")
	},
	{
		path: "/ui-tabs",
		name: "ui-tabs",
		component: () => import("../pages/components/tabs.vue")
	},
	{
		path: "/ui-icon",
		name: "ui-icon",
		component: () => import("../pages/components/icon.vue")
	},
	{
		path: "/ui-modal",
		name: "ui-modal",
		component: () => import("../pages/components/modal.vue")
	},
	{
		path: "/ui-modal-swipe",
		name: "ui-modal-swipe",
		component: () => import("../pages/components/modal-swipe.vue")
	},
	{
		path: "/ui-tooltip",
		name: "ui-tooltip",
		component: () => import("../pages/components/tooltip.vue")
	},
	{
		path: "/ui-tag",
		name: "ui-tag",
		component: () => import("../pages/components/tag.vue")
	},
	{
		path: "/ui-text",
		name: "ui-text",
		component: () => import("../pages/components/text.vue")
	},
	{
		path: "/ui-stories",
		name: "ui-stories",
		component: () => import("../pages/components/stories.vue")
	},
	{
		path: "/ui-alert",
		name: "ui-alert",
		component: () => import("../pages/components/alert.vue")
	},
	{
		path: "/ui-contacts",
		name: "ui-contacts",
		component: () => import("../pages/components/contacts.vue")
	},
	{
		path: "/ui-links",
		name: "ui-links",
		component: () => import("../pages/components/links.vue")
	},
	{
		path: "/ui-list",
		name: "ui-list",
		component: () => import("../pages/components/list.vue")
	},
	{
		path: "/ui-qr-code",
		name: "ui-qr-code",
		component: () => import("../pages/components/qrcode.vue")
	}
]

const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
