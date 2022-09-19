import { computed } from "vue"
import { useRoute } from "vue-router"

interface Breadcrumb {
	name: string | symbol
	route: string
}

export default function useBreadcrumbs() {
	const route = useRoute()

	const breadcrumbs = computed(() => {
		const isDetail = !(route.name === "index" || route.name === "components")

		const breadcrumbsReady: Breadcrumb[] = [
			{
				name: "Главная",
				route: "/"
			}
		]

		if (route.fullPath.includes("components")) {
			breadcrumbsReady.push({
				name: "Components",
				route: "/components"
			})
		}

		if (isDetail) {
			breadcrumbsReady.push({
				name: route.name || "",
				route: route.path
			})
		}

		return breadcrumbsReady
	})

	return { breadcrumbs }
}
