<template>
  <span
    :class="['nuxt-svg-icon', descriptorClass]"
    :style="[styleVars]"
    v-html="icon"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect, computed } from '#imports'

const props = withDefaults(
  defineProps<{
    name: string
    fontSize?: string | number
    size?: string | number
    fill?: string
    color?: string
    stroke?: string
    fillOpacity?: string
    strokeOpacity?: string
    strokeWidth?: string
    useOriginSize?: boolean
  }>(),
  {
    fontSize: undefined,
    size: undefined,
    fill: undefined,
    color: undefined,
    stroke: undefined,
    fillOpacity: undefined,
    strokeOpacity: undefined,
    strokeWidth: undefined,
    useOriginSize: false,
  }
)

const descriptorClass = computed(() => {
  return {
    'use-origin-width': props.useOriginSize,
    'use-origin-height': props.useOriginSize,
  }
})

const finalFontSize = computed(() => props.fontSize || props.size)
const finalFill = computed(() => props.fill || props.color)

const styleVars = computed(() => {
  const fontSizeCssVar =
    typeof finalFontSize.value === 'number'
      ? `${finalFontSize.value}px`
      : props.fontSize

  return {
    '--svg-icon-font-size': fontSizeCssVar,
    '--svg-icon-fill': finalFill.value,
    '--svg-icon-stroke': props.stroke,
    '--svg-icon-fill-opacity': props.fillOpacity,
    '--svg-icon-stroke-opacity': props.strokeOpacity,
    '--svg-icon-stroke-width': props.strokeWidth,
  }
})

const icon = ref('')

watchEffect(async () => {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      import: 'default',
      eager: false,
      query: {
        raw: '',
      },
    })

    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()

    icon.value = rawIcon as unknown as string
  } catch {
    console.error(
      `[nuxt-svg-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    )
  }
})
</script>

<style>
.nuxt-svg-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.nuxt-svg-icon svg {
  font-size: var(--svg-icon-font-size) !important;
  fill: var(--svg-icon-fill) !important;
  stroke: var(--svg-icon-stroke) !important;
  fill-opacity: var(--svg-icon-fill-opacity) !important;
  stroke-opacity: var(--svg-icon-stroke-opacity) !important;
  stroke-width: var(--svg-icon-stroke-width) !important;
}

.use-origin-width svg {
  width: var(--svg-origin-width--with-unit) !important;
}

.use-origin-height svg {
  height: var(--svg-origin-height--with-unit) !important;
}
</style>
