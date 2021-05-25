<!--
 * @Author: your name
 * @Date: 2021-05-07 13:59:54
 * @LastEditTime: 2021-05-08 14:23:20
 * @LastEditors: Please set LastEditors
 * @Description:顶部导航
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\common\navbar\NavBar.vue
-->
<template>
  <div class="nav-bar">
    <!-- 预留三个插槽（左右按钮及中间title信息） -->
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="middle">
      <slot name="middle"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left,
.right {
  width: 60px;
  text-align: center;
}
.middle {
  flex: 1;
  text-align: center;
}
</style>
