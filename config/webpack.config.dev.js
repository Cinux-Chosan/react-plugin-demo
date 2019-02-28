const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');

const rootDir = resolve(__dirname, '..');
const appDir = join(rootDir, 'test/app/');

module.exports = {
    mode: 'development',
    entry: join(appDir, 'index.js'),
    output: {
        filename: '[name].[hash].js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: join(rootDir, 'dist'),
        hot: true,
        open: 'Chrome',
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
}