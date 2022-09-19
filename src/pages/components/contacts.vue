<template>
	<div class="doc">
		<p class="doc__title">Ui-contacts</p>
		<div class="doc__component">
			<ui-contacts :data="dataProp" />
		</div>

		<component-code
			name="ui-contacts"
			:componentProperties="{
				data: dataProp
			}"
		/>

		<a-table :columns="columns" :data-source="data" :pagination="false">
			<template #bodyCell="{ column, record }">
				<props-columns :column="column" :record="record" />
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
import { ref } from "vue"

// Components
import uiContacts from "@/components/ui-kit/ui-contacts.vue"

// Hooks
import useDocs from "@/hooks/docs"
const { columns } = useDocs()

// Types
import type { Docs, UiContacts } from "@/types"

// Props
const dataProp = ref<UiContacts.Data>([
	{
		contact: "Anatoly Semenov",
		name: "Username"
	},
	{
		contact: "+79999999999",
		name: "Mobile phone"
	},
	{
		contact: "+79999999999",
		name: "Direct phone"
	},
	{
		contact: "email@gmail.com",
		name: "E-mail"
	},
	{
		contact: "google.com",
		name: "Website"
	}
])

const data: Docs.Data = [
	{
		key: "1",
		property: "data",
		type: "Array",
		default: "[]"
	}
]
</script>
