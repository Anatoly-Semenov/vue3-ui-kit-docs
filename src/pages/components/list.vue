<template>
	<div class="doc">
		<p class="doc__title">Ui-list</p>
		<div class="doc__component">
			<ui-list :data="listData" :type="type" />
		</div>

		<component-code
			name="ui-list"
			:componentProperties="{
				type,
				data: listData
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((value) => ({ value: value }))"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

// Components
import uiList from "@/components/ui-kit/ui-list.vue"

// Types
import type { Docs, UiList } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "type",
		type: `"default" | "number" | "checkbox"`,
		default: "default"
	},
	{
		key: "2",
		property: "data",
		type: "Array",
		default: "[]"
	}
]

// Props
const type = ref<UiList.Type>("default")
const typeValues = ref<UiList.Type[]>(["default", "number", "checkbox"])

const listData = computed(() => {
	if (type.value === "checkbox") {
		return [
			{
				text: "Step 1",
				value: false
			},
			{
				text: "Step 2",
				value: true
			},
			{
				text: "Step 3",
				value: false
			}
		]
	}

	return [
		"Lorem ipsum dolor sit amet | 1",
		"Lorem ipsum dolor sit amet | 2",
		"Lorem ipsum dolor sit amet | 3"
	]
})
</script>
