<template>
	<div class="doc">
		<p class="doc__title">Ui-stories</p>
		<div class="doc__component">
			<ui-button @click="isStories = true">Open stories</ui-button>
			<ui-stories
				v-if="isStories"
				:stories="items"
				:duration="duration"
				:currentIndex="currentIndex"
				:showInnerContent="isStories"
				@closeStories="isStories = false"
			/>
		</div>

		<component-code
			name="ui-stories"
			:componentProperties="{
				stories,
				duration,
				currentIndex,
				showInnerContent
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record">
					<a-switch
						v-if="record.property === 'showInnerContent'"
						v-model:checked="showInnerContent"
					/>
					<a-switch
						v-if="record.property === 'showOuterContent'"
						v-model:checked="showOuterContent"
					/>

					<a-input
						v-if="record.property === 'duration'"
						v-model:value="duration"
						type="number"
						style="width: 200px"
					/>
					<a-input
						v-if="record.property === 'currentIndex'"
						v-model:value="currentIndex"
						type="number"
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
import uiStories from "@/components/ui-kit/ui-stories.vue"
import uiButton from "@/components/ui-kit/ui-button.vue"

// Types
import type { Docs, UiStory } from "@/types"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Props
const isStories = ref<boolean>(false)
const duration = ref<number>(3000)
const currentIndex = ref<number>(3000)
const showInnerContent = ref<boolean>(false)
const showOuterContent = ref<boolean>(false)

const data: Docs.Data = [
	{
		key: "1",
		property: "stories",
		type: "Array",
		default: "-"
	},
	{
		key: "2",
		property: "duration",
		type: "number",
		default: "3000"
	},
	{
		key: "3",
		property: "currentIndex",
		type: "number",
		default: "0"
	},
	{
		key: "4",
		property: "showInnerContent",
		type: "boolean",
		default: "false"
	},
	{
		key: "5",
		property: "showOuterContent",
		type: "boolean",
		default: "false"
	}
]

const items = computed((): UiStory.Item[] => {
	return [
		{
			username: "Anatoly Semenov",
			picture:
				"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
			time: "12h",
			images: [
				{
					url: "https://randomwordgenerator.com/img/picture-generator/57e7d4414d51a814f1dc8460962e33791c3ad6e04e50744172287cd09e49cd_640.jpg",
					viewed: true
				},
				{
					url: "https://randomwordgenerator.com/img/picture-generator/55e4d5474350b10ff3d8992cc12c30771037dbf852547849712a73d5954d_640.jpg",
					viewed: true
				},
				{
					url: "https://randomwordgenerator.com/img/picture-generator/54e2d3414950a914f1dc8460962e33791c3ad6e04e5074417d2e72d29e4ecd_640.jpg",
					viewed: false
				},
				{
					url: "https://cdn.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Metal_Wind_Chimes_at_Sunset_preview.mp4",
					viewed: false,
					type: "video"
				}
			]
		}
	]
})
</script>
