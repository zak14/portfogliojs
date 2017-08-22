const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ["./src/js/main.js", "./src/sass/main.sass"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src/js")
                ],
                loader: "babel-loader",
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/styles.css"),
    ]
}