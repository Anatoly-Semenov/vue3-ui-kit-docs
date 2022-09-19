<template>
	<div class="doc">
		<p class="doc__title">Ui-button-icon</p>
		<div class="doc__component _dark">
			<ui-button-icon
				:loading="loading"
				:disabled="disabled"
				:type="type"
				:size="size"
				:iconName="iconName"
			/>
		</div>

		<component-code
			name="ui-button-icon"
			:componentProperties="{
				loading,
				type,
				size,
				iconName
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'iconName'"
						v-model:value="iconName"
						style="width: 200px"
						:options="iconNameValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'type'"
						v-model:value="type"
						style="width: 200px"
						:options="typeValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>

					<a-switch
						v-if="record.property === 'loading'"
						v-model:checked="loading"
					/>
					<a-switch
						v-if="record.property === 'disabled'"
						v-model:checked="disabled"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiButtonIcon from "@/components/ui-kit/ui-button-icon.vue"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Types
import type { Docs, UiButtonIcon } from "@/types"

// data
const data: Docs.Data = [
	{
		key: "1",
		property: "iconName",
		type: "string",
		default: "alert-circle"
	},
	{
		key: "2",
		property: "type",
		type: "string",
		default: "icon"
	},
	{
		key: "3",
		property: "size",
		type: "string",
		default: "m"
	},
	{
		key: "4",
		property: "loading",
		type: "boolean",
		default: "false"
	},
	{
		key: "5",
		property: "disabled",
		type: "boolean",
		default: "false"
	}
]

// Props
const loading = ref<boolean>(false)
const disabled = ref<boolean>(false)

const type = ref<UiButtonIcon.Type>("icon")
const typeValues = ref<UiButtonIcon.Type[]>([
	"dark",
	"icon",
	"icon-dark",
	"primary",
	"ghost"
])

const size = ref<UiButtonIcon.Size>("m")
const sizeValues = ref<UiButtonIcon.Size[]>(["s", "m", "l"])

const iconName = ref<UiButtonIcon.IconName>("copy")
const iconNameValues = ref<UiButtonIcon.IconName[]>([
	"alert-circle",
	"alert-triangle",
	"arrow-left",
	"arrow-right",
	"atom",
	"bell",
	"bell-no",
	"book",
	"calendar-dates",
	"camera",
	"check-mark",
	"check-marks",
	"chevron-bottom",
	"chevron-left",
	"chevron-right",
	"chevron-top",
	"circle-checked",
	"circle-minus",
	"circle-plus",
	"circle-x",
	"coffee",
	"compas",
	"copy",
	"loading",
	"download",
	"download-bold",
	"external-link",
	"eye",
	"eye-no",
	"filter",
	"flag",
	"flame",
	"gift",
	"glasses",
	"heart",
	"heart-no",
	"home",
	"icecream",
	"image",
	"info",
	"key",
	"laughing",
	"layers",
	"lightbulb",
	"lightning",
	"lightning-no",
	"line",
	"link",
	"link-no",
	"lock",
	"mail",
	"map",
	"map-pin-location",
	"maximize",
	"menu",
	"mic",
	"mic-no",
	"minimize",
	"minus",
	"more-horizontal",
	"more-vertical",
	"neutral",
	"newspaper",
	"nut",
	"options",
	"paperclip",
	"pencil-create",
	"pin",
	"planet",
	"plus",
	"pocket",
	"printer",
	"qr",
	"question-circle",
	"refresh-ccw",
	"refresh-cw",
	"rocket",
	"rotate-ccw",
	"rotate-cw",
	"sad",
	"search",
	"send",
	"settings",
	"share",
	"share-arrow",
	"shield",
	"shield-ok",
	"shocked",
	"smiled",
	"star",
	"star-no",
	"sticker",
	"thumbs-down",
	"thumbs-up",
	"time",
	"toy-horse",
	"trash",
	"trash-empty",
	"unlock",
	"user",
	"video",
	"video-no",
	"watch",
	"wi-fi",
	"wi-fi-no",
	"x",
	"zoom-in",
	"zoom-out"
])
</script>
