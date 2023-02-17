import { defineNuxtConfig } from 'nuxt/config'
import NuxtSvgIcons from '../src/module'

export default defineNuxtConfig({
  modules: [
    NuxtSvgIcons
    // [NuxtSvgIcons, { assetsDirName: 'assets/icons' }]
  ],
  nuxtSvgIcons: {
    assetsDirName: 'assets/icons'
  }
})
