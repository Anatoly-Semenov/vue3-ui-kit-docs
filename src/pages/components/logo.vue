<template>
	<div class="doc">
		<p class="doc__title">Ui-logo</p>
		<div class="doc__component">
			<ui-logo
				:src="src"
				:size="size"
				:border="border"
				:shadow="shadow"
				:background="background"
				:preview="preview"
			/>
		</div>

		<component-code
			name="ui-logo"
			:componentProperties="{
				src,
				size,
				border,
				shadow,
				background,
				preview
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-input
						v-if="record.property === 'src'"
						v-model:value="src"
						style="width: 200px"
					/>

					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>

					<a-switch
						v-if="record.property === 'border'"
						v-model:checked="border"
					/>
					<a-switch
						v-if="record.property === 'shadow'"
						v-model:checked="shadow"
					/>
					<a-switch
						v-if="record.property === 'preview'"
						v-model:checked="preview"
					/>
					<a-switch
						v-if="record.property === 'background'"
						v-model:checked="background"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiLogo from "@/components/ui-kit/ui-logo.vue"

// Types
import { Docs, UiLogo } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Props
const src = ref<string>(
	"data:image/png;base64,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"
)
const size = ref<UiLogo.Size>("middle")
const sizeValues = ref<UiLogo.Size[]>(["small", "middle", "large"])
const border = ref<boolean>(true)
const shadow = ref<boolean>(true)
const background = ref<boolean>(true)
const preview = ref<boolean>(true)

const data: Docs.Data = [
	{
		key: "1",
		property: "src",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "size",
		type: "string",
		default: "middle"
	},
	{
		key: "3",
		property: "border",
		type: "boolean",
		default: "false"
	},
	{
		key: "4",
		property: "shadow",
		type: "boolean",
		default: "false"
	},
	{
		key: "5",
		property: "preview",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "background",
		type: "boolean",
		default: "true"
	}
]
</script>
