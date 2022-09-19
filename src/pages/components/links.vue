<template>
	<div class="doc">
		<p class="doc__title">Ui-links</p>
		<div class="doc__component" style="width: 300px">
			<ui-links :data="linksData" />
		</div>

		<component-code
			name="ui-links"
			:componentProperties="{
				data: linksData
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false" />
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

// Components
import uiLinks from "@/components/ui-kit/ui-links.vue"

// Types
import { Docs, UiLinks } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "data",
		type: "Array",
		default: "[]"
	}
]

// Props
const linksData: UiLinks.Data = [
	{
		text: "ui-button",
		link: "/base/ui-button"
	},
	{
		text: "ui-avatar",
		link: "/base/ui-avatar"
	},
	{
		text: "ui-badge",
		link: "/base/ui-badge"
	}
]
</script>
