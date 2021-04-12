const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index.js",
        clean: true,
    },

    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 5000,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader','css-loader'],
                generator: {

                }

            },

            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    }
}