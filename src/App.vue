<!--
 * @Author: your name
 * @Date: 2021-05-06 14:37:16
 * @LastEditTime: 2021-05-26 22:23:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\App.vue
-->
<template>
  <div id="app">
    <!-- 渲染vue-router指定的页面 -->
     <keep-alive >  <!--exclude="goodDetail" -->
      <!--使组件创建后不销毁 -->
    <router-view></router-view>
    </keep-alive>
    <main-tab-bar> </main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "@/components/common/tabbar/mainTabbar.vue";
import NavBar from "@/components/common/navbar/NavBar.vue";
import store from 'store/index.js'
export default {
  name: "App",
  components: {
    MainTabBar,
    NavBar,
    store
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
