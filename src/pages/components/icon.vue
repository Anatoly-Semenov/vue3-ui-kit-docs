<template>
	<div class="doc">
		<p class="doc__title">Ui-icon</p>
		<div class="doc__component _dark">
			<ui-icon :name="name" :size="size" :hasHover="hasHover" />
		</div>

		<component-code
			name="ui-icon"
			:componentProperties="{
				name,
				size,
				hasHover
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-select
						v-if="record.property === 'name'"
						v-model:value="name"
						style="width: 200px"
						:options="nameValues.map((value) => ({ value: value }))"
					/>
					<a-select
						v-if="record.property === 'size'"
						v-model:value="size"
						style="width: 200px"
						:options="sizeValues.map((value) => ({ value: value }))"
					/>
					<a-switch
						v-if="record.property === 'hasHover'"
						v-model:checked="hasHover"
					/>
				</props-columns>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiIcon from "@/components/ui-kit/ui-icon.vue"

// Types
import type { UiIcon } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
import type { Docs } from "@/types"
const { columns } = useDocs()

// Props
const name = ref<UiIcon.Name>("copy")
const nameValues = ref<UiIcon.Name[]>([
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

const size = ref<UiIcon.Size>("s")
const sizeValues = ref<UiIcon.Size[]>(["s", "m", "l"])

const hasHover = ref<boolean>(false)

const data: Docs.Data = [
	{
		key: "1",
		property: "name",
		type: "string",
		default: "link"
	},
	{
		key: "2",
		property: "size",
		type: "string | number",
		default: "s"
	},
	{
		key: "3",
		property: "hasHover",
		type: "boolean",
		default: "false"
	}
]
</script>
