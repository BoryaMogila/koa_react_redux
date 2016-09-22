'use strict';

const webpack       = require('webpack'),
    config        = require('config'),
    NODE_ENV      = process.env.NODE_ENV || 'development',
    isDevelopment = NODE_ENV === 'development',
    CompressionPlugin = require("compression-webpack-plugin"),
    WebpackShellPlugin = require('webpack-shell-plugin');

var  plugins = [
    //не створювати файл у вихідній директорії якщо при компіляції виникли помилки
    new webpack.NoErrorsPlugin(),
    //робить доступними Environment variables на клієнті так само як на ноді
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    //експортить константи
    new webpack.DefinePlugin({
        //змінна, яка буде вирізати небезпечні данні з бандла, який відправляється на клієнт
        cutCode: JSON.stringify(true)
    }),
    new webpack.optimize.CommonsChunkPlugin({
        children: true,
        async: true,
    }),
];
var babelPlugins = ['transform-runtime'];
if(!isDevelopment){
    babelPlugins = babelPlugins.concat([
        'transform-react-remove-prop-types',
        'transform-react-constant-elements',
        'transform-react-inline-elements'
    ]);
    //мінімізує яваскріпти
    plugins.push(new webpack.optimize.DedupePlugin());
    //мінімізує яваскріпти
    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        // Eliminate comments
        comments: false,
        compress: {
            sequences     : true,
            booleans      : true,
            loops         : true,
            unused      : true,
            warnings    : false,
            //drop_console: true,
            unsafe      : true
        }
    }));
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
    }));
    plugins.push(new WebpackShellPlugin({
        onBuildStart:['echo "Webpack Start"'],
        onBuildEnd:[`'echo "Webpack End"'`]
    }));
}

const wpConfig = {
    //точки входу. З них починається аналіз коду
    entry       : ['./src/index.js'],
    output      : {
        //путь куди ложити збілджені файли
        path      : __dirname + '/public/js/',
        //путь звідки завантажувати чанки
        publicPath: `${config.js_domain}/js/`,
        //назва основного файла білда
        filename  : `bundle.js`,
        chunkFilename: 'chunks/[chunkhash].js'
    },
    //при запуску вебпака він буде слідкувати за змінами і автоматично перезбирати скріпти. Тільки для девелопмента.
    watch       : isDevelopment,
    watchOptions: {
        //запускати перезбірку через 100 мс після збереження файла. Default 300
        aggregateTimeout: 100
    },
    module      : {
        loaders: [
            {
                //транспілить яваскіпт для старих браузерів
                loader : 'babel',
                //не аналізує код в node_modules. Там код вже затранспілений. Пришвидшує зборку.
                exclude: /node_modules/,
                query: {
                    plugins: babelPlugins,
                    presets: ['es2015', 'stage-0', 'react'],
                }
            },
            {
                test: /\.css$/, loader: "style-loader!css-loader"
            },
        ]
    },
    //правила пошуку фалів при require або import
    resolve     : {
        // require('some_file_name') => require('some_file_name.(js|jsx)')
        extensions: ['', '.js', '.jsx']
    },
    //http://webpack.github.io/docs/configuration.html#devtool
    devtool     : isDevelopment ? 'eval-source-map' : null,
    plugins,
    externals   : {config: require('config')}
};

module.exports = wpConfig;