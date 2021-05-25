/*
 * @Author: your name
 * @Date: 2021-04-26 22:52:06
 * @LastEditTime: 2021-05-10 17:19:05
 * @LastEditors: Please set LastEditors
 * @Description: 配置文件夹别名
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\vue.config.js
 */
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: false,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
            .set('common',resolve('src/common'))
            .set('network',resolve('src/network'))
            .set('views',resolve('src/views'))
    }
}

