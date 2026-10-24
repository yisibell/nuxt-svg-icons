import { describe, expect, it, vi } from 'vitest'

const addComponent = vi.fn()
const addVitePlugin = vi.fn()
const svg4VuePlugin = vi.fn((options) => ({
  name: 'svg4vue-test-plugin',
  options,
}))

vi.mock('@nuxt/kit', () => ({
  addComponent,
  addVitePlugin,
  createResolver: () => ({
    resolve: (path: string) => `/module/${path}`,
  }),
  defineNuxtModule: (definition: unknown) => definition,
}))

vi.mock('vite-plugin-svg4vue', () => ({
  svg4VuePlugin,
}))

const { default: moduleDefinition } = await import('../src/module')

describe('nuxt-svg-icons module', () => {
  it('exposes Nuxt 4.4 compatibility metadata and defaults', () => {
    expect(moduleDefinition.meta).toMatchObject({
      name: 'nuxt-svg-icons',
      configKey: 'nuxtSvgIcons',
      compatibility: {
        nuxt: '>=4.4.0 <4.5.0',
      },
    })
    expect(moduleDefinition.defaults).toEqual({
      svg4vue: {
        assetsDirName: 'assets/icons',
      },
      enableNuxtSvgIconComponent: true,
    })
  })

  it('registers the SVG plugin and global component', () => {
    moduleDefinition.setup(moduleDefinition.defaults, {
      options: {
        build: {
          transpile: [],
        },
      },
    } as never)

    expect(svg4VuePlugin).toHaveBeenCalledWith({
      assetsDirName: 'assets/icons',
    })
    expect(addVitePlugin).toHaveBeenCalledWith({
      name: 'svg4vue-test-plugin',
      options: {
        assetsDirName: 'assets/icons',
      },
    })
    expect(addComponent).toHaveBeenCalledWith({
      name: 'nuxt-svg-icon',
      global: true,
      filePath: '/module/./runtime/components/nuxt-svg-icon.vue',
    })
  })

  it('can disable the auto-registered component', () => {
    addComponent.mockClear()
    addVitePlugin.mockClear()
    svg4VuePlugin.mockClear()

    moduleDefinition.setup({
      svg4vue: {
        assetsDirName: 'custom/icons',
      },
      enableNuxtSvgIconComponent: false,
    }, {
      options: {
        build: {
          transpile: [],
        },
      },
    } as never)

    expect(svg4VuePlugin).toHaveBeenCalledWith({
      assetsDirName: 'custom/icons',
    })
    expect(addComponent).not.toHaveBeenCalled()
  })
})
