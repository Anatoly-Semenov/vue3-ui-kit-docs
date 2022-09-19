<template>
	<hr
		class="ui-delimiter"
		:class="`_${type}`"
		role="separator"
		aria-orientation="horizontal"
	/>
</template>
<script lang="ts">
export default {
	name: "ui-delimiter"
}
</script>
<script setup lang="ts">
import { defineProps, PropType } from "vue"

// Types
export type Props = {
	type: "solid" | "dashed"
}

const props = defineProps({
	type: {
		type: String as PropType<Props["type"]>,
		required: true,
		default: "solid"
	}
})
</script>
<style lang="stylus">
@import "@/assets/styles/base/variables.styl"

.ui-delimiter
	border none
	border-top-style solid
	border-top-color $color-border
	border-top-width 1px

	&._dashed
		border-top-style dashed
</style>
