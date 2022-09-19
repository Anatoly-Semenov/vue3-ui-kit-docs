<template>
	<a-layout style="min-height: 100vh">
		<a-layout-sider v-model:collapsed="collapsed" collapsible>
			<router-link to="/" class="logo">
				<img src="@/assets/img/logo.png" />
			</router-link>
			<a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
				<a-menu-item key="1" @click="$router.push('/')">
					<home-outlined />
					<span>Главная</span>
				</a-menu-item>
				<a-menu-item key="2" @click="$router.push('/installation')">
					<pie-chart-outlined />
					<span>Установка</span>
				</a-menu-item>
				<a-menu-item key="3" @click="$router.push('/usage')">
					<tool-outlined />
					<span>Использование</span>
				</a-menu-item>
				<a-menu-item key="4" @click="$router.push('/colors')">
					<tool-outlined />
					<span>Цвета</span>
				</a-menu-item>
				<a-sub-menu key="sub1" @titleClick="$router.push('/components')">
					<template #title>
						<span>
							<user-outlined />
							<span>Компоненты</span>
						</span>
					</template>
					<a-menu-item
						v-for="(item, index) in baseMenu"
						:key="`base-${index}`"
						@click="$router.push(`/components/${item.toLowerCase()}`)"
					>
						{{ item }}
					</a-menu-item>
				</a-sub-menu>
			</a-menu>
		</a-layout-sider>
		<a-layout>
			<a-layout-header style="background: #fff; padding: 0">
				<div class="header">
					<div />
					<a-dropdown-button>
						<a :href="githubLink" target="_blank">
							Repository
							<github-outlined />
						</a>
						<template #overlay>
							<a-menu @click="handleMenuClick">
								<a-menu-item @click="toLink(githubLink)" key="drop-1">
									<github-outlined />
									GitHub
								</a-menu-item>
								<a-menu-item @click="toLink(antDesignLink)" key="drop-2">
									<ant-design-outlined />
									Ant Design
								</a-menu-item>
							</a-menu>
						</template>
						<template #icon><MoreOutlined /></template>
					</a-dropdown-button>
				</div>
			</a-layout-header>
			<a-layout-content style="margin: 0 16px">
				<a-breadcrumb style="margin: 16px 0">
					<a-breadcrumb-item
						v-for="({ name, route }, index) in breadcrumbs"
						:key="index"
					>
						<router-link :to="route">{{ name }}</router-link>
					</a-breadcrumb-item>
				</a-breadcrumb>
				<div
					:style="{ padding: '24px', background: '#fff', minHeight: '360px' }"
				>
					<router-view />
				</div>
			</a-layout-content>
			<a-layout-footer style="text-align: center">
				Anatoly Semenov ©2022
			</a-layout-footer>
		</a-layout>
	</a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

// Components
import {
	PieChartOutlined,
	UserOutlined,
	HomeOutlined,
	ToolOutlined,
	GithubOutlined,
	MoreOutlined,
	AntDesignOutlined
} from "@ant-design/icons-vue"
import useBreadcrumbs from "@/hooks/layout/breadcrumbs"

export default defineComponent({
	name: "app-layout",
	components: {
		PieChartOutlined,
		UserOutlined,
		HomeOutlined,
		ToolOutlined,
		GithubOutlined,
		MoreOutlined,
		AntDesignOutlined
	},
	setup() {
		const { breadcrumbs } = useBreadcrumbs()

		const toLink = (link: string): void => {
			window.open(link, "_blank")!.focus()
		}

		return {
			collapsed: ref<boolean>(false),
			selectedKeys: ref<string[]>(["1"]),
			githubLink: "https://github.com/Anatoly-Semenov/vue3-ui-kit-package",
			antDesignLink: "https://antdv.com/",
			baseMenu: [
				"Ui-button",
				"Ui-button-icon",
				"Ui-avatar",
				"Ui-badge",
				"Ui-input",
				"Ui-checkbox",
				"Ui-image",
				"Ui-embed",
				"Ui-logo",
				"Ui-tabs",
				"Ui-icon",
				"Ui-alert",
				"Ui-qr-code",
				"Ui-modal",
				"Ui-stories",
				"Ui-stories",
				"Ui-tooltip",
				"Ui-tag",
				"Ui-text",
				"Ui-contacts",
				"Ui-links",
				"Ui-list"
			],
			toLink,
			breadcrumbs
		}
	}
})
</script>
<style lang="stylus">
.logo
	display flex
	justify-content center
	align-items center
	height 50px
	margin 16px
	background #FFFFFF

	& img
		width auto
		height 70%
		pointer-events none
		transition opacity .4s ease


	&:hover img
		opacity .8

.header
	width 100%
	height 100%
	display flex
	justify-content space-between
	align-items center
	padding 20px
</style>
