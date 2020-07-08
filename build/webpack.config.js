
const path = require('path');

module.exports = {

    entry: './examples/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../lib'),
        // publicPath:path.resolve(__dirname, './lib')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    devServer: {
        port: 8000,
        host: 'localhost',
        hot: true,
        contentBase: path.resolve(__dirname, '../examples')
    }
}