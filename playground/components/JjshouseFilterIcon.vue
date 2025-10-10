<template>
  <div class="">
    <span
      style="font-size: 60px;"
      v-html="Icon"
    />
    <NuxtSvgIcon
      name="filter/strapssleeves/hover/long_sleeve"
      size="60px"
      show-loading
      @mounted="handleWhenAsyncIconMounted"
    >
      <template #loading>
        <img
          src="~/assets/images/loading/lazyload_240_240.png"
          alt=""
          width="100%"
        >
      </template>
    </NuxtSvgIcon>
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
    console.log('async svg icon mounted!!!')
  }
}
</script>
