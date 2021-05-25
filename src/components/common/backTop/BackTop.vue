<!--
 * @Author: your name
 * @Date: 2021-05-13 10:41:36
 * @LastEditTime: 2021-05-14 23:08:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\common\backTop\BackTop.vue
-->
<template>
  <div class="backTop">
      <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
    name:'BackTop'
}
</script>

<style>
    .backTop{
        /* position: fixed属性元素的位置相对于浏览器窗口是固定位置，即使窗口是滚动的它也不会移动： */
        position: fixed;
        right: 8px;
        bottom: 55px;
    }
    .backTop img{
        width: 40px;
        height: 40px;
    }
    
</style>
