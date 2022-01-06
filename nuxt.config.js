export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rate and Review your past dates',
    meta: [

      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Review your past dates and exes, and help others know what to expect.'},
      {name: 'format-detection', content: 'telephone=no'},
      {name: 'twitter:description', content: 'Review your past dates and exes, and help others know what to expect.'},
      {name: 'twitter:title', content: 'Review My Ex'},
      {name: 'twitter:image', content: 'https://reviewmyex.com/review.jpeg'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png'},
      {rel: 'stylesheet', href: '/css/style.css'},
      {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true},
      {
        href: 'https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        rel: 'stylesheet'
      },
    ]
  },
  server: {port: 5000},
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api",
    "~/plugins/notification"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      sizes: [64, 120, 144, 152, 192, 512],
      fileName: 'android-chrome-512x512.png',
    },
    manifest: {
      name: 'Review My Ex',
      lang: 'en',
      short_name: 'Review My Ex',
      theme_color: '#3023AE',
      description: 'Review your past dates and exes, and help others know what to expect.',
      display: 'standalone',
      useWebmanifestExtension: false
    },
    meta: {
      ogImage: 'https://reviewmyex.com/review.jpeg',
      ogTitle: 'Review My Ex',
      ogSiteName: 'Review My Ex',
      twitterCard: 'summary_large_image',
      twitterUrl: 'https://reviewmyex.com/',
      ogHost: 'reviewmyex.com',
      ogDescription: 'Review your past dates and exes, and help others know what to expect.',
      description: 'Review your past dates and exes, and help others know what to expect.',
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
