/*
 * @Author: your name
 * @Date: 2021-05-27 14:41:13
 * @LastEditTime: 2021-05-27 14:42:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\store\mutations.js
 */
export default {
    addCounter(state, payload) {
        //旧商品数量加1（浅拷贝）
        payload.count++;
    },
    addToCart(state, payload) {
        state.goodsCarList.push(payload)
    }
}