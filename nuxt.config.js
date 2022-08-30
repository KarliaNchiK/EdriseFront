export default {
  head: {
    mode: 'universal',
    titleTemplate: '%s',
    title: 'Edrise',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fira+Mono&family=IBM+Plex+Mono:wght@500;700&family=Mulish:wght@700&family=Poppins:wght@600&display=swap&family=Raleway:wght@400;500&display=swap",
      },
    ],
    // script: [
    //   {
    //     src:
    //       'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver',
    //     body: true
    //   }
    // ]
  },

  server: {
    host: process.env.NODE_ENV == 'development' ? "0.0.0.0" : "",
    port: 3000,
  },

  telemetry: false,

  css: [
    "~/assets/main.scss"
  ],

  plugins: [
    { src: "~/plugins/observer.js", ssr: false }
  ],

  static: {

  },

  components: false,

  buildModules: [
    '@nuxtjs/vuetify'
  ],

  modules: [
    '@nuxtjs/axios'
  ],

  vuetify: {
    optionsPath: "~/plugins/option.vuetify.js"
  },

  router: {
    middleware: ["mobile"],
  },

  buildDir: '.nuxt',
  build: {
    publicPath: '.nuxt/'
  }
}
