module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config', 'prettier', 'plugin:prettier/recommended'],
  plugins: ['prettier'],
  rules: {
    'vue/no-v-html': 0,
  },
}
