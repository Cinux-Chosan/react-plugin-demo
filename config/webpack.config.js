const { resolve, join } = require('path');
const devConfig = require('./webpack.config.dev');
const prodConfig = require('./webpack.config.prod');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootDir = resolve(__dirname, '..');

const baseConfig = {
    entry: './index.js',
    output: {
        path: join(rootDir, 'dist'),
        filename: 'index.js',
        library: 'ReactPluginDemo',
        libraryTarget: 'umd'
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            root: rootDir
        }),
    ],
    resolve: {
        alias: {
            components: join(rootDir, 'src/components/')
        }
    }
}

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
        return { ...baseConfig, ...devConfig }
    }

    if (argv.mode === 'production') {
        return { ...baseConfig, ...prodConfig }
    }

    return baseConfig;
};