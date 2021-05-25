/*
 * @Author: your name
 * @Date: 2021-05-06 14:37:16
 * @LastEditTime: 2021-05-07 11:07:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
