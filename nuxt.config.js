import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - bike-rental',
    title: 'bike-rental',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/localStorage.js',ssr: false },
    { src: "~/plugins/google-maps.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  apollo: {
    cookieAttributes: {
      expires: 7,
    },
    includeNodeModules: true,
    authenticationType: "Bearer",
    errorHandler: "~/plugins/apollo-error-handler.js",
    clientConfigs: {
      default: "~/apollo/clientConfig.js",
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: 'bike-rental',
      author: 'salunaalavi',
    },
    manifest: {
      lang: 'en',
      name: 'bike-rental',
      description: 'bike-rental - a vue.js frontend project by @salunaalavi',
      useWebmanifestExtension: false,
      start_url: '/',
      theme_color: '#FF6666',
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: '#5B85AA',
          accent: colors.grey.darken3,
          secondary: '#21D19F',
          info: '#6BA368',
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
    treeShake: true,
    defaultAssets: {
      font: {
        family: 'Josefin Sans'
      },
    },
  },

  sitemap: {
    async routes() {
      const routes = []
      const fetcher = require('node-fetch')
      const { gql } = require('apollo-boost')
      const ApolloBoost = require('apollo-boost')
      const ApolloClient = ApolloBoost.default
      const client = new ApolloClient({
        fetch: fetcher,
        uri: 'https://bike-station.hasura.app/v1/graphql',
      })

      const GET_USERS = gql`
        query {
          users {
            id
            username
          }
        }
      `
      
      const GET_STATIONS = gql`
        query {
          stations {
            id
            name
          }
        }
      `

      const users = await client.query({
        query: GET_USERS,
      })

      const stations = await client.query({
        query: GET_STATIONS,
      })

      users.data.users.forEach(user => {
        routes.push(`/users/${user.id}`)
      })

      stations.data.stations.forEach(station => {
        routes.push(`/stations/${station.id}`)
      })

      return routes
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
