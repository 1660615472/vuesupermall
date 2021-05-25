<!--
 * @Author: your name
 * @Date: 2021-05-19 22:06:47
 * @LastEditTime: 2021-05-20 14:49:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\goodDetail\childComp\detailSwiper.vue
-->
<template>
    <swiper class="detail-swiper">
      <swiper-item v-for="topImage in topImages" :key="topImage">
        <img :src="topImage" alt=""/>
      </swiper-item>
    </swiper>
 
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    topImages: {
      type: Array,
      defaule() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
 .detail-swiper{
        height: 300px;
        overflow: hidden;
    }
</style>