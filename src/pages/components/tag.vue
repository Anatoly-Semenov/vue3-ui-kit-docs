<template>
	<div class="doc">
		<p class="doc__title">Ui-tag</p>
		<div class="doc__component">
			<ui-tag :color="color" :closable="closable" :visible="visible">
				{{ slot }}
			</ui-tag>
		</div>

		<component-code
			name="ui-tag"
			:componentProperties="{
				color,
				closable,
				visible
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
					<a-input
						v-if="record.property === 'color'"
						type="color"
						v-model:value="color"
						style="width: 200px"
					/>
					<a-switch
						v-if="record.property === 'closable'"
						v-model:checked="closable"
					/>
					<a-switch
						v-if="record.property === 'visible'"
						v-model:checked="visible"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiTag from "@/components/ui-kit/ui-tag.vue"

// Types
import type { Docs } from "@/types"

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
		property: "color",
		type: "string",
		default: "var(--color-ui)"
	},
	{
		key: "3",
		property: "closable",
		type: "boolean",
		default: "false"
	},
	{
		key: "4",
		property: "visible",
		type: "boolean",
		default: "true"
	}
]

// Props
const slot = ref<string>("Gold Sponsor")
const color = ref<string>("#F3BE00")
const closable = ref<boolean>(false)
const visible = ref<boolean>(true)
</script>
