<template>
	<div class="doc">
		<p class="doc__title">Ui-input</p>
		<div class="doc__component _dark">
			<ui-input
				:size="size"
				:type="type"
				:error="error"
				:value="value"
				:placeholder="placeholder"
				:title="title"
				:defaultValue="defaultValue"
				:id="id"
				:maxLength="maxLength"
				:allowClear="allowClear"
				:bordered="bordered"
				:disabled="disabled"
				:showCount="showCount"
				style="width: 260px"
				@input:value="input"
			/>
		</div>

		<component-code
			name="ui-input"
			:componentProperties="{
				size,
				type,
				error,
				value,
				placeholder,
				title,
				defaultValue,
				id,
				maxLength,
				allowClear,
				bordered,
				disabled,
				showCount
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((item) => ({ value: item }))"
					/>
					<a-select
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((item) => ({ value: item }))"
					/>
					<a-input
						v-if="record.property === 'error'"
						v-model:value="error"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'placeholder'"
						v-model:value="placeholder"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'title'"
						v-model:value="title"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'defaultValue'"
						v-model:value="defaultValue"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'id'"
						v-model:value="id"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'maxLength'"
						v-model:value="maxLength"
						style="width: 200px"
					/>

					<a-switch
						v-if="record.property === 'allowClear'"
						v-model:checked="allowClear"
					/>
					<a-switch
						v-if="record.property === 'bordered'"
						v-model:checked="bordered"
					/>
					<a-switch
						v-if="record.property === 'disabled'"
						v-model:checked="disabled"
					/>
					<a-switch
						v-if="record.property === 'showCount'"
						v-model:checked="showCount"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiInput from "@/components/ui-kit/ui-input.vue"

// Types
import { Docs, UiInput } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const slot = ref<string>("")

const input = (event: any) => {
	if (typeof event === "string") value.value = event
}

// Props
const size = ref<UiInput.Size>("default")
const sizeValues = ["large", "default", "small"]

const type = ref<UiInput.Type>("text")
const typeValues = [
	"text",
	"textarea",
	"color",
	"date",
	"datetime-local",
	"email",
	"month",
	"number",
	"url",
	"week",
	"search",
	"tel",
	"password",
	"submit",
	"reset",
	"radio",
	"checkbox",
	"button",
	"file",
	"image"
]

const error = ref<string>("")

const value = ref<string>("")
const placeholder = ref<string>("")
const title = ref<string>("Input name")
const defaultValue = ref<string>("")
const id = ref<string>("")

const maxLength = ref<number>(20)

const allowClear = ref<boolean>(false)
const bordered = ref<boolean>(true)
const disabled = ref<boolean>(false)
const showCount = ref<boolean>(false)

const data: Docs.Data = [
	{
		key: "1",
		property: "Slot",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "size",
		values: sizeValues,
		type: "string",
		default: "default"
	},
	{
		key: "3",
		property: "type",
		values: typeValues,
		type: "string",
		default: "text"
	},
	{
		key: "14",
		property: "error",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "5",
		property: "placeholder",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "6",
		property: "title",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "7",
		property: "defaultValue",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "8",
		property: "id",
		values: null,
		type: "string",
		default: "-"
	},
	{
		key: "9",
		property: "maxLength",
		values: null,
		type: "number",
		default: "-"
	},
	{
		key: "10",
		property: "allowClear",
		values: null,
		type: "boolean",
		default: "-"
	},
	{
		key: "11",
		property: "bordered",
		values: null,
		type: "boolean",
		default: "-"
	},
	{
		key: "12",
		property: "disabled",
		values: null,
		type: "boolean",
		default: "-"
	},
	{
		key: "13",
		property: "showCount",
		values: null,
		type: "boolean",
		default: "-"
	}
]
</script>
