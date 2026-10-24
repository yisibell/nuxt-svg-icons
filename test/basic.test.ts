import { describe, it, expect } from 'vitest'
import { fileURLToPath } from 'node:url'
import { setup, $fetch } from '@nuxt/test-utils'

describe('ssr', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('./fixtures/basic', import.meta.url)),
  })

  it('renders the index page', async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch('/')

    expect(html).toContain('<div>basic</div>')
    expect(html).toContain('class="nuxt-svg-icon custom-color custom-stroke custom-size custom-fill-opacity custom-stroke-width"')
    expect(html).toContain('--svg-icon-font-size:24')
    expect(html).toContain('--svg-icon-fill:red')
  })
})
