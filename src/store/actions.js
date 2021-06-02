/*
 * @Author: your name
 * @Date: 2021-05-27 14:43:26
 * @LastEditTime: 2021-05-30 23:01:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\store\actions.js
 */
export default {
    addGoodsCar(context, payload) {
        //这里返回promise对象是为了调用的时候判断是否执行完该函数，是否添加购物车成功
        return new Promise((reslove, reject) => {
            let oldGood = null;
            for (let item of context.state.goodsCarList) {
                if (item.iid === payload.iid) {
                    oldGood = item;
                }
            }
            if (oldGood) {
                //如果新选的商品已存在于购物车，让旧商品数量直接+1就行
                context.commit('addCounter', oldGood)
                reslove('商品数量+1');
            } else {
                payload.count = 1;
                context.commit('addToCart', payload)
                reslove('商品+1');
            }
        })

    }

}