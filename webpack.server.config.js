var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

var babelPlugins = ['transform-runtime'];

module.exports = {
    entry: './index.js',
    target: 'node',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'backend.js'
    },
    module      : {
        loaders: [
            {
                loader : 'babel',
                exclude: /node_modules/,
                query: {
                    plugins: babelPlugins,
                    presets: ['stage-0', "react", "es2015-node6"],
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
        ]
    },
    externals: nodeModules,
    plugins: [
        new webpack.IgnorePlugin(/\.(css|less)$/),
        new webpack.BannerPlugin('require("source-map-support").install();',
            { raw: true, entryOnly: false })
    ],
    devtool: 'sourcemap'
}