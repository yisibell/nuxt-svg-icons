<p align="center">
  <a href="https://www.npmjs.org/package/nuxt-svg-icons">
    <img src="https://img.shields.io/npm/v/nuxt-svg-icons.svg">
  </a>
  <a href="https://npmcharts.com/compare/nuxt-svg-icons?minimal=true">
    <img src="https://img.shields.io/npm/dm/nuxt-svg-icons.svg">
  </a>
  <br>
</p>

# nuxt-svg-icons

> A module for Nuxt 3 that allows you to use your own SVG icons quickly and enjoyably powered by <a href="https://github.com/yisibell/vite-plugin-svg4vue" target="_blank">vite-plugin-svg4vue</a>.

- [✨ &nbsp;Release Notes](/CHANGELOG.md)
<!-- - [📖 &nbsp;Documentation](https://example.com) -->

## Features

- Multiple ways of use.
- Support Optimize svg via **SVGO**.
- Support using svg as a **component**, **url** and **raw** with query string.
- HMR (You don't have to reset the project to reload the icons)
- Ability to manipulate icons. e.g. using `font-size` , `fill` , `stroke` , `fill-opacity`, `stroke-width` and `stroke-opacity`.
- Icon only loads if used.
- Support <a href="https://www.iconfont.cn/"> Iconfont svg icons </a>


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
/// <reference types="nuxt-svg-icons/client.d.ts" />
```

That's it! You can now use **nuxt-svg-icons** in your Nuxt app ✨

> TIPS: All svg will be processed by <a href="https://github.com/yisibell/vite-plugin-svg4vue" target="_blank">vite-plugin-svg4vue</a>. More build details please see its self!!!

## About the global component `nuxt-svg-icon`

### Component properties

| Prop name | Default value | Required | Description | Type |
| :---: | :---: | :---: | :---: | :---: |
| `name` | `undefined` | `true` | The value will be based on its own path directory and filename | `string` |
| `fontSize` | `undefined` | `false` | The SVG font size. In fact, for the svg node, **vite-plugin-svg4vue** will set the `width` value to `font-size`, remove svg `height` and set `width` to `1em`, so that the svg size will be responsive and you can manipulate it's size with `font-size` | `string` or `number` |
| `size` | `undefined` | `false` | Alias of `fontSize` | `string` or `number` |
| `fill` | `undefined` | `false` | Define the SVG `fill` value. In terms of internal implementation, **vite-plugin-svg4vue** will move all **path** 's `fill` attribute to its parent node which is `svg` node when your svg is a **monochrome** icon | `string` |
| `color` | `undefined` | `false` | Alias of `fill` | `string` |
| `stroke` | `undefined` | `false` | Define the SVG stroke value. This allows you to change the color of **outline svg** which is created by `stroke` attribute. In terms of internal implementation, **vite-plugin-svg4vue** will move all **path** 's `stroke` attribute to its parent node which is `svg` node when your svg is a **monochrome** icon | `string` |
| `fillOpacity` | `undefined` | `false` | The svg' s `fill-opacity` | `string` |
| `strokeOpacity` | `undefined` | `false` | The svg' s `stroke-opacity` | `string` |
| `strokeWidth` | `undefined` | `false` | The svg' s `stroke-width` | `string` |
| `useOriginalSize` | `false` | `false` | Whether to use the svg original `width` and `height` | `boolean` |
| `showLoading` | `false` | `false` | Whether to enable loading placeholder | `boolean` |
| `loadingClass` | - | `false` | Add a custom loading class name | `string` |
| `eager` | `false` | `false` | Import SVG icon as static or dynamic | `boolean` |


In the project, use `<nuxt-svg-icon name="" />`, where name is the name of your svg icon from the folder `~/assets/icons`

```html
<nuxt-svg-icon name="foo" /> 
```

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

```vue
<nuxt-svg-icon name="admin/badge" /> and <nuxt-svg-icon name="user/badge" />
```

### Slots

- loading

You can customize the display content during loading via `loading` slot. This helps improve the **CLS**.

```html
<nuxt-svg-icon
  name="some-icon"
  size="60px"
  show-loading
>
  <template #loading>
    <img
      src="~/assets/images/loading/lazyload_240_240.png"
      alt=""
      width="100%"
    >
  </template>
</nuxt-svg-icon>
```


## Options

| Key | Default value | Description |
| :---: | :---: | :---: |
| `svg4vue`| `{ assetsDirName: 'assets/icons' }` | <a href="https://github.com/yisibell/vite-plugin-svg4vue#options">**vite-plugin-svg4vue** 's Options</a> |
| `enableNuxtSvgIconComponent` | `true` | Whether to enable `nuxt-svg-icon` component, if set `false`, The global component `nuxt-svg-icon` will not be registered |

## Development

```bash
# Install dependencies
pnpm install

# Generate type stubs
pnpm dev:prepare

# Develop with the playground
pnpm dev

# Build the playground
pnpm dev:build

# Run ESLint
pnpm lint

# Run Vitest
pnpm test
pnpm test:watch

# Release new version
npm run release
```
