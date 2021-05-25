<!--
 * @Author: your name
 * @Date: 2021-04-22 22:25:53
 * @LastEditTime: 2021-04-23 14:12:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\components\tabbar\Tabbar.vue
-->
<template>
  <div id="tab-bar">
    <!-- 插槽 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  components: {},
};
</script>

<style>

 #tab-bar{
   display: flex;
   background-color: #f6f6f6;
   /* position:fixed定位的元素会固定一个位置不变。 */
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;

   box-shadow: 0 -30px 1 rgba(red, green, blue, alpha);
 }
</style>
