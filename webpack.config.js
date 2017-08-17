const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "css/style.css",
    disable: process.env.NODE_ENV === "development"
});


module.exports = {
    entry: ["./src/js/main.js", "./src/sass/main.sass"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/bundle.js",

    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src/js")
                ],
                loader: "babel-loader",

            },
            {
                test: /\.sass$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: { url: false }
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }]
    },
    plugins: [
        extractSass
    ]
};