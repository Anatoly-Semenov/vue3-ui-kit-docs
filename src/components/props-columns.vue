<template>
	<p v-if="column.key === 'property'">{{ record.property }}</p>
	<template v-if="column.key === 'value'">
		<slot />
	</template>
	<template v-if="column.key === 'type'">
		<a-tag color="red">{{ record.type }}</a-tag>
	</template>
	<template v-if="column.key === 'default'">
		<a-tag v-if="record.default">{{ record.default }}</a-tag>
		<p v-else>-</p>
	</template>
</template>

<script setup lang="ts">
import { defineProps } from "vue"

interface Props {
	column: {
		key: string
	}

	record: {
		default: string
	}
}

const props = defineProps<Props>()
</script>
