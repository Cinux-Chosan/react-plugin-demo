const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve, join } = require('path');
const package = require('../package');

const rootDir = resolve(__dirname, '..');
const appDir = join(rootDir, 'test/app/');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', join(appDir, 'index.js')],
    output: {
        filename: '[name].[hash].js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: join(rootDir, 'dist'),
        // publicPath: '/assets/',
        // openPage: 'assets/',
        // writeToDisk: true,
        hot: true,
        open: true, // or set MacOS 'Google Chrome', Windows 'Chrome'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: join(appDir, 'index.html'),
            title: package.name
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}