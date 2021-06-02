<!--
 * @Author: your name
 * @Date: 2021-05-29 22:30:35
 * @LastEditTime: 2021-05-31 22:53:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\shopcart\cartButtonBar.vue
-->
<template>
  <div class="bottom-menu">
    <CheckButton
      class="select-all"
      :checked="isAllChecked"
      @click.native="selectAll"
    ></CheckButton>
    <span>全选</span>
    <span class="total-price">合计¥{{ $store.getters.getAllGoodsPrice }}</span>
    <span class="buy-product" @click="calcClick"
      >去计算({{ $store.getters.getAllGoodsNum }})</span
    >
  </div>
</template>

<script>
import CheckButton from "./CheckButton";
import { mapGetters } from "vuex";
export default {
  name: "CartButtonBar",
  components: {
    CheckButton,
  },
  computed: {
    ...mapGetters(["getGoodsCarList"]),
    isAllChecked() {
      //有不被选中的商品返回false
      //return !(this.getGoodsCarList.filter(item=> !item.checked).length)
      if (this.getGoodsCarList.length == 0) return false;
      return !this.getGoodsCarList.find((item) => !item.checked);
    },
  },
  methods: {
    selectAll() {
      //console.log('点击了全选按钮')
      //如果全选按钮为全部选中
      if (this.isAllChecked) {
        //全部选中按钮为选中状态，点击事件，所有商品checed应该为false
        this.getGoodsCarList.forEach((item) => (item.checked = false));
      } else {
        this.getGoodsCarList.forEach((item) => (item.checked = true));
      }
    },
    calcClick() {
      console.log('点击了结算按钮')
    },
  },
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 50px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-menu .buy-product {
  background-color: orangered;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
