<template>
  <div>
    <ul>
      <li>
        Icon with fill and font-size   
        <FireIcon
          fill="red"
          font-size="36"
        />
      </li>
    </ul>

    <h3>iconfont svg demo</h3>

    <ul>
      <li>
        Icon with fill and font-size 
        <VueLogo
          fill="green"
          font-size="36"
        />
      </li>

      <li>Icon with font-szie <VueLogoFilled font-size="50" /> </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// import { ref } from '#imports'

import FireIcon from '~/assets/icons/fire.svg?component'
import VueLogo from '~/assets/icons/iconfont/vue-logo.svg?component'
import VueLogoFilled from '~/assets/icons/iconfont/vue-logo-filled.svg?component'

</script>

<style>
.colored {
  color: orange;
}
</style>
