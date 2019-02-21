const { resolve } = require('path');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');
const config = {
    entry: './index.js',
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return { ...config, ...devConfig }
    }

    if (argv.mode === 'production') {
        return { ...config, ...prodConfig }
    }

    return config;
};