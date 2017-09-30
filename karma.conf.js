var webpackConfig = require("./webpack.config.js");
webpackConfig.devtool = "cheap-module-eval-source-map"

module.exports = function (config) {
    var _config = {
        frameworks: ["jasmine"],
        mime: {
            "text/x-typescript": ["ts"]
        },
        files: ["app/main.test.ts"],
        preprocessors: {
            "app/main.test.ts": ["webpack"]
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
            stats: "errors-only"
        },

        reporters: ["progress", "kjhtml"],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ["Chrome"],
        singleRun: false
    };

    config.set(_config);
};