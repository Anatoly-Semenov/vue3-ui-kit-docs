<template>
	<div class="colors">
		<a-typography-title>Цветовая палитра</a-typography-title>
		<div class="colors__block">
			<div class="colors__block-header">
				<a-typography-title :level="4">Dark theme</a-typography-title>
			</div>
			<div class="colors__block-list">
				<div
					class="colors__item"
					v-for="({ name, value }, index) in colors"
					:key="index"
				>
					<p class="colors__color-name">
						<a-tag>
							{{ name }}
						</a-tag>
					</p>
					<div class="colors__color" :style="`background-color: ${value}`" />
					<p class="colors__color-value">{{ value }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Types
interface ColorItem {
	name: string
	value: string
}

// Components
import ATag from "ant-design-vue/lib/tag"

const colors: ColorItem[] = [
	{ name: "--color-ui", value: "#465EFD" },
	{ name: "--color-ui-hover", value: "#557AFF" },
	{ name: "--color-ui-active", value: "#324DFE" },
	{ name: "--color-ui-focus", value: "#6486FF" },
	{ name: "--color-text", value: "#FFFFFF" },
	{ name: "--color-text-secondary", value: "#979798" },
	{ name: "--color-text-third", value: "#DADADA" },
	{ name: "--color-text-inversion", value: "#333333" },
	{ name: "--color-text-disabled", value: "#656565" },
	{ name: "--color-border", value: "#979798" },
	{ name: "--color-border-ui", value: "#6486FF" },
	{ name: "--color-border-disabled", value: "#B9B9B9" },
	{ name: "--color-border-inversion", value: "#FFFFFF" },
	{ name: "--color-background", value: "#181818" },
	{ name: "--color-background-secondary", value: "#323336" },
	{ name: "--color-background-third", value: "#45484F" },
	{ name: "--color-background-inversion", value: "#FAFBFD" },
	{ name: "--color-background-disabled", value: "#B9B9B9" },
	{ name: "--color-background-invisible-10", value: "#FFFFFF10" },
	{ name: "--color-background-invisible-15", value: "#FFFFFF15" },
	{ name: "--color-background-invisible-20", value: "#FFFFFF20" },
	{ name: "--color-error", value: "#FF8469" },
	{ name: "--color-error-hover", value: "#FF8970" },
	{ name: "--color-error-active", value: "#FF7354" },
	{ name: "--color-success", value: "#4AD295" },
	{ name: "--color-success-hover", value: "#49EDA3" },
	{ name: "--color-success-active", value: "#18E88B" },
	{ name: "--color-warning", value: "#FFB758" },
	{ name: "--color-warning-hover", value: "#FFAC3F" },
	{ name: "--color-warning-active", value: "#FFAD42" },
	{ name: "--color-warning-focus", value: "#FFBB61" }
]
</script>

<style lang="stylus" scoped>
.colors
  &, &__block
    display flex
    flex-direction column
    justify-content flex-start
    align-items flex-start

  &__block
    padding 20px
    border-radius 20px
    border 1px solid #000000

    &-header
      width calc(100% + 40px)
      padding 0 20px
      border-bottom 1px solid #000000
      margin-right -20px
      margin-left -20px
      margin-bottom 20px

  &__item
    display flex
    align-items center

    &:not(:first-child)
      margin-top 10px

  &__color
    height 30px
    width 30px
    margin 0 20px
    border-radius 100px
    border 1px solid #000000

    &-name
      width 215px

      & .ant-tag
        font-size 15px
</style>
