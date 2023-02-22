module.exports = {
    apps: [
        {
            name: 'NeedToReplace',
            exec_mode: 'cluster',
            instances: 2,
            script: './node_modules/nuxt/bin/nuxt.js',
            max_memory_restart: '1G',
            args: 'start',
        },
    ],
}
