//  vue 配置项
// 引入等比适配插件
const px2rem = require("postcss-px2rem")

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16,
})
module.exports = {
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  outputDir:
    process.env.NODE_ENV === "production" ? "./production_dist" : "./dev_dist", // 正式包：测试包，方便区分
  assetsDir: "static",
  indexPath: "index.html",
  devServer: {
    host: "0.0.0.0",
    port: 8686,
  },
}
