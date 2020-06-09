const path = require("path");
const htmlwebpackplugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
// const Dashboard = require("webpack-dashboard");
// const DashboardPlugin = require("webpack-dashboard/plugin");
// const dashboard = new Dashboard();
module.exports = {
    entry: path.resolve("src/main.js"),
    output: {
        path: path.resolve("dist"),
        filename: "bundle[hash:3].js",
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            //规定大小，小于规定大小使用url-loader,
                            limit: 1000,
                            outputPath: "image", //配置资源文件夹
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        exclude: /node_modules/,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'less-loader']
                })
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                //这一个loader当然是vue项目必须的加载器啦，不加其他规则的话，
                //简单的这样引入就可以了，vue-loader会把vue单文件直接转成js。
            },
        ],
    },
    plugins: [
        new htmlwebpackplugin({
            template: path.resolve("public/index.html"),
            favicon: path.resolve("public/favicon.ico"),
        }),
        new CleanWebpackPlugin({path: path.resolve("dist")}),
        new VueLoaderPlugin(),
        new ExtractTextPlugin('style/style.css')
        // new DashboardPlugin(dashboard.setData),
    ],
    resolve: {
        //引入路径是不用写对应的后缀名
        extensions: [".js", ".vue", ".json"],
        //缩写扩展
        alias: {
            //正在使用的是vue的运行时版本，而此版本中的编译器时不可用的，我们需要把它切换成运行时 + 编译的版本
            vue$: "vue/dist/vue.esm.js", // 'vue/dist/vue.common.js' for webpack 1
            //用@直接指引到src目录下，如：'./src/main'可以写成、'@/main'
            "@": path.resolve("src"),
        },
    },
};
