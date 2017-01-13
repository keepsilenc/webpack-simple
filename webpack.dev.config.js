module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/, loader: 'vue'
            },
            {
                test: /\.(jpe?g|png|gif|svg|mp3)$/,
                loader: "url",
                query: {
                    name: 'images/[name].[ext]',
                    limit: 1000
                }
            },
            {
                test: /\.css$/,
                loader: "vue-style!css!postcss"
            },
            {
                test: /\.less$/,
                loader: "vue-style!css!less"
            },
             {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    vue: {
        loaders: {
            css: "vue-style!css",
            less: "vue-style!css!less",
            scss: "vue-style!css!sass",
            stylus: "vue-style!css!stylus"
        }
    }
    
}
