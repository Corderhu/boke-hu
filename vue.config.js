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
        plugins: [postcss],
      },
    },
  },
  // 正式包：测试包，方便区分
  outputDir:
    process.env.NODE_ENV === "production" ? "./production_dist" : "./dev_dist",
  assetsDir: "static",
  indexPath: "index.html",
  devServer: {
    host: "0.0.0.0",
    port: 8686,
    disableHostCheck: true,
    https: false, //是否https
    
    //显示警告和错误
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      "/api/getIp": {
        target: "http://pv.sohu.com",
        changeOrigin: true,
        pathRewrite:{
          '^/api/getIp':'/cityjson?ie=utf-8/'
        }
      },
      // "/api/user":{
      //   target:"http:192.168.0.102:8886"
      // }
    },
  },
}
