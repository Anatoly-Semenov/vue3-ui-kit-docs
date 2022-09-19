<template>
	<div class="doc">
		<p class="doc__title">Ui-text</p>
		<div class="doc__component _dark">
			<ui-text :type="type" :size="size" :device="device">
				{{ slot }}
			</ui-text>
		</div>

		<component-code
			name="ui-text"
			:componentProperties="{
				type,
				size,
				device
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-input
						v-if="record.property === 'slot'"
						v-model:value="slot"
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
						v-if="record.property === 'device'"
						v-model:value="device"
						style="width: 200px"
						:options="deviceValues.map((value) => ({ value: value }))"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiText from "@/components/ui-kit/ui-text.vue"

// Types
import type { Docs, UiText } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "slot",
		type: "any",
		default: "-"
	},
	{
		key: "2",
		property: "type",
		type: "string",
		default: "text"
	},
	{
		key: "3",
		property: "size",
		type: "string",
		default: "m"
	},
	{
		key: "4",
		property: "device",
		type: "string",
		default: "mobile"
	}
]

// Props
const slot = ref<string>("Lorem ipsum")
const type = ref<UiText.Type>("text")
const typeValues = ref<UiText.Type[]>([
	"title",
	"subtitle",
	"text",
	"description"
])
const size = ref<UiText.Size>("m")
const sizeValues = ref<UiText.Size[]>(["xs", "s", "m", "l"])
const device = ref<UiText.Device>("mobile")
const deviceValues = ref<UiText.Device[]>(["desktop", "tablet", "mobile"])
</script>
