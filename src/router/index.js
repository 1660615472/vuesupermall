/*
 * @Author: your name
 * @Date: 2021-04-25 10:56:59
 * @LastEditTime: 2021-05-19 13:54:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//安装插件
Vue.use(VueRouter)

//创建路由对象
const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component: ()=>import('../views/home/Home')
    },
    {
        path:'/category',
        component: ()=>import('../views/category/Category')
    },
    {
        path:'/shopcart',
        component: ()=>import('../views/shopcart/Shopcart')
    },
    {
        path:'/profile',
        component: ()=>import('../views/profile/Profile')
    },
    {   //动态路由拼接路由参数
        path:'/goodDetail/:id',
        component: ()=>import('../views/goodDetail/goodDetail')
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})


export default router