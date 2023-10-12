import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
})
