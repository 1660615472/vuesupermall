<!--
 * @Author: your name
 * @Date: 2021-05-12 20:55:25
 * @LastEditTime: 2021-05-25 14:47:45
 * @LastEditors: Please set LastEditors
 * @Description: 封装scroll工具组件
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\common\scrollUtil\scroll.vue
-->
<template>
  <!-- wrapper和content这2个外层必须有 -->
  <div class="wrapper" ref="wrapper">
    <!-- ref属性绑定在元素中相当于选择器 -->
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterCroll from "better-scroll";
export default {
  name: "scroll",
  props: {
    probeType: {
      //变量名字为驼峰 组件使用时候得这样写 probe-type
      type: Number,
      default: 0,
    },
    pullUpType: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    // this.$refs.wrapper是获取ref属性为wrapper的元素
    this.scroll = new BetterCroll(this.$refs.wrapper, {
      //滑動模式
      probeType: this.probeType, //0代表不监听
      //允許按紐點擊
      click: true,
      //觸底
      pullUpLoad: this.pullUpType,
      observeDOM: true,
    });
    // this.scroll.scrollTo(0,0)
    this.scroll.on("scroll", (position) => {
      //console.log(position);
      //子组件发送事件 可传参
      this.$emit("showScroll", position);
       this.$emit("scroll", position);
    });
    if (this.pullUpType) {
      this.scroll.on("pullingUp", () => {
        //1、請求更多頁數據
        //这里只发射这个事件
        this.$emit("getPullingUpData");
      });
    }
  },
  methods: {
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>

<style>
</style>