
const { resolve, join } = require('path');

const rootDir = resolve(__dirname, '..');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: join(rootDir, 'dist')
    },
}