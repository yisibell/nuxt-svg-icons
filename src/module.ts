import { defineNuxtModule, addVitePlugin, createResolver, addComponent } from '@nuxt/kit'
import { svg4VuePlugin, Svg4VuePluginOptions } from 'vite-plugin-svg4vue'

export interface ModuleOptions  {
  svg4vue?: Svg4VuePluginOptions
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-svg-icons',
    configKey: 'nuxtSvgIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    svg4vue: {
      assetsDirName: 'assets/icons'
    }
  },
  setup (moduleOptions) {
    const { resolve } = createResolver(import.meta.url)

    addVitePlugin(svg4VuePlugin(moduleOptions.svg4vue))

    addComponent({
      name: 'nuxt-svg-icon',
      global: true,
      filePath: resolve('./runtime/components/nuxt-svg-icon.vue')
    })
  }
})
