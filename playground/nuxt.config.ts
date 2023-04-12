import { defineNuxtConfig } from 'nuxt/config'
import NuxtSvgIcons from '../src/module'

export default defineNuxtConfig({
  modules: [NuxtSvgIcons],
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
})
