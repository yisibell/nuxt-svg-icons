<template>
  <span
    class="nuxt-svg-icon"
    :class="{ 'nuxt-svg-icon--fill': !filled }"
    v-html="icon"
  />
</template>

<script setup lang="ts">
import { ref, watchEffect } from '#imports'

const props = withDefaults(defineProps<{
  name: string;
  filled?: boolean
}>(), { filled: false })

const icon = ref('')

watchEffect(async () => {
  try {
    const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
      as: 'raw',
      eager: false
    })
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()

    // TODO: handle with svgo
   
    icon.value = rawIcon as unknown as string

  } catch {
    console.error(
      `[nuxt-svg-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`
    )
  }
})
</script>

<style>
.nuxt-svg-icon svg {
  width: 1em;
  height: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
.nuxt-svg-icon.nuxt-svg-icon--fill,
.nuxt-svg-icon.nuxt-svg-icon--fill * {
  fill: currentColor !important;
}
</style>
