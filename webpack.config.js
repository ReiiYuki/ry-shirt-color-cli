const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'src/index.ts'),
    target: 'node',
    mode: 'production',
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: 'awesome-typescript-loader'
            },
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [".ts", ".js"]
    }
}