<template>
	<div class="doc">
		<p class="doc__title">Ui-checkbox</p>
		<div class="doc__component">
			<ui-checkbox
				:size="size"
				:type="type"
				:checkedValue="checkedValue"
				:unCheckedValue="unCheckedValue"
				:autofocus="autofocus"
				:checked="checked"
				:disabled="disabled"
				:loading="loading"
				:indeterminate="indeterminate"
				:value="value"
				@change:checked="change"
			>
				{{ slot }}
			</ui-checkbox>
		</div>

		<component-code
			name="ui-checkbox"
			:componentProperties="{
				size,
				type,
				checkedValue,
				unCheckedValue,
				autofocus,
				checked,
				disabled,
				loading,
				indeterminate,
				value
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
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((item) => ({ value: item }))"
					/>
					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((item) => ({ value: item }))"
					/>

					<a-input
						v-if="record.property === 'checkedValue'"
						v-model:value="checkedValue"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'unCheckedValue'"
						v-model:value="unCheckedValue"
						style="width: 200px"
					/>

					<a-switch
						v-if="record.property === 'loading'"
						v-model:checked="loading"
					/>
					<a-switch
						v-if="record.property === 'autofocus'"
						v-model:checked="autofocus"
					/>
					<a-switch
						v-if="record.property === 'checked'"
						v-model:checked="checked"
					/>
					<a-switch
						v-if="record.property === 'disabled'"
						v-model:checked="disabled"
					/>
					<a-switch
						v-if="record.property === 'indeterminate'"
						v-model:checked="indeterminate"
					/>
					<a-switch
						v-if="record.property === 'value'"
						v-model:checked="value"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiCheckbox from "@/components/ui-kit/ui-checkbox.vue"

// Types
import { Docs, UiCheckbox } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const change = (val: boolean) => {
	checked.value = val
}

const slot = ref<string>("Checkbox")

// Props
const type = ref<UiCheckbox.Type>("checkbox")
const typeValues = ref<UiCheckbox.Type[]>(["checkbox", "switch"])

const size = ref<UiCheckbox.Size>("default")
const sizeValues = ref<UiCheckbox.Size[]>(["default", "small"])

const checkedValue = ref<UiCheckbox.CheckedValue>("1")
const unCheckedValue = ref<UiCheckbox.UnCheckedValue>("0")

const autofocus = ref<boolean>(false)
const checked = ref<boolean>(false)
const disabled = ref<boolean>(false)
const indeterminate = ref<boolean>(false)
const loading = ref<boolean>(false)
const value = ref<UiCheckbox.Value>(false)

const data: Docs.Data = [
	{
		key: "1",
		property: "Slot",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "type",
		type: "string",
		default: "checkbox"
	},
	{
		key: "3",
		property: "size",
		type: "string",
		default: "default"
	},
	{
		key: "4",
		property: "checkedValue",
		type: "boolean",
		default: "false"
	},
	{
		key: "5",
		property: "unCheckedValue",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "loading",
		type: "boolean",
		default: "false"
	},
	{
		key: "7",
		property: "autofocus",
		type: "boolean",
		default: "false"
	},
	{
		key: "8",
		property: "checked",
		type: "boolean",
		default: "false"
	},
	{
		key: "9",
		property: "disabled",
		type: "boolean",
		default: "false"
	},
	{
		key: "10",
		property: "indeterminate",
		type: "boolean",
		default: "false"
	},
	{
		key: "11",
		property: "value",
		type: "boolean",
		default: "false"
	}
]
</script>
