module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    extends: ['@nuxtjs', 'prettier', 'prettier/vue', 'plugin:prettier/recommended', 'plugin:nuxt/recommended'],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                endOfLine: 'auto',
                code: 120,
                printWidth: 120,
            },
            { usePrettierrc: true },
        ],
    },
}
