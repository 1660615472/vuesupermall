/*
 * @Author: your name
 * @Date: 2021-04-30 10:15:30
 * @LastEditTime: 2021-05-08 12:57:39
 * @LastEditors: Please set LastEditors
 * @Description: 简单封装axios
 * @FilePath: \JScoded:\JScode\axios\axiosVue\axios-vue\src\network\request.js
 */
import axios from 'axios'
//定义callback函数                          
export function request(config) {
    /*     return new Promise((resolve,reject)=>{
            const axiosInstance = axios.create({
                baseURL: 'http://192.168.0.171:8082',
                timeout:5000
            });
            //发送网络请求
            axiosInstance(config).then(res=>{
              //  console.log(res);
                //结果传入回调函数中处理，回调出去
                resolve(res)
            },err=>{
              //  console.log(err);
                //回调出去
                reject(err)
            })    
        }) */

    const axiosInstance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    });
    //config是请求头参数  
    axiosInstance.interceptors.request.use(config => {
       // console.log(config)
        //放行
        return config
    }, err => {
        console.log(err)
    })
    //发送网络请求 axios对象本身返回一个promise对象
    return axiosInstance(config)
}