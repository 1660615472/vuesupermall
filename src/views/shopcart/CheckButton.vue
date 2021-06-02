<!--
 * @Author: your name
 * @Date: 2021-05-29 21:18:52
 * @LastEditTime: 2021-05-30 22:20:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\shopcart\CheckButton.vue
-->
<template>
  <div
    class="check-button"
    :class="{ 'selector-active': checked }"
  >
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props:{
      checked:{
          type:Boolean,
          default:true
      }
  },
  methods: {
 /*    selectItem() {
        //取消勾选，让购物车商品对象里的checked属性变为false
      if ((this.isSelect = true)) {
        this.$emit("selectItem");
      }
    }, */
  },
};
</script>

<style scoped>
.check-button {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
}
.selector-active {
  background-color: #ff8198;
  border-color: #ff8198;
}
</style>