<template>
	<div class="doc">
		<p class="doc__title">Ui-avatar</p>
		<div class="doc__component">
			<ui-avatar
				:size="size"
				:src="src"
				:shape="shape"
				:draggable="draggable"
				:alt="alt"
				:srcset="srcset"
				:preview="preview"
			>
				{{ slot }}
			</ui-avatar>
		</div>

		<component-code
			name="ui-avatar"
			:componentProperties="{
				size,
				src,
				shape,
				draggable,
				alt,
				srcset,
				preview
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
						v-if="record.property === 'Size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>

					<a-select
						v-if="record.property === 'Shape'"
						v-model:value="shape"
						style="width: 200px"
						:options="shapeValues.map((value) => ({ value: value }))"
					/>

					<a-input
						v-if="record.property === 'Src'"
						v-model:value="src"
						style="width: 200px"
					/>

					<a-switch
						v-if="record.property === 'Draggable'"
						v-model:checked="draggable"
					/>

					<a-switch
						v-if="record.property === 'Preview'"
						v-model:checked="preview"
					/>

					<a-input
						v-if="record.property === 'Alt'"
						v-model:value="alt"
						style="width: 200px"
					/>

					<a-input
						v-if="record.property === 'Srcset'"
						v-model:value="srcset"
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
import uiAvatar from "@/components/ui-kit/ui-avatar.vue"

// Types
import { Docs, UiAvatar } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const slot = ref<string>("")

// Props
const size = ref<UiAvatar.Size>("default")
const sizeValues = ref([
	"large",
	"small",
	"default",
	24,
	32,
	40,
	48,
	64,
	88,
	128,
	160
])

const shape = ref<UiAvatar.Shape>("circle")
const shapeValues = ref(["circle", "square"])

const src = ref<string>(
	"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
)
const draggable = ref<boolean>(false)
const preview = ref<boolean>(false)
const alt = ref<string>("")
const srcset = ref<string>("")

const data: Docs.Data = [
	{
		key: "1",
		property: "Slot",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "Size",
		type: "string",
		default: "middle"
	},
	{
		key: "3",
		property: "Shape",
		type: "string",
		default: "circle"
	},
	{
		key: "4",
		property: "Src",
		type: "string",
		default: "-"
	},
	{
		key: "5",
		property: "Draggable",
		type: "boolean",
		default: "-"
	},
	{
		key: "8",
		property: "Preview",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "Alt",
		type: "string",
		default: "-"
	},
	{
		key: "7",
		property: "Srcset",
		type: "string",
		default: "-"
	}
]
</script>
