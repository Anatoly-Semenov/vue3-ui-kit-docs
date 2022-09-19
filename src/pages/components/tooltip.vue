<template>
	<div class="doc">
		<p class="doc__title">Ui-tooltip</p>
		<div class="doc__component">
			<ui-tooltip
				:placement="placement"
				:title="title"
				:trigger="trigger"
				:overlayClassName="overlayClassName"
			>
				<ui-button>Button with tooltip</ui-button>
			</ui-tooltip>
		</div>

		<component-code
			name="ui-tooltip"
			:componentProperties="{
				placement,
				title,
				trigger,
				overlayClassName
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'placement'"
						v-model:value="placement"
						style="width: 200px"
						:options="placementValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'trigger'"
						v-model:value="trigger"
						style="width: 200px"
						:options="triggerValues.map((value) => ({ value: value }))"
					/>

					<a-input
						v-if="record.property === 'title'"
						v-model:value="title"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'overlayClassName'"
						v-model:value="overlayClassName"
						style="width: 200px"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiTooltip from "@/components/ui-kit/ui-tooltip.vue"
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import { Docs, UiTooltip } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "placement",
		type: "string",
		default: "top"
	},
	{
		key: "2",
		property: "title",
		type: "string",
		default: "-"
	},
	{
		key: "3",
		property: "trigger",
		type: "string",
		default: "hover"
	},
	{
		key: "4",
		property: "overlayClassName",
		type: "string",
		default: "ui-tooltip__wrapper"
	}
]

// Props
const placement = ref<UiTooltip.Placement>("top")
const placementValues = ref<UiTooltip.Placement[]>([
	"top",
	"left",
	"right",
	"bottom",
	"topLeft",
	"topRight",
	"bottomLeft",
	"bottomRight",
	"leftTop",
	"leftBottom",
	"rightTop",
	"rightBottom"
])
const title = ref<string>("Tooltip title")
const trigger = ref<UiTooltip.Trigger>("hover")
const triggerValues = ref<UiTooltip.Trigger[]>([
	"hover",
	"focus",
	"click",
	"contextmenu"
])
const overlayClassName = ref<string>("ui-tooltip__wrapper")
</script>
