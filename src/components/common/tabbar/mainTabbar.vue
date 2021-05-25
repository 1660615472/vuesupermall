<!--
 * @Author: your name
 * @Date: 2021-04-26 22:34:50
 * @LastEditTime: 2021-05-11 22:03:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\components\tabbar\mainTabbar.vue
-->
<template>
   <!-- 注册后使用 -->
    <tab-bar class="tab-bar">
      <!-- path="/home" 为了给子组件传值，如果传的是变量则需要用v-bind:变量 -->
      <tab-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-name">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-name">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-name">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="@/assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-name">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from './TabBar'
import TabBarItem from './TabBarItem'
export default {
    name:'mainTabbar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>
.tab-bar{
  z-index:10 ;
}
</style>