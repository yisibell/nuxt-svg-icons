import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import { svg4VuePlugin } from 'vite-plugin-svg4vue'

describe('vite-plugin-svg4vue v5 integration', () => {
  it('transforms an icon imported with the raw query', async () => {
    const iconPath = resolve(
      'test/fixtures/basic/assets/icons/check.svg',
    )
    const source = await readFile(iconPath, 'utf8')
    const plugin = svg4VuePlugin({
      assetsDirName: 'assets/icons',
    })

    const result = await plugin.transform(`${source}\n`, `${iconPath}?raw`)
    const code = typeof result === 'string' ? result : result?.code

    expect(code).toContain('export default')
    expect(code).toContain('<svg')
    expect(code).toContain('<path')
    expect(code).toContain('--svg-origin-width:16')
    expect(code).toContain('--svg-origin-height:16')
  })
})
