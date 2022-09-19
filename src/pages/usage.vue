<template>
	<div class="usage">
		<a-typography-title>Использование</a-typography-title>
		<a-typography-paragraph>
			Компоненты лежат в пакете
			<a-tag>@anatoly-dev/ui-kit</a-tag>
		</a-typography-paragraph>

		<a-typography-paragraph>
			В текущей версии, импорт компонентов будет реализововаться через прямой
			путь к компоненту
			<a-tag>@anatoly-dev/ui-kit/src/components/${component_name}</a-tag>
		</a-typography-paragraph>

		<a-typography-paragraph>
			<blockquote>
				В дальнейших версиях пакета, появится деструктуризация из корневого
				файла
			</blockquote>
		</a-typography-paragraph>

		<a-typography-title :level="3">Локальный пример</a-typography-title>
		<a-typography-paragraph>
			<pre>{{ localExample }}</pre>
		</a-typography-paragraph>

		<a-typography-title :level="3">Глобальный пример</a-typography-title>
		<a-typography-paragraph>
			<pre>{{ globalExample }}</pre>
		</a-typography-paragraph>
	</div>
</template>

<script>
export default {
	name: "page-usage",
	data() {
		return {
			templateExample: "<ui-button>Button</ui-button>",
			localExample:
				"<template>\n" +
				"  <ui-button @click='onClick' size='large' disabled>Button</ui-button>\n" +
				"</template>\n" +
				"\n" +
				"<script>\n" +
				"import { defineComponent } from 'vue'\n" +
				"\n" +
				"// Components\n" +
				"import uiButton from '@anatoly-dev/ui-kit/src/components/ui-button.vue'\n" +
				"\n" +
				"// Css\n" +
				"import '@anatoly-dev/ui-kit/dist/ui-kit.css'\n" +
				"\n" +
				"export default defineComponent({\n" +
				"  name: 'page-with-button',\n" +
				"  components: {\n" +
				"    uiButton\n" +
				"  }\n" +
				"})\n" +
				"</" +
				"script>",
			globalExample: `import { createApp } from "vue"
import App from "./App.vue"

// Components
import uiButton from "@anatoly-dev/ui-kit/src/components/ui-button.vue"

// Css
import "@anatoly-dev/ui-kit/dist/ui-kit.css"

createApp(App).component("ui-button", uiButton).mount("#app")

`
		}
	}
}
</script>

<style lang="stylus" scoped>
.usage
  width 100%
  display flex
  flex-direction column
</style>
