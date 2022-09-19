<template>
	<div class="doc">
		<p class="doc__title">ui-alert</p>
		<div class="doc__component">
			<ui-alert :type="type" :title="title">{{ description }}</ui-alert>
		</div>

		<component-code
			name="ui-alert"
			:componentProperties="{
				type,
				title
			}"
			:component-slot="description"
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
					<a-input v-if="record.property === 'title'" v-model:value="title" />
					<a-textarea
						v-if="record.property === 'description'"
						v-model:value="description"
						auto-size
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>
<script lang="ts">
export default {
	name: "alert-component"
}
</script>
<script setup lang="ts">
import { defineComponent, computed, ref } from "vue"

// Components
import UiAlert, { type Props } from "@/components/ui-kit/ui-alert.vue"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const type = ref<Props["type"]>("info")
const typeValues = ref<Array<Props["type"]>>([
	"success",
	"info",
	"warning",
	"error"
])
const title = ref<string>("Sed magna purus")
const description = ref<string>(
	"Nunc interdum lacus sit amet orci. Praesent venenatis metus at tortor pulvinar varius. Pellentesque commodo eros a enim."
)

const data = computed((): Record<string, any>[] => {
	return [
		{
			key: "1",
			property: "type",
			value: type,
			type: "string",
			default: "-"
		},
		{
			key: "2",
			property: "title",
			value: title,
			type: "string",
			default: "-"
		},
		{
			key: "3",
			property: "description",
			value: description,
			type: "string",
			default: "-"
		}
	]
})
</script>
