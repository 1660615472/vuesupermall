<!--
 * @Author: your name
 * @Date: 2021-05-10 15:21:27
 * @LastEditTime: 2021-05-24 21:32:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\content\tabControl\goods\GoodListItem.vue
-->
<template>
  <div class="goods-item" @click="goodClick()">
    <img :src="showImage" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods:{
    goodClick(){ 
      this.$router.push('/goodDetail/'+this.goodsItem.iid);
    }
  }
};
</script>

<style>
  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
    
  }
  
  .goods-item img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: red;
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
