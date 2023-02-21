# nuxt-svg-icons

> A module for Nuxt 3 that allows you to use your own SVG icons quickly and enjoyably powerd by <a href="https://github.com/yisibell/vite-plugin-svg4vue" target="_blank">vite-plugin-svg4vue</a>.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Multiple ways of use.
- Support using svg as a **component**, **url** and **raw**.
- HMR (You don't have to reset the project to reload the icons)
- Ability to manipulate icons. e.g. using `font-szie` and `fill`
- Icon only loads if used.
- Support <a href="https://www.iconfont.cn/"> Iconfont svg icons </a>
- Support Optimize svg.

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

> TIPS: if you want to use `nuxt-svg-icon` component to display your svg icons, you must set `svg4vue.assetsDirName` to `assets/icons`.

4. Import your svg icon as a **Vue Component**.

``` vue
<template>
  <div>
    <VueLogo fill="green" font-size="36" />
    <VueLogoFilled font-size="50" />

    <!-- using nuxt-svg-icon component -->
    <NuxtSvgIcon name="path/to/file" font-size="36" fill="red" />
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

## About the component `nuxt-svg-icon`

In the project, use <nuxt-svg-icon name="">, where name is the name of your svg icon from the folder `~/assets/icons`

### Subfolders

If you would like to use some more complicated folder arrangement you will have to use paths from `~/assets/icons`

If you have a svg icon in nested directories such as:

```html
📁icons
  └📁admin
  ⠀⠀└ badge.svg
  └📁user
  ⠀⠀└ badge.svg
```

then the icons's name will be based on its own path directory and filename. Therefore, the icon's name will be:

```html
<nuxt-icon name="admin/badge"> and <nuxt-icon name="user/badge">
```

## Options

| Key | Default value | Description |
| :---: | :---: | :---: |
| `svg4vue`| `{ assetsDirName: 'assets/icons' }` | <a href="https://github.com/yisibell/vite-plugin-svg4vue#options">**vite-plugin-svg4vue** 's Options</a> |

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
