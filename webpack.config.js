var path = require("path");
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin')

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: process.env.NODE_ENV === 'production' ?  [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/assets'),
                to: 'dist/assets',
                ignore: ['.png']
            }
        ]),
    ] : []
};

module.exports = config;