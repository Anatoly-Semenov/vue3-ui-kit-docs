<template>
	<div class="doc">
		<p class="doc__title">Ui-image</p>
		<div class="doc__component">
			<ui-image
				:alt="alt"
				:fallback="fallback"
				:width="Number(width)"
				:height="Number(height)"
				:placeholder="placeholder"
				:preview="preview"
				:src="src"
			>
				{{ slot }}
			</ui-image>
		</div>

		<component-code
			name="ui-image"
			:componentProperties="{
				alt,
				fallback,
				width,
				height,
				placeholder,
				preview,
				src
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
					<a-input
						v-if="record.property === 'src'"
						v-model:value="src"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'height'"
						v-model:value="height"
						type="number"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'width'"
						v-model:value="width"
						type="number"
						style="width: 200px"
					/>
					<a-switch
						v-if="record.property === 'preview'"
						v-model:checked="preview"
					/>
					<a-switch
						v-if="record.property === 'placeholder'"
						v-model:checked="placeholder"
					/>
					<a-input
						v-if="record.property === 'fallback'"
						v-model:value="fallback"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'alt'"
						v-model:value="alt"
						style="width: 200px"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

// Components
import uiImage from "@/components/ui-kit/ui-image.vue"

// Hooks
import useDocs from "@/hooks/docs"
import type { Docs } from "@/types"
const { columns } = useDocs()

const slot = ref<string>("")

// Props
const alt = ref<string>("")
const fallback = ref<string>("")
const placeholder = ref<string>("")
const preview = ref<boolean>(true)
const src = ref<string>(
	"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
)
const height = ref<number>(200)
const width = ref<number>(200)

const data: Docs.Data = [
	{
		key: "1",
		property: "Slot",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "src",
		type: "string",
		default: "-"
	},
	{
		key: "3",
		property: "height",
		type: "string | number",
		default: "-"
	},
	{
		key: "3",
		property: "width",
		type: "string | number",
		default: "-"
	},
	{
		key: "7",
		property: "preview",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "placeholder",
		type: "boolean",
		default: "false"
	},
	{
		key: "4",
		property: "fallback",
		type: "string",
		default: "-"
	},
	{
		key: "5",
		property: "alt",
		type: "string",
		default: "-"
	}
]
</script>
