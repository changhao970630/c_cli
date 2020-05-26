const { smart } = require("webpack-merge");
const mainConfig = require("./webpack.config");
module.exports = smart(mainConfig, {
  mode: "production",
});
