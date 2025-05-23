import { fileURLToPath } from 'node:url'
import {
  defineNuxtModule,
  addVitePlugin,
  createResolver,
  addComponent,
} from '@nuxt/kit'
import { svg4VuePlugin } from 'vite-plugin-svg4vue'
import type { Svg4VuePluginOptions } from 'vite-plugin-svg4vue'

export interface ModuleOptions {
  svg4vue?: Svg4VuePluginOptions
  enableNuxtSvgIconComponent?: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-svg-icons',
    configKey: 'nuxtSvgIcons',
    compatibility: {
      nuxt: '^3.0.0',
    },
  },
  defaults: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
    enableNuxtSvgIconComponent: true,
  },
  setup(moduleOptions, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    nuxt.options.build.transpile.push(runtimeDir)

    addVitePlugin(svg4VuePlugin(moduleOptions.svg4vue))

    if (moduleOptions.enableNuxtSvgIconComponent) {
      addComponent({
        name: 'nuxt-svg-icon',
        global: true,
        filePath: resolve('./runtime/components/nuxt-svg-icon.vue'),
      })
    }
  },
})
