const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    const isProduction = env.mode === "production";
    const config = {
        context: path.resolve(__dirname, "src"),

        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx"]
        },

        entry: "./index.jsx",

        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, "dist")
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: "Task2",
                hash: true,
                template: path.resolve(__dirname, "./index.html")
            })
        ],

        watch: true

    }
    return config;
};
