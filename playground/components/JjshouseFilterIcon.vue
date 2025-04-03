<template>
  <div class="">
    <span
      style="font-size: 60px;"
      v-html="Icon"
    />
    <NuxtSvgIcon
      name="filter/strapssleeves/hover/long_sleeve"
      size="60px"
    />
    <NuxtSvgIcon
      name="filter/strapssleeves/selected/long_sleeve"
      size="60px"
    />
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/assets/icons/filter/strapssleeves/hover/long_sleeve.svg?raw'
</script>
