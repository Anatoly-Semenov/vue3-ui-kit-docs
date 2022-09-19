<template>
	<div class="doc">
		<p class="doc__title">Ui-tabs</p>
		<div class="doc__component">
			<ui-tabs
				:value="value"
				:defaultKey="defaultKey"
				:type="type"
				:size="size"
				:tabPosition="tabPosition"
				:tabsList="tabsList"
				:animated="animated"
			/>
		</div>

		<component-code
			name="ui-tabs"
			:componentProperties="{
				value,
				defaultKey,
				type,
				size,
				tabPosition,
				tabsList,
				animated
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<div v-if="record.property === 'tabsList'">
						{{ tabListType }}
					</div>

					<a-input
						v-if="record.property === 'value'"
						v-model:value="value"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'defaultKey'"
						v-model:value="defaultKey"
						style="width: 200px"
					/>

					<a-select
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'tabPosition'"
						v-model:value="tabPosition"
						style="width: 200px"
						:options="tabPositionValues.map((value) => ({ value: value }))"
					/>

					<a-switch
						v-if="record.property === 'animated'"
						v-model:checked="animated"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiTabs from "@/components/ui-kit/ui-tabs.vue"

import tab1 from "@/components/tab1.vue"
import tab2 from "@/components/tab2.vue"

// Types
import type { Docs, UiTabs } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Props
const value = ref<string>("1")
const defaultKey = ref<string>("1")

const type = ref<string>("line")
const typeValues = ref<UiTabs.Type[]>(["line", "card", "editable-card"])

const size = ref<UiTabs.Size>("default")
const sizeValues = ref<UiTabs.Size[]>(["small", "default", "large"])

const tabPosition = ref<UiTabs.Position>("top")
const tabPositionValues = ref<UiTabs.Position[]>([
	"top",
	"right",
	"bottom",
	"left"
])

const animated = ref<boolean>(true)

const tabsList = ref<UiTabs.Item[]>([
	{
		title: "Tab 1",
		component: tab1
	},
	{
		title: "Tab 2",
		component: tab2
	},
	{
		title: "Tab 3",
		component: tab1
	}
])

const data: Docs.Data = [
	{
		key: "3",
		property: "type",
		type: "string",
		default: "line"
	},
	{
		key: "4",
		property: "size",
		type: "string",
		default: "default"
	},
	{
		key: "5",
		property: "tabPosition",
		type: "string",
		default: "top"
	},
	{
		key: "7",
		property: "animated",
		type: "boolean",
		default: "true"
	},
	{
		key: "6",
		property: "tabsList",
		type: "Array",
		default: "-"
	},
	{
		key: "1",
		property: "value",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "defaultKey",
		type: "string",
		default: "1"
	}
]
</script>
