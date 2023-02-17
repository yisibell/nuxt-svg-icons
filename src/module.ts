import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {
  // dir: string
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-svg-icons',
    configKey: 'nuxtSvgIcons',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  setup () {
    const { resolve } = createResolver(import.meta.url)
    addComponent({
      name: 'nuxt-svg-icon',
      global: true,
      filePath: resolve('./runtime/components/nuxt-svg-icon.vue')
    })
  }
})
