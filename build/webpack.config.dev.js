const path = require("path");
const { smart } = require("webpack-merge"); //引入插件
const mainConfig = require("./webpack.config"); //将公共配置文件导入
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const config = require("./config");
module.exports = smart(mainConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: config.port,
    open: false,
    historyApiFallback: true,
    overlay: true,
    quiet: true,
  },
  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Success🚀服务器运行在http://localhost:${config.port}`],
        clearConsole: true,
      },
    }),
  ],
});
