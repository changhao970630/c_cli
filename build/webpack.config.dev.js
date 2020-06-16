const { smart } = require("webpack-merge"); //引入插件
const mainConfig = require("./webpack.config"); //将公共配置文件导入
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const os = require("os")
const net = new os.networkInterfaces()
console.log(net.en5[1].address)
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
    proxy: {
      '/api': {
        target: 'http://v.juhe.cn/',
        changeOrigin: true,  //是否跨域
        pathRewrite: {
          '^/api': ''   //重写接口
        }
      }
    }
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
            `Success🚀服务器运行在http://localhost:${config.port}`,
          // `http://${net.en5[1].address}:${config.port}`
        ],
        clearConsole: true,
      },
    }),
  ],
});
