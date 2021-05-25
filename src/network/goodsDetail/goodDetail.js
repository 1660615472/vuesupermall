/*
 * @Author: your name
 * @Date: 2021-05-19 20:47:55
 * @LastEditTime: 2021-05-24 17:18:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\network\goodsDetail\goodDetail.js
 */

import {request} from "../request"

export function getGoodDetail(iid){
    return request({
        url:'/detail',
        params:{
            iid
        }
    })
}

export function getRecommend(){
    return request({
        url:'/recommend'
    })    
}