export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  colorMode: {
    preference: 'synthwave', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },
});
