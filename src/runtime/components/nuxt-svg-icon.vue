<template>
  <span
    :class="['nuxt-svg-icon', descriptorClass]"
    :style="[styleVars]"
    v-html="icon"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect, computed, nextTick } from '#imports'

const props = withDefaults(defineProps<{
  name: string
  fontSize?: string | number
  size?: string | number
  fill?: string
  color?: string
  stroke?: string
  fillOpacity?: string
  strokeOpacity?: string
  strokeWidth?: string
  useOriginalSize?: boolean
}>(), {})

const emit = defineEmits<{
  mounted: []
}>()

const finalFontSize = computed(() => props.fontSize || props.size)
const finalFill = computed(() => props.fill || props.color)

const customColor = computed(() => !!finalFill.value)
const customStroke = computed(() => !!props.stroke)
const customSize = computed(() => !!finalFontSize.value)

const descriptorClass = computed(() => {
  return {
    'use-original-width': props.useOriginalSize,
    'use-original-height': props.useOriginalSize,
    'custom-color': customColor.value,
    'custom-stroke': customStroke.value,
    'custom-size': customSize.value,
    'custom-fill-opacity': !!props.fillOpacity,
    'custom-stroke-opacity': !!props.strokeOpacity,
    'custom-stroke-width': !!props.strokeWidth,
  }
})

const styleVars = computed(() => {
  const fontSizeCssVar
    = typeof finalFontSize.value === 'number'
      ? `${finalFontSize.value}px`
      : finalFontSize.value

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
        raw: true,
      },
    })

    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()

    icon.value = rawIcon as unknown as string

    await nextTick()

    emit('mounted')
  }
  catch {
    console.error(
      `[nuxt-svg-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`,
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

.nuxt-svg-icon.custom-color svg {
  fill: var(--svg-icon-fill) !important;
}

.nuxt-svg-icon.custom-stroke svg {
  stroke: var(--svg-icon-stroke) !important;
}

.nuxt-svg-icon.custom-size svg {
  font-size: var(--svg-icon-font-size) !important;
}

.nuxt-svg-icon.custom-fill-opacity svg {
  fill-opacity: var(--svg-icon-fill-opacity) !important;
}

.nuxt-svg-icon.custom-stroke-opacity svg {
  stroke-opacity: var(--svg-icon-stroke-opacity) !important;
}

.nuxt-svg-icon.custom-stroke-width svg {
  stroke-width: var(--svg-icon-stroke-width) !important;
}

.use-original-width svg {
  width: var(--svg-origin-width--with-unit) !important;
}

.use-original-height svg {
  height: var(--svg-origin-height--with-unit) !important;
}
</style>
