<template>
	<div class="index">
		<a-typography-title>@anatoly-dev/ui-kit</a-typography-title>
		<a-typography-paragraph>
			Документация к пакету с ui-компонентами для vue3 проекта
		</a-typography-paragraph>
		<a-typography-paragraph>
			<blockquote>Стек:</blockquote>
		</a-typography-paragraph>
		<a-list :grid="{ gutter: 16, column: 4 }" :data-source="data">
			<template #renderItem="{ item }">
				<a-list-item>
					<a-card class="index__card" :title="item.title">
						<img class="index__card-logo" :src="item.logo" />
						<a :href="item.link" target="_blank">{{ item.title }}</a>
					</a-card>
				</a-list-item>
			</template>
		</a-list>

		<a-typography-title
			:level="3"
			style="margin-top: 50px; margin-bottom: 20px"
		>
			Первые шаги:
		</a-typography-title>
		<a-timeline>
			<a-timeline-item v-for="{ text, route } in menu" :key="text">
				<router-link :to="route">
					<a-tag color="blue">{{ text }}</a-tag>
				</router-link>
			</a-timeline-item>
		</a-timeline>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

const data: {
	title: string
	link: string
	logo: string
}[] = [
	{
		title: "Vue3",
		link: "https://vuejs.org/",
		logo: require("@/assets/img/vue-logo.png")
	},
	{
		title: "Ant Design Vue",
		link: "https://antdv.com/",
		logo: require("@/assets/img/ant-logo.png")
	}
]

const menu: { text: string; route: string }[] = [
	{
		text: "Установка",
		route: "/installation"
	},
	{
		text: "Использование компонентов",
		route: "/usage"
	},
	{
		text: "Компоненты",
		route: "/components"
	}
]

export default defineComponent({
	name: "page-index",
	setup() {
		return { data, menu }
	}
})
</script>

<style lang="stylus">
.index
	width 100%
	display flex
	flex-direction column

	&__card
		& .ant-card-body
			display flex
			flex-direction column

		&-logo
			height 40px
			width min-content
			margin-bottom 20px
</style>
