<template>
	<div class="installation">
		<a-typography-title>Установка</a-typography-title>

		<a-typography-title :level="3">Шаг 1</a-typography-title>
		<a-typography-paragraph>
			Установка пакетов
			<a-tag>@anatoly-dev</a-tag>
		</a-typography-paragraph>
		<a-typography-paragraph>
			<blockquote>
				Нужно добавить эти зависимости в
				<a-tag>package.json</a-tag>
			</blockquote>
			<pre>{{ packages.uiKit }}</pre>
		</a-typography-paragraph>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	name: "page-installation",
	data() {
		return {
			packages: {
				uiKit: `"@anatoly-dev/frontend-ui-kit": "git+ssh://git@github.org:anatoly-dev/frontend-ui-kit.git#develop"`
			}
		}
	}
})
</script>

<style lang="stylus" scoped>
.installation
  width 100%
  display flex
  flex-direction column
</style>
