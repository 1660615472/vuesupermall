/*
 * @Author: your name
 * @Date: 2021-05-31 10:55:37
 * @LastEditTime: 2021-05-31 22:04:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit    
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\common\toast\index.js
 */
import Toast from "@/components/common/toast/toast";
const obj = {}
//Vue.use执行install函数
obj.install = function(Vue){
   // console.log('执行了obj的install函数')
   // document.body.appendChild(Toast.$el)
   //1、创建组件构造器
   const toastContrustor = Vue.extend(Toast);
   //2、new组件构造器创建组件对象
   const toast = new toastContrustor();
   //3、将组件对象手动挂在到某一个元素上
   toast.$mount(document.createElement('div'))
   //4、toast.$el对应的就是div
   document.body.appendChild(toast.$el);
   
   Vue.prototype.$toast = toast
}
export default obj
