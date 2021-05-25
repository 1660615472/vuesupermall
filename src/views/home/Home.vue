<!--
 * @Author: your name
 * @Date: 2021-04-25 11:02:33
 * @LastEditTime: 2021-05-23 20:51:38
 * @LastEditors: Please set LastEditors
 * @Description: 首页组件
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\views\home.vue
-->
<template>
  <div id="home">
    <!-- 顶部导航组件 -->
    <nav-bar class="home-nav"><div slot="middle">购物街</div></nav-bar>
    <!-- ref属性用于访问组件中的数据 //变量名字为驼峰 组件使用时候得这样写 probe-type-->
    <scroll
      id="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-type="true"
      @showScroll="showScroll"
      @getPullingUpData="getPullingUpData"
    >
      <!-- <div class="wrapper"> -->
      <home-swiper class="home-swiper" :banners="banners" @swiperLoad="swiperLoad"></home-swiper>
      <rec-info :recommends="recommends"></rec-info>
      <this-week-fashion></this-week-fashion>
      <!-- 子传父 引入子组件监听子组件发射的事件 -->
      <tab-control
        :titles="titles"
        class="tab-control"
        @itemchange="itemchange"
        ref="tabControl"
        :class="{fixed:isFixed}"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 组件监听必须子组件发射事件才能监听，否则组件监听只能通过事件类型.native实现-->
    <back-top
      class="back-top"
      @click.native="topClick"
      v-show="isShow"
    ></back-top>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata, getHomeGoods } from "network/home/home.js";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecInfo from "views/home/childComps/RecInfo";
import ThisWeekFashion from "views/home/childComps/ThisWeekFashion";

import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/tabControl/goods/GoodsList.vue";
import scroll from "@/components/common/scrollUtil/Scroll";
import BackTop from "@/components/common/backTop/BackTop";
import {debounce} from "@/common/utils.js"
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecInfo,
    ThisWeekFashion,
    TabControl,
    GoodsList,
    scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        //默认第0页
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      TabControlIndex: "pop",
      isShow: false,
      //记录tabcontrol组件吸顶距离
      tabOffsetTop:0,
      //是否吸顶
      isFixed:false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.TabControlIndex].list;
    },
  },
  //create生命周期函数写具体逻辑
  created() {
    //调用methods里的函数
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  //和create的區別是加載該函數時dom也加載
  mounted() {
    this.swiperLoad();
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {  
        //console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type = "pop") {
      //翻页时调用这个方法，请求参数page+1获取下一页信息
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        //...语法结构，把请求到的第一页数据存到数组变量中
        this.goods[type].list.push(...res.data.data.list);
        //console.log(this.goods['pop'].list)
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
        debounce(this.$refs.scroll.refresh(),500)
      });
    },
    //监听子组件发射行为
    itemchange(index) {
      switch (index) {
        case 0:
          this.TabControlIndex = "pop";
          break;
        case 1:
          this.TabControlIndex = "new";
          break;
        case 2:
          this.TabControlIndex = "sell";
          break;
      }
    },
    topClick() {
      //scroll就是 new BetterCroll
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },
    //监听滚动距离展示置顶图标
    showScroll(position) {
      //console.log(position)
      //判断backtop是否显示
      this.isShow = -position.y > 1000 ? true : false;
      //决定tabcontrol是否吸顶
      this.isFixed = (-position.y) > this.tabOffsetTop
    },
    // 触底下拉请求更多商品数据事件
    //这个函数是监听scroll组件中的PullingUp事件，代表这个函数就是scroll的pullingUp事件
    getPullingUpData() {
      console.log("requestMoreData");
      this.getHomeGoods(this.TabControlIndex);
    },
    swiperLoad(){
      //获取图片加载后的tabControl组件offsetTop值
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
    }
  },
};
</script>


<style scoped>
/* scoped属性表示当前样式只在当前vue组件内生效 */
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  background: rgb(241, 61, 91);
  color: white;
}

.fixed{
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
}
#hy-swiper {
  margin-top: 44px;
}
#content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
</style>
