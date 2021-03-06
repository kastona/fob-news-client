export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Nuxt js UI Kit",
    title: "NuxtJs UI kit | Free UI kit built with Vuetifyy",
    htmlAttrs: {
      lang: "en"
    },
    
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/toast', mode: 'client'},
    {src: '~/plugins/social', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/auth',
    '@nuxtjs/moment',
  ],



  axios: {
    baseURL:'https://fob-news.herokuapp.com'
  },



  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {url: '/users/login', method: 'post', propertyName: 'token'},
          logout: {url: '/users/logout', method: 'post'},
          user: {url: '/users/me', method: 'get', propertyName: 'user'}
        }
      }
    }
  },


  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: false,
    options: {
      customProperties: true
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
