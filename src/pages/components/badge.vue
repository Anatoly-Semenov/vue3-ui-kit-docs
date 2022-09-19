<template>
	<div class="doc">
		<p class="doc__title">Ui-badge</p>
		<div class="doc__component">
			<ui-badge
				:color="color"
				:count="count"
				:dot="dot"
				:offset="offset"
				:overflowCount="overflowCount"
				:showZero="showZero"
				:status="status"
				:text="text"
				:numberStyle="numberStyle"
				:title="title"
			/>

			<ui-badge
				:color="color"
				:count="count"
				:dot="dot"
				:offset="offset"
				:overflowCount="overflowCount"
				:showZero="showZero"
				:status="status"
				:text="text"
				:numberStyle="numberStyle"
				:title="title"
			>
				<ui-avatar
					src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
				/>
			</ui-badge>

			<ui-badge
				:color="color"
				:count="count"
				:dot="dot"
				:offset="offset"
				:overflowCount="overflowCount"
				:showZero="showZero"
				:status="status"
				:text="text"
				:numberStyle="numberStyle"
				:title="title"
			>
				<ui-button>Button</ui-button>
			</ui-badge>
		</div>

		<component-code
			name="ui-badge"
			:componentProperties="{
				color,
				count,
				dot,
				offset,
				overflowCount,
				showZero,
				status,
				text,
				numberStyle,
				title
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-input
						v-if="record.property === 'Color'"
						type="color"
						v-model:value="color"
						style="width: 200px"
					/>

					<a-input
						v-if="record.property === 'Count'"
						type="number"
						v-model:value="count"
						style="width: 200px"
					/>

					<a-switch v-if="record.property === 'Dot'" v-model:checked="dot" />

					<a-input
						v-if="record.property === 'Overflow count'"
						type="number"
						v-model:value="overflowCount"
						style="width: 200px"
					/>

					<a-switch
						v-if="record.property === 'Show zero'"
						v-model:checked="showZero"
					/>

					<a-select
						v-if="record.property === 'Status'"
						v-model:value="status"
						style="width: 200px"
						:options="statusValues.map((value) => ({ value: value }))"
					/>

					<a-input
						v-if="record.property === 'Text'"
						v-model:value="text"
						style="width: 200px"
					/>

					<a-input
						v-if="record.property === 'Title'"
						v-model:value="title"
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
import uiBadge from "@/components/ui-kit/ui-badge.vue"
import uiAvatar from "@/components/ui-kit/ui-avatar.vue"
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import { Docs, UiBadge } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Props
const color = ref<string>("#FF8469")
const count = ref<UiBadge.Count>(1)
const dot = ref<boolean>(false)
const overflowCount = ref<number>(1)
const showZero = ref<boolean>(false)

const status = ref<UiBadge.Status>("default")
const statusValues = ref([
	"success",
	"processing",
	"default",
	"error",
	"warning"
])

const text = ref<string>("")
const title = ref<string>("Count")

const data: Docs.Data = [
	{
		key: "1",
		property: "Color",
		values: null,
		type: "string",
		default: "#FF8469"
	},
	{
		key: "2",
		property: "Count",
		values: null,
		type: "string | number",
		default: "-"
	},
	{
		key: "3",
		property: "Dot",
		values: null,
		type: "boolean",
		default: "false"
	},
	{
		key: "4",
		property: "Overflow count",
		values: null,
		type: "number",
		default: "-"
	},
	{
		key: "5",
		property: "Show zero",
		values: null,
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "Status",
		values: statusValues,
		type: "string",
		default: ""
	},
	{
		key: "7",
		property: "Text",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "8",
		property: "Title",
		values: null,
		type: "string",
		default: "count"
	}
]
</script>
