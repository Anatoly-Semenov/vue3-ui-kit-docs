<template>
	<div class="doc">
		<p class="doc__title">Ui-modal-swipe</p>
		<div class="doc__component">
			<ui-button @click="value = true">Open swipe modal</ui-button>
			<ui-modal-swipe
				:value="value"
				:persistent="persistent"
				:fullscreen="fullscreen"
				:dark="dark"
				@close="value = false"
			>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</ui-modal-swipe>
		</div>

		<component-code
			name="ui-modal-swipe"
			:componentProperties="{
				value,
				persistent,
				fullscreen,
				dark
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-switch
						v-if="record.property === 'value'"
						v-model:checked="value"
					/>
					<a-switch
						v-if="record.property === 'persistent'"
						v-model:checked="persistent"
					/>
					<a-switch
						v-if="record.property === 'fullscreen'"
						v-model:checked="fullscreen"
					/>
					<a-switch v-if="record.property === 'dark'" v-model:checked="dark" />
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiModalSwipe from "@/components/ui-kit/ui-modal-swipe.vue"
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import type { Docs } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "value",
		type: "boolean",
		default: "-"
	},
	{
		key: "2",
		property: "persistent",
		type: "boolean",
		default: "-"
	},
	{
		key: "3",
		property: "fullscreen",
		type: "boolean",
		default: "-"
	},
	{
		key: "4",
		property: "dark",
		type: "boolean",
		default: "-"
	}
]

// Props
const value = ref<boolean>(false)
const persistent = ref<boolean>(false)
const fullscreen = ref<boolean>(false)
const dark = ref<boolean>(false)
</script>
