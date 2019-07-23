const path = require('path'),
    paths = {
        source: path.join(__dirname, 'src'),
        distribution: path.join(__dirname, 'dist'),
    },
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    cssnano = require('cssnano')(),
    autoprefixer = require('autoprefixer')

module.exports = {

    entry: {
        app: paths.source + '/js/app.js'
    },

    output: {
        path: paths.distribution,
        filename: 'js/bundle.js'
    },

    devServer: {
        open: true,
        overlay: true,
        port: 7000,
    },

    devtool: 'sourcemap',

    resolve: {
        extensions: ['.js', '.json', '*'],
    },

    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,

                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(sc|sa)ss$/,
                use: [{
                        loader: 'style-loader',
                    },
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [autoprefixer, cssnano],
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require("sass"),
                            sourceMap: true
                        }
                    },
                ],
            },
            {
                test: /\.(jpg|png)$/,
                use: [{
                        loader: 'file-loader',
                        options: {
                            name: 'images/[name].[ext]',
                        },
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 100,
                            },
                            pngquant: {
                                speed: 4,
                            },
                        },
                    },
                ],
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: paths.source + '/index.html',
            favicon: paths.source + '/favicon.png',
        }),
        new MiniCssExtractPlugin({
            filename: 'css/app.css',
        }),
    ]
}