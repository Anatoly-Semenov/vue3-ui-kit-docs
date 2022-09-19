<template>
	<div class="components">
		<a-typography-title>Базовые компоненты</a-typography-title>
		<a-typography-paragraph>
			<a-typography-text keyboard>Ui-kit</a-typography-text>
			компоненты
		</a-typography-paragraph>

		<a-input-search
			class="components__search"
			v-model:value="componentName"
			placeholder="Поиск"
			enter-button
			@search="onSearch"
		/>

		<a-list
			:grid="{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4, xxxl: 5 }"
			:data-source="data"
			size="small"
		>
			<template #renderItem="{ item }">
				<a-list-item>
					<router-link :to="item.route">
						<a-card class="components__card" :title="item.title">
							<img :src="item.img" />
						</a-card>
					</router-link>
				</a-list-item>
			</template>
		</a-list>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

// Types
interface DataItem {
	title: string
	img: string
	route: string
}

// Hooks
import useComponents from "@/hooks/components-page"

// Data
const list: DataItem[] = [
	{
		title: "Ui-button",
		img: require("@/assets/img/ui-components/ui-button.png"),
		route: "/ui-button"
	},
	{
		title: "Ui-button-icon",
		img: require("@/assets/img/ui-components/ui-button-icon.png"),
		route: "/ui-button-icon"
	},
	{
		title: "Ui-avatar",
		img: require("@/assets/img/ui-components/ui-avatar.png"),
		route: "/ui-avatar"
	},
	{
		title: "Ui-badge",
		img: require("@/assets/img/ui-components/ui-badge.png"),
		route: "/ui-badge"
	},
	{
		title: "Ui-input",
		img: require("@/assets/img/ui-components/ui-input.png"),
		route: "/ui-input"
	},
	{
		title: "Ui-checkbox",
		img: require("@/assets/img/ui-components/ui-checkbox.png"),
		route: "/ui-checkbox"
	},
	{
		title: "Ui-image",
		img: require("@/assets/img/ui-components/ui-image.png"),
		route: "/ui-image"
	},
	{
		title: "Ui-embed",
		img: require("@/assets/img/ui-components/ui-embed.png"),
		route: "/ui-embed"
	},
	{
		title: "Ui-logo",
		img: require("@/assets/img/ui-components/ui-logo.png"),
		route: "/ui-logo"
	},
	{
		title: "Ui-tabs",
		img: require("@/assets/img/ui-components/ui-tabs.png"),
		route: "/ui-tabs"
	},
	{
		title: "Ui-icon",
		img: require("@/assets/img/ui-components/ui-icon.png"),
		route: "/ui-icon"
	},
	{
		title: "Ui-alert",
		img: require("@/assets/img/ui-components/ui-alert.png"),
		route: "/ui-alert"
	},
	{
		title: "Ui-qr-code",
		img: require("@/assets/img/ui-components/ui-qr-code.png"),
		route: "/ui-qr-code"
	},
	{
		title: "Ui-modal",
		img: require("@/assets/img/ui-components/ui-modal.png"),
		route: "/ui-modal"
	},
	{
		title: "Ui-modal-swipe",
		img: require("@/assets/img/ui-components/ui-modal-swipe.png"),
		route: "/ui-modal-swipe"
	},
	{
		title: "Ui-stories",
		img: require("@/assets/img/ui-components/ui-stories.png"),
		route: "/ui-stories"
	},
	{
		title: "Ui-tooltip",
		img: require("@/assets/img/ui-components/ui-tooltip.png"),
		route: "/ui-tooltip"
	},
	{
		title: "Ui-tag",
		img: require("@/assets/img/ui-components/ui-tag.png"),
		route: "/ui-tag"
	},
	{
		title: "Ui-text",
		img: require("@/assets/img/ui-components/ui-text.png"),
		route: "/ui-text"
	},
	{
		title: "Ui-contacts",
		img: require("@/assets/img/ui-components/ui-contacts.png"),
		route: "/ui-contacts"
	},
	{
		title: "Ui-links",
		img: require("@/assets/img/ui-components/ui-links.png"),
		route: "/ui-links"
	},
	{
		title: "Ui-list",
		img: require("@/assets/img/ui-components/ui-list.png"),
		route: "/ui-list"
	}
]

export default defineComponent({
	name: "page-base",
	setup() {
		const { data, componentName } = useComponents(list)

		return { data, componentName }
	}
})
</script>
