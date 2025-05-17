module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'vuetify', // Add eslint-config-vuetify for Vuetify-specific rules
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
};
