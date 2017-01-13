var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.(jpe?g|png|gif|svg|mp3)$/,
            loader: "url",
            query: {
                name: 'images/[name].[ext]',
                limit: 1000 
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("css!postcss")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("css!postcss!less")
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("css/style.css"),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin()
        
    ],
    vue: {
        loaders: {
            css: ExtractTextPlugin.extract("css"),
            less: ExtractTextPlugin.extract("css!less"),
        },
        postcss: [require("cssnano")]
    },
    postcss: [require("cssnano"),
        require('autoprefixer')
    ]
}
