<template>
	<div class="ui-qr-code">
		<canvas ref="canvas"></canvas>
	</div>
</template>
<script lang="ts">
export default {
	name: "ui-qr-code"
}
</script>
<script setup lang="ts">
import { ref, defineProps, onMounted, watchEffect } from "vue"
import QRCode from "qrcode"

// Types
type Props = {
	data: string
	size?: number | string
}

const props = defineProps<Props>()
const canvas = ref(null)

const generateQr = () => {
	props.data &&
		QRCode.toCanvas(
			canvas.value,
			props.data,
			{
				width: props.size,
				margin: 5
			},
			onError
		)
}

const onError = (error: string) => {
	error && console.warn(error)
}

onMounted(generateQr)
watchEffect(generateQr)
</script>

<style lang="stylus" scoped>
@import "../../assets/styles/base/variables.styl"

.ui-qr-code
	display inline-flex
	border-radius $border-radius
	background-color #ffffff
	overflow hidden
</style>
