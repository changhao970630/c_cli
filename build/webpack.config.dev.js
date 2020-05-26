const path = require("path");
const { smart } = require("webpack-merge"); //引入插件
const mainConfig = require("./webpack.config"); //将公共配置文件导入
module.exports = smart(mainConfig, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 8899,
    open: true,
  },
});
