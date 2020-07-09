
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {

    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../lib'),
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}