/*
 * @Author: your name
 * @Date: 2021-05-06 14:37:16
 * @LastEditTime: 2021-05-29 23:47:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
Vue.use(Vuex)

const state = {
  //购物车商品信息
  goodsCarList: [],
}
const store = new Vuex.Store({
  //mutation为了修改state中的数据 
  //mutation中每个函数尽量只做单一的事情
  state,
  mutations,
  actions,
  getters: {
    getAllGoodsNum(state) {
      let goodsNum = 0;
      for (let item of state.goodsCarList) {
        if(item.checked){
          goodsNum += item.count
        }
      }
      return goodsNum
    },
    getGoodsCarList(state) {
      return state.goodsCarList
    },
    getAllGoodsPrice(state) {
      let allGoodsPrice = 0;
      for (let item of state.goodsCarList) {
        if (item.checked) {
          allGoodsPrice += (item.price * item.count)
        }
      }
      return allGoodsPrice.toFixed(2);
    }
  },
  modules: {
  }
})

export default store
