<template>
	<div class="doc">
		<p class="doc__title">Ui-button</p>
		<div class="doc__component _dark">
			<ui-button
				:type="type"
				:size="size"
				:disabled="disabled"
				:loading="loading"
				:ghost="ghost"
				:block="block"
				:danger="danger"
			>
				{{ slot }}
			</ui-button>
		</div>

		<component-code
			name="ui-button"
			:componentProperties="{
				type,
				size,
				disabled,
				loading,
				ghost,
				block,
				danger
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-input
						v-if="record.property === 'Slot'"
						v-model:value="slot"
						style="width: 200px"
					/>

					<a-select
						v-if="record.property === 'Type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((value) => ({ value: value }))"
					/>

					<a-select
						v-if="record.property === 'Size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>

					<a-switch
						v-if="record.property === 'Disabled'"
						v-model:checked="disabled"
					/>
					<a-switch
						v-if="record.property === 'Loading'"
						v-model:checked="loading"
					/>
					<a-switch
						v-if="record.property === 'Ghost'"
						v-model:checked="ghost"
					/>
					<a-switch
						v-if="record.property === 'Block'"
						v-model:checked="block"
					/>
					<a-switch
						v-if="record.property === 'Danger'"
						v-model:checked="danger"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import { Docs, UiButton } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Props
const slot = ref<string>("Button")

const type = ref<UiButton.Type>("primary")
const typeValues = ref([
	"primary",
	"ghost",
	"dashed",
	"danger",
	"link",
	"default"
])

const size = ref<UiButton.Size>("middle")
const sizeValues = ref(["large", "middle", "small"])

const disabled = ref<boolean>(false)
const loading = ref<boolean>(false)
const ghost = ref<boolean>(false)
const block = ref<boolean>(false)
const danger = ref<boolean>(false)

const data: Docs.Data = [
	{
		key: "1",
		property: "Slot",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "Type",
		type: "string",
		default: "primary"
	},
	{
		key: "3",
		property: "Size",
		type: "string",
		default: "middle"
	},
	{
		key: "4",
		property: "Disabled",
		type: "boolean",
		default: "false"
	},
	{
		key: "5",
		property: "Loading",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "Ghost",
		type: "boolean",
		default: "false"
	},
	{
		key: "7",
		property: "Block",
		type: "boolean",
		default: "false"
	},
	{
		key: "8",
		property: "Danger",
		type: "boolean",
		default: "false"
	}
]
</script>
