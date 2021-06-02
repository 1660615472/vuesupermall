/*
 * @Author: your name
 * @Date: 2021-05-06 14:37:16
 * @LastEditTime: 2021-05-31 15:19:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

import toast from 'components/common/toast/index'
Vue.config.productionTip = false

//安装自定义的toast插件
Vue.use(toast); //实际上执行了插件里的install函数
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
