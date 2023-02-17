import { defineNuxtModule, addVitePlugin } from '@nuxt/kit'
import { svg4VuePlugin, Svg4VuePluginOptions } from 'vite-plugin-svg4vue'

export interface ModuleOptions extends Svg4VuePluginOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-svg-icons',
    configKey: 'nuxtSvgIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  setup () {
    addVitePlugin(svg4VuePlugin({
      assetsDirName: 'assets/icons'
    }))
  }
})
