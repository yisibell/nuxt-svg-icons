# nuxt-svg-icons

> A module for Nuxt 3 that allows you to use your own SVG icons quickly and enjoyably powerd by <a href="https://github.com/yisibell/vite-plugin-svg4vue" target="_blank">vite-plugin-svg4vue</a>.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- see <a href="https://github.com/yisibell/vite-plugin-svg4vue#features" target="_blank">**vite-plugin-svg4vue** 's Features</a>.

## Quick Setup

1. Add `nuxt-svg-icons` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-svg-icons

# Using yarn
yarn add --dev nuxt-svg-icons

# Using npm
npm install --save-dev nuxt-svg-icons
```

2. Add `nuxt-svg-icons` to the `modules` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  modules: [
    'nuxt-svg-icons'
    // use inline options
    // [
    //   'nuxt-svg-icons',
    //   {
    //     svg4vue: { assetsDirName: 'assets/icons' }
    //   }
    // ]
  ],
  // custom nuxt-svg-icons options
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons'
    }
  }
})
```

3. Put your svg icons in `~/assets/icons` folder.

4. Import your svg icon as a **Vue Component**.

``` vue
<template>
  <div>
    <VueLogo fill="green" font-size="36" />
    <VueLogoFilled font-size="50" />
  </div>
</template>

<script setup lang="ts">
import VueLogo from '~/assets/icons/iconfont/vue-logo.svg?component'
import VueLogoFilled from '~/assets/icons/iconfont/vue-logo-filled.svg?component'
</script>
```

If you are using TypeScript, `nuxt-svg-icons/client` can be added to `d.ts` declaration file.

``` ts
/// <reference types="nuxt-svg-icons/client" />
```

That's it! You can now use **nuxt-svg-icons** in your Nuxt app ✨

## Options

see <a href="https://github.com/yisibell/vite-plugin-svg4vue#options">**vite-plugin-svg4vue** 's Options</a>.

## Development

```bash
# Install dependencies
yarn install

# Generate type stubs
npm run dev:prepare

# Develop with the playground
npm run dev

# Build the playground
npm run dev:build

# Run ESLint
npm run lint

# Run Vitest
npm run test
npm run test:watch

# Release new version
npm run release
```
