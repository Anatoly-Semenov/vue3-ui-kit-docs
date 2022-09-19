<template>
	<div class="base">
		<p class="base__title">ui-qr-code.ts</p>
		<div class="base__component">
			<ui-qr-code :data="text" :size="size" />
		</div>

		<component-code
			name="ui-qr-code"
			:component-properties="{
				data: text,
				size
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<template v-if="column.key === 'value'">
					<a-input v-if="record.property === 'data'" v-model:value="text" />
				</template>
				<template v-if="column.key === 'value'">
					<a-input v-if="record.property === 'size'" v-model:value="size" />
				</template>
				<template v-if="column.key === 'type'">
					<a-tag color="red">{{ record.type }}</a-tag>
				</template>
				<template v-if="column.key === 'default'">
					<a-tag v-if="record.default">{{ record.default }}</a-tag>
					<p v-else>-</p>
				</template>
			</template>
		</a-table>
	</div>
</template>
<script lang="ts">
export default {
	name: "qrcode-component"
}
</script>
<script setup lang="ts">
import { computed, ref } from "vue"

// Components
import ComponentCode from "@/components/component-code.vue"
import UiQrCode from "@/components/ui-kit/ui-qr-code.vue"

const columns = [
	{
		title: "Property",
		dataIndex: "property",
		key: "property"
	},
	{
		title: "Value",
		dataIndex: "value",
		key: "value"
	},
	{
		title: "Type",
		dataIndex: "type",
		key: "type"
	},
	{
		title: "Default",
		key: "default",
		dataIndex: "default"
	}
]

const text = ref<string>("https://www.youtube.com/watch?v=TasYtAcUcHA")
const size = ref<string | number>(160)

const data = computed((): Record<string, any>[] => {
	return [
		{
			key: "1",
			property: "data",
			value: text,
			type: "string",
			default: "-"
		},
		{
			key: "2",
			property: "size",
			value: size,
			type: "number",
			default: "-"
		}
	]
})
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/base/variables.styl"
.base
	width 100%
	display flex
	flex-direction column

	&__title
		font-size 30px
		color black

	&__component
		width 100%
		margin-top 20px
		background-color $color-text-inversion
		border-radius $border-radius
		padding 20px

	&__code
		margin-top 20px
		width 600px

	& .ant-table-wrapper
		margin-top 50px
</style>
