<template>
	<div class="doc">
		<p class="doc__title">ui-delimiter</p>
		<div class="doc__component">
			<ui-delimiter :type="type" />
		</div>

		<component-code
			name="ui-delimiter"
			:componentProperties="{
				type
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((value) => ({ value: value }))"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>
<script lang="ts">
export default {
	name: "delimiter-component"
}
</script>
<script setup lang="ts">
import { computed, ref } from "vue"

// Components
import UiDelimiter, { type Props } from "@/components/ui-kit/ui-delimiter.vue"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const type = ref<Props["type"]>("solid")
const typeValues = ref<Array<Props["type"]>>(["solid", "dashed"])

const data = computed((): Record<string, any>[] => {
	return [
		{
			key: "1",
			property: "type",
			value: type,
			type: "string",
			default: "-"
		}
	]
})
</script>
