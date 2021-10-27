// vue.config.js 是一个可选的配置文件，如果项目的 (和 package.json 同级的) 根目录中存在这个文件，
// 参考配置文档： https://cli.vuejs.org/zh/config/#%E5%85%A8%E5%B1%80-cli-%E9%85%8D%E7%BD%AE

const path = require('path');
function resolve(dir) {
    // __dirname指当前目录
    return path.join(__dirname, dir)
}
// 它会被 @vue/cli-service 自动加载
module.exports = {
    lintOnSave: true, // 去掉eslint检查
    // 配置基本路径
    publicPath: './',

    configureWebpack: config => {
        return {
            resolve: {
                // 设置别名
                alias: {
                    '@src': resolve('src'),
                    '@assets': resolve('src/assets'),
                    '@utils': resolve('src/utils'),
                    '@components': resolve('src/components'),
                }
            }
        }
    }

}