<!--
 * @Author: your name
 * @Date: 2021-05-07 22:35:36
 * @LastEditTime: 2021-05-17 15:24:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\home\childComps\HomeSwiper.vue
-->
<template>
  <swiper>
    <swiper-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      //不明白默认值为啥是个函数
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
    imageLoad() {
      //这样写只发送一次事件，否则多个image会发送多个事件
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad = true
      }
    },
  },
};
</script>

<style>
</style>
