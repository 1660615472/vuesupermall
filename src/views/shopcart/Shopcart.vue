<!--
 * @Author: your name
 * @Date: 2021-04-25 11:02:33
 * @LastEditTime: 2021-05-29 23:29:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\views\home.vue
-->
<template>
  <div class="content">
      <!-- 顶部导航组件 -->
    <nav-bar class="shop-nav"><div slot="middle">购物车({{$store.getters.getAllGoodsNum}})</div></nav-bar>
    <!-- 商品列表 -->
    <shop-car-list class="shop-car-list"></shop-car-list>
    <!-- 底部汇总 -->
    <cart-bottom-bar class="cart-bottom-bar"></cart-bottom-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import ShopCarList from './shopCarList';
import CartBottomBar from './cartBottomBar'
export default {
  name:'Shopcart',
  components:{
    NavBar,
    ShopCarList,
    CartBottomBar
  }
}
</script>

<style>
.shop-nav{
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  background: rgb(241, 61, 91);
  color: white;
  z-index: 20;
}
.content .shop-car-list{
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;

}
.content{
  height: 100%;
}
.cart-bottom-bar{
  position: relative;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
