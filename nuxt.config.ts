// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/icons/fontawesome/css/all.min.css',
    '~/assets/scss/main.scss',
  ],
  $production: {
    routeRules: {
      '/**': { isr: true }
    }
  },
  $development: {
    //
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@element-plus/nuxt',
  ],
  elementPlus: {
    // 
  },
  devtools: { enabled: true }
})
