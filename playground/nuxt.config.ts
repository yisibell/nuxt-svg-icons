import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],

  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },

  compatibilityDate: '2024-12-30',
})