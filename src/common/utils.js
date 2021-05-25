/*
 * @Author: your name
 * @Date: 2021-05-06 16:10:02
 * @LastEditTime: 2021-05-24 15:06:16
 * @LastEditors: Please set LastEditors
 * @Description: 项目公共工具类
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\common\utils.js
 */

//防抖
//原理是把一个函数传入，生成一个函数带定时器
export function debounce(func, time) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
        }, time);
    };
}

export function formatDate(date,fmt){
    var o = {
        "M+":date.getMonth() + 1,//月份
        "D+":date.getDay(),//日
        "h+":date.getHours(),//hours
        "m+":date.getMinutes(),//分钟
        's+':date.getSeconds(),//秒,
    }
    //获取年份
    if(/(y+)/.test(fmt)){
        //RegExp.$1 是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
        fmt = fmt.replace(RegExp.$1,(date.getFullYear()+'').substr(4 - RegExp.$1.length));
    }
    //获取
    for(var k in o){
        if(new RegExp("("+k+")").test(fmt)){
            fmt = fmt.replace(RegExp.$1,(RegExp.$1.length===1)?(o[k]):(("00"+o[k]).substr((""+o[k]).length)))
        }
    }
    return fmt;
}
