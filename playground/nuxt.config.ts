import { defineNuxtConfig } from 'nuxt/config'
import NuxtSvgIcons from '../src/module'

export default defineNuxtConfig({
  modules: [NuxtSvgIcons],
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
  // vite: {
  //   server: {
  //     hmr: {
  //       port: 3001,
  //       clientPort: 3001,
  //     },
  //   },
  // },
})
