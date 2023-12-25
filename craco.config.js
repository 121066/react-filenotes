const path = require('path')
const cracoSassResourcesLoader = require('craco-sass-resources-loader')
module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    plugins: [
        {
            plugin: cracoSassResourcesLoader,
            options: {
                resources: path.resolve(__dirname, 'src/style/index.scss'),
            },
        },
    ],
}
