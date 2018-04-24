const path = require("path");

module.exports = function (env, options) {
    const isProduction = options.mode === "production";
    const config = {
        context: path.resolve(__dirname, "src"),

        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js", ".jsx"]
        },

        entry: "./index.js",

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
};
