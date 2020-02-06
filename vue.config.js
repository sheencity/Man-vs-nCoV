module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    externals: {
      BMap: "BMap"
    }
  }
};
