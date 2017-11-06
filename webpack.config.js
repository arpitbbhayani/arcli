const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const path = require('path');
const env = require('yargs').argv.env;
const nodeExternals = require('webpack-node-externals');

let libraryName = 'arcli';

let plugins = [], outputFile;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = libraryName + '.min.js';
} else {
    outputFile = libraryName + '.js';
}

const config = {
    externals: [nodeExternals()],
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/lib',
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /(\.js)$/,
                loader: 'babel-loader',
            },
            {
                test: /(\.js)$/,
                loader: 'eslint-loader',
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.js']
    },
    plugins: plugins
};

module.exports = config;
