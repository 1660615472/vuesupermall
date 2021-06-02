<!--
 * @Author: your name
 * @Date: 2021-05-27 22:14:09
 * @LastEditTime: 2021-05-29 21:10:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\shopcart\shopCarList.vue
-->
<template>
  <div class="cart-list">
    <scroll class="content" :probe-type="3">
      <shop-car-list-item v-for="item in getGoodsCarList" :good-item='item' :key="item.id"></shop-car-list-item>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "@/components/common/scrollUtil/Scroll";
import ShopCarListItem from "./shopCarListItem"
export default {
  name: "ShopCarList",
  components: {
    scroll,
    ShopCarListItem
  },
  computed: {
    ...mapGetters(["getGoodsCarList"]),
  },
};
</script>

<style scoped>
.cart-list {
  height: 100vh;
}
.content {
  /* 父元素应该有高度 */
  height: calc(100% - 44px -49px);
  overflow: hidden;
}
</style>
