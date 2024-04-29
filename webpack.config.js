const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
    plugins: [new CompressionPlugin()],
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'tw-better-select.min.js',
        library: {
            name: 'TwBetterSelect',
            type: 'umd',
            export: 'default',
            umdNamedDefine: true,
        },
    },
}
