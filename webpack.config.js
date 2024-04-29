const path = require('path')
module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        library: {
            name: 'TwBetterSelect',
            type: 'umd',
            export: 'default',
            umdNamedDefine: true,
        },
    },
}
