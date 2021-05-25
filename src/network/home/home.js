/*
 * @Author: your name
 * @Date: 2021-05-07 16:40:33
 * @LastEditTime: 2021-05-09 22:25:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\network\home\home.js
 */
import {request} from "../request"

export function getHomeMultidata(){
    //request返回的是一个请求后的promise对象
    return request({
        url:'/home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'/home/data',
        params:{
           type,
           page
        }
    })
}

