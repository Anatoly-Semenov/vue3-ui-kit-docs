<template>
	<div class="doc">
		<p class="doc__title">Ui-modal</p>
		<div class="doc__component">
			<ui-button @click="visible = true">Open Modal</ui-button>
			<ui-modal
				:title="title"
				:visible="visible"
				:okText="okText"
				:cancelText="cancelText"
				:okDisabled="okDisabled"
				:cancelDisabled="cancelDisabled"
				:okType="okType"
				:width="Number(width)"
				:centered="centered"
				:isFooter="isFooter"
				:isFooterCustom="isFooterCustom"
				:confirmLoading="confirmLoading"
				:disableHeader="disableHeader"
				:closable="closable"
				:bodyStyle="bodyStyle"
				:dialogStyle="dialogStyle"
				:isTransparentContent="isTransparentContent"
				:colorCloseIcon="colorCloseIcon"
				:isMaxHeight="isMaxHeight"
				:isFullScreen="isFullScreen"
				:destroyOnClose="destroyOnClose"
				@cancel:visible="visible = false"
				@ok:visible="visible = false"
			>
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
				ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
				dis parturient montes, nascetur ridiculus mus. Donec quam felis,
				ultricies nec, pellentesque eu, pretium quis, sem.
			</ui-modal>
		</div>

		<component-code
			name="ui-modal"
			:componentProperties="{
				title,
				visible,
				okText,
				cancelText,
				okDisabled,
				cancelDisabled,
				okType,
				width,
				centered,
				isFooter,
				isFooterCustom,
				confirmLoading,
				disableHeader,
				closable,
				bodyStyle,
				dialogStyle,
				isTransparentContent,
				colorCloseIcon,
				isMaxHeight,
				isFullScreen,
				destroyOnClose
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'okType'"
						v-model:value="okType"
						style="width: 200px"
						:options="okTypeValues.map((value) => ({ value: value }))"
					/>

					<a-input
						v-if="record.property === 'width'"
						v-model:value="width"
						type="number"
						style="width: 200px"
					/>

					<a-input
						v-if="record.property === 'colorCloseIcon'"
						v-model:value="colorCloseIcon"
						type="color"
						style="width: 200px"
					/>

					<a-input
						v-if="record.property === 'title'"
						v-model:value="title"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'okText'"
						v-model:value="okText"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'cancelText'"
						v-model:value="cancelText"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'colorCloseIcon'"
						v-model:value="colorCloseIcon"
						style="width: 200px"
					/>

					<a-switch
						v-if="record.property === 'visible'"
						v-model:checked="visible"
					/>
					<a-switch
						v-if="record.property === 'okDisabled'"
						v-model:checked="okDisabled"
					/>
					<a-switch
						v-if="record.property === 'cancelDisabled'"
						v-model:checked="cancelDisabled"
					/>
					<a-switch
						v-if="record.property === 'centered'"
						v-model:checked="centered"
					/>
					<a-switch
						v-if="record.property === 'isFooter'"
						v-model:checked="isFooter"
					/>
					<a-switch
						v-if="record.property === 'isFooterCustom'"
						v-model:checked="isFooterCustom"
					/>
					<a-switch
						v-if="record.property === 'confirmLoading'"
						v-model:checked="confirmLoading"
					/>
					<a-switch
						v-if="record.property === 'disableHeader'"
						v-model:checked="disableHeader"
					/>
					<a-switch
						v-if="record.property === 'closable'"
						v-model:checked="closable"
					/>
					<a-switch
						v-if="record.property === 'isTransparentContent'"
						v-model:checked="isTransparentContent"
					/>
					<a-switch
						v-if="record.property === 'isMaxHeight'"
						v-model:checked="isMaxHeight"
					/>
					<a-switch
						v-if="record.property === 'isFullScreen'"
						v-model:checked="isFullScreen"
					/>
					<a-switch
						v-if="record.property === 'destroyOnClose'"
						v-model:checked="destroyOnClose"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiModal from "@/components/ui-kit/ui-modal.vue"
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import type { Docs, UiModal } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

const data: Docs.Data = [
	{
		key: "1",
		property: "title",
		type: "string",
		default: "-"
	},
	{
		key: "2",
		property: "visible",
		type: "boolean",
		default: "false"
	},
	{
		key: "3",
		property: "okText",
		type: "string",
		default: "-"
	},
	{
		key: "4",
		property: "cancelText",
		type: "string",
		default: "-"
	},
	{
		key: "5",
		property: "okDisabled",
		type: "boolean",
		default: "false"
	},
	{
		key: "6",
		property: "cancelDisabled",
		type: "boolean",
		default: "false"
	},
	{
		key: "7",
		property: "okType",
		type: "string",
		default: "primary"
	},
	{
		key: "8",
		property: "width",
		type: "number",
		default: "-"
	},
	{
		key: "9",
		property: "centered",
		type: "boolean",
		default: "false"
	},
	{
		key: "10",
		property: "isFooter",
		type: "boolean",
		default: "true"
	},
	{
		key: "21",
		property: "isFooterCustom",
		type: "boolean",
		default: "false"
	},
	{
		key: "11",
		property: "confirmLoading",
		type: "boolean",
		default: "false"
	},
	{
		key: "12",
		property: "disableHeader",
		type: "boolean",
		default: "false"
	},
	{
		key: "13",
		property: "closable",
		type: "boolean",
		default: "true"
	},
	{
		key: "14",
		property: "bodyStyle",
		type: "object",
		default: "-"
	},
	{
		key: "15",
		property: "dialogStyle",
		type: "object",
		default: "-"
	},
	{
		key: "16",
		property: "isTransparentContent",
		type: "boolean",
		default: "false"
	},
	{
		key: "17",
		property: "colorCloseIcon",
		type: "string",
		default: "''"
	},
	{
		key: "18",
		property: "isMaxHeight",
		type: "boolean",
		default: "false"
	},
	{
		key: "19",
		property: "isFullScreen",
		type: "boolean",
		default: "false"
	},
	{
		key: "20",
		property: "destroyOnClose",
		type: "boolean",
		default: "true"
	}
]

// Props
const title = ref<string>("Title")
const visible = ref<boolean>(false)
const okText = ref<string>("Ok")
const cancelText = ref<string>("Cancel")
const okDisabled = ref<boolean>(false)
const cancelDisabled = ref<boolean>(false)
const okType = ref<UiModal.ButtonType>("primary")
const okTypeValues = ref<UiModal.ButtonType[]>([
	"primary",
	"ghost",
	"dashed",
	"danger",
	"link",
	"default"
])
const width = ref<number>(600)
const centered = ref<boolean>(false)
const isFooter = ref<boolean>(true)
const isFooterCustom = ref<boolean>(false)
const confirmLoading = ref<boolean>(false)
const disableHeader = ref<boolean>(false)
const closable = ref<boolean>(true)
const bodyStyle = ref<any>({})
const dialogStyle = ref<any>({})
const isTransparentContent = ref<boolean>(false)
const colorCloseIcon = ref<string>("")
const isMaxHeight = ref<boolean>(false)
const isFullScreen = ref<boolean>(false)
const destroyOnClose = ref<boolean>(true)
</script>
