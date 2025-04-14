import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['../src/module'],

  devtools: {
    enabled: false,
  },

  sourcemap: false,

  compatibilityDate: '2024-12-30',

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('assets/icons/filter/backstyle')) {
              return 'svgicons.chunk.filter.backstyle'
            }

            if (id.includes('assets/icons/filter/child_backstyle')) {
              return 'svgicons.chunk.filter.child_backstyle'
            }

            if (id.includes('assets/icons/filter/child_length')) {
              return 'svgicons.chunk.filter.child_length'
            }

            if (id.includes('assets/icons/filter/child_neckline')) {
              return 'svgicons.chunk.filter.child_neckline'
            }

            if (id.includes('assets/icons/filter/child_silhouette')) {
              return 'svgicons.chunk.filter.child_silhouette'
            }

            if (id.includes('assets/icons/filter/child_strapssleeves')) {
              return 'svgicons.chunk.filter.child_strapssleeves'
            }

            if (id.includes('assets/icons/filter/length')) {
              return 'svgicons.chunk.filter.length'
            }

            if (id.includes('assets/icons/filter/neckline')) {
              return 'svgicons.chunk.filter.neckline'
            }

            if (id.includes('assets/icons/filter/silhouette')) {
              return 'svgicons.chunk.filter.silhouette'
            }

            if (id.includes('assets/icons/filter/strapssleeves')) {
              return 'svgicons.chunk.filter.strapssleeves'
            }

            if (id.includes('assets/icons')) {
              return 'svg-icons'
            }

            return null
          },
        },
      },
    },
  },

  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: 'assets/icons',
    },
  },
})
