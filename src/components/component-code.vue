<template>
	<code-highlight class="doc__code" language="html" :key="code">
		{{ code }}
	</code-highlight>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref } from "vue"

// Components
import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue"

export default defineComponent({
	name: "component-code",
	components: {
		CodeHighlight
	},
	props: {
		name: {
			type: String,
			required: true
		},
		componentSlot: {
			type: String,
			required: false
		},
		componentProperties: {
			type: Object,
			default: () => ({})
		}
	},
	setup(props) {
		const code = ref<string>("")

		const generateCode = (): string => {
			const properties = Object.keys(props.componentProperties)
				.reduce((result, key) => {
					const value: any = props.componentProperties[key]

					switch (typeof value) {
						case "boolean":
							return [...result, value ? key : ""]
						case "object":
							return [...result, `:${key}="Object"`]
						case "number":
							return [...result, value ? `:${key}="${value}"` : ""]
						default:
							return [...result, value ? `${key}="${value}"` : ""]
					}
				}, [] as string[])
				.filter((item) => !!item)

			let codeReady = `<${[props.name, ...properties].join("\n  ")}`

			if (properties.length) {
				codeReady += "\n"
			}

			if (props.componentSlot) {
				codeReady += `>${props.componentSlot}</${props.name}>`
			} else {
				codeReady += "/>"
			}

			return codeReady
		}

		code.value = generateCode()

		watchEffect(() => {
			code.value = generateCode()
		})

		return { code }
	}
})
</script>
