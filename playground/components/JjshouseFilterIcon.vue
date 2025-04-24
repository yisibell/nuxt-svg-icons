<template>
  <div class="">
    <span
      style="font-size: 60px;"
      v-html="Icon"
    />
    <NuxtSvgIcon
      name="filter/strapssleeves/hover/long_sleeve"
      size="60px"
       @mounted="handleWhenAsyncIconMounted"
    />
    <NuxtSvgIcon
      name="filter/strapssleeves/selected/long_sleeve"
      size="60px"
      @mounted="handleWhenAsyncIconMounted"
    />
  </div>
</template>

<script lang="ts" setup>
import Icon from '@/assets/icons/filter/strapssleeves/hover/long_sleeve.svg?raw'

const handleWhenAsyncIconMounted = () => {
  if (import.meta.client) {
    console.log('async svg icon mounted!!!');
  }
}
</script>
