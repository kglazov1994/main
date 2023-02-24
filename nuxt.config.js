export default {
    server: {
        port: 3333,
    },
    // create .env file for variables
    publicRuntimeConfig: {
        // public vars [this.$config.apiUrl]
        // apiUrl: process.env.API_URL || 'http://localhost:3001',
    },
    privateRuntimeConfig: {
        // private vars
        // only in asyncData and fetch
        // asyncData ({ $config: { baseURL } }) {...
        // apiSecret: process.env.API_SECRET,
    },
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'boilerplate',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '@splidejs/splide/dist/css/themes/splide-default.min.css',
        '~/assets/less/reset.css',
        '~/assets/less/fonts.less',
        '~/assets/less/main.less',
        '~/assets/less/sections.less',
    ],

    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        { src: '~/plugins/global.js' },
        { src: '~/plugins/splide.js', mode: 'client' },
        { src: '~/plugins/v-click-outside.js' },
        { src: '~/plugins/vue-perfect-scrollbar.js' },
        { src: '~/plugins/v-body-scroll-lock.js', mode: 'client' },
        { src: '~/plugins/persistedState.client.js', mode: 'client' },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/stylelint
        '@nuxtjs/stylelint-module',
        '@nuxtjs/style-resources',
        '@nuxtjs/device',
        '@nuxtjs/composition-api/module',
    ],
    styleResources: {
        less: '~/assets/less/vars.less',
    },
    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/svg-sprite',
        '@nuxtjs/sitemap',
    ],
    sitemap: {
        path: '/sitemap.xml',
        // change also in ./static/robots.txt
        hostname: 'https://example.site',
        gzip: true,
    },
    svgSprite: {
        input: '~/assets/icons/',
    },
    // Axios module configuration (https://go.nuxtjs.dev/config-axios)
    axios: {
        baseURL: process.env.API_URL || 'http://localhost:3000',
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {},
}
