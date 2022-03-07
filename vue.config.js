//  vue 配置项
module.exports = ({
    outputDir: process.env.NODE_ENV === 'production' ? './production_dist' : './dev_dist',// 正式包：测试包，方便区分
    assetsDir:'static',
    indexPath:'index.html',
    devServer:{
        host:'0.0.0.0',
        port:8686,
    }
})