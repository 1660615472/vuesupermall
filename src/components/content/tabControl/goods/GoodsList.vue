<!--
 * @Author: your name
 * @Date: 2021-05-10 15:06:08
 * @LastEditTime: 2021-05-11 22:01:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\content\tabControl\goods\GoodsList.vue
-->
                    
<template>
<div class="goods">
   <!-- 遍历很多个goodlistitem同时传每一个item里的商品对象给goodlistitem -->
   <good-list-item v-for="item in goods" :goods-item="item" :key="item.acm"></good-list-item>
   </div>
</template>

<script>
import GoodListItem from "components/content/tabControl/goods/GoodListItem";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style>
   .goods{
     display: flex;
     flex-wrap: wrap; /* 弹性布局根据子组件里面的宽度决定是否换行*/
     justify-content: space-around; /* 弹性布局均等分 */
   }
</style>
