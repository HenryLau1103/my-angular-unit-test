var webpack = require("webpack");

var config = {
    cache: true,
    devtool: "source-map",
    entry: {
        "bundle": [__dirname + "/app/main.ts"],
        "bundle-vendors": [
            "core-js",
            "zone.js",
            "rxjs",
            "@angular/core",
            "@angular/common",
            "@angular/compiler",
            "@angular/platform-browser",
            "@angular/platform-browser-dynamic",
            "@angular/http",
            "@angular/router",
            "@angular/forms"
        ]
    },
    output: {
        path: __dirname + "/js",
        filename: "[name].js",
        sourceMapFilename: "[name].map"
    },
    resolve: {
        extensions: [".ts", ".js", ".html"]
    },
    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: [
                    "awesome-typescript-loader",
                    "angular2-template-loader"
                ],
                exclude: /(node_modules)/
            },
            {
                test: /\.html$/,
                loader: "raw-loader"
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            __dirname + "/app"
        )
    ]
};

if (process.env.NODE_ENV === "production") {
    config.devtool = false;
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    config.plugins.push(new webpack.optimize.CommonsChunkPlugin({
        name: "bundle-vendors"
    }));
}

module.exports = config;