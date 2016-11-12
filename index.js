require("./app/app.js");

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
                    plugins: ['transform-runtime'],
                    presets: ['stage-0', "react", "es2015-node5"],
                }
            },
            {test: /\.css$/, loader: "style-loader!css-loader"},
        ]
    }

