<template>
  <div>
    <h3>Iconfont svg demo</h3>

    <ul>
      <li>
        Icon with fill and font-size:
        <VueLogo fill="green" font-size="36" />
      </li>

      <li>Icon with font-size: <VueLogoFilled font-size="50" /></li>
    </ul>

    <h3>Other svg demo</h3>

    <ul>
      <li>
        Icon with fill and font-size:
        <FireIcon fill="red" font-size="36" />
      </li>
    </ul>

    <h3>nuxt-svg-icon demo</h3>

    <ul>
      <li>
        Icon with font-size: <NuxtSvgIcon name="javascript" :font-size="36" />
      </li>
      <li>Icon with fill: <NuxtSvgIcon name="notused" fill="red" /></li>

      <li>
        <div>use origin svg size, And set fill , fill-opacity:</div>
        <NuxtSvgIcon
          name="path-in-g-fill-monochrome"
          :use-origin-size="true"
          fill="gold"
          fill-opacity=".5"
        />
      </li>

      <li>
        <div>stroke-width:</div>
        <NuxtSvgIcon
          name="line"
          use-origin-size
          fill="red"
          stroke="blue"
          stroke-width="4"
        />
      </li>
    </ul>

    <h3>With ?component query string</h3>

    <ul>
      <li>
        <div>
          The path to be included by the g element and use origin svg width,
          height:
        </div>
        <PathInGFillMonochrome
          fill="red"
          fill-opacity=".5"
          style="
            width: var(--svg-origin-width);
            height: var(--svg-origin-height);
          "
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { ref } from '#imports'

import FireIcon from '~/assets/icons/fire.svg?component'
import VueLogo from '~/assets/icons/iconfont/vue-logo.svg?component'
import VueLogoFilled from '~/assets/icons/iconfont/vue-logo-filled.svg?component'
import PathInGFillMonochrome from '~/assets/icons/path-in-g-fill-monochrome.svg?component'
</script>
