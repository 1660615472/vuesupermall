<!--
 * @Author: your name
 * @Date: 2021-05-18 22:55:23
 * @LastEditTime: 2021-05-25 21:35:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\goodDetail\goodDetail.vue
-->
<template>
  <div id="good-detail">
    <detail-navbar class="det-navbar" @titleClick="titleClick" ref='nav'></detail-navbar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll='contentScroll'>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base-info :goodsObject="goodsObject"></detail-base-info>
      <shop-info :bussinessInfo="bussinessInfo"></shop-info>
      <!-- @imageLoad='imageLoad' 监听子组件发送的事件 代表img标签加载完了 -->
      <detail-params-info
        ref="params"
        :paramsInfo="paramsInfo"
      ></detail-params-info>
      <!-- <detail-comment-info :detailInfo="detailInfo" @imageLoad='imageLoad'> </detail-comment-info> -->
      <user-comment-info
        ref="comment"
        :commentInfo="commentInfo"
      ></user-comment-info>
      <goods-list ref="goods" :goods="recommends"></goods-list>
    </scroll>
    <detail-buttom-bar></detail-buttom-bar>
  </div>
</template>

<script>
import DetailNavbar from "views/goodDetail/childComp/detailNavbar";
import { getGoodDetail, getRecommend } from "network/goodsDetail/goodDetail.js";
import DetailSwiper from "views/goodDetail/childComp/detailSwiper";
import DetailParamsInfo from "views/goodDetail/childComp/detailParamsInfo";
import DetailBaseInfo from "views/goodDetail/childComp/detailBaseInfo";
import scroll from "@/components/common/scrollUtil/Scroll";
import ShopInfo from "views/goodDetail/childComp/ShopInfo";
import DetailButtomBar from "views/goodDetail/childComp/detailButtomBar";
import UserCommentInfo from "views/goodDetail/childComp/userCommentInfo";
import GoodsList from "components/content/tabControl/goods/GoodsList.vue";
import DetailCommentInfo from "views/goodDetail/childComp/detailCommentInfo";
import {
  Goods,
  Shop,
  GoodsParam,
} from "network/goodsDetail/goodDetailsObjectUtils";

export default {
  name: "goodDetail",
  components: {
    DetailNavbar,
    DetailSwiper,
    DetailBaseInfo,
    ShopInfo,
    scroll,
    DetailCommentInfo,
    DetailParamsInfo,
    UserCommentInfo,
    GoodsList,
    DetailButtomBar
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goodsObject: {},
      bussinessInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommends: [],
      //记录每个组件的高度
      themeTopYs: [],
      currentIndex:0
    };
  },
  methods: {
    // 监听详情页图片刷新执行scroll组件刷新
    imageLoad() {
      this.$refs.scroll.scroll.refresh();
    },
    // 接收navbar点击的index跳转到指定位置
    titleClick(index) {
      console.log(index);
      this.$refs.scroll.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },
    //滑动页面按钮切换
    contentScroll(position){
      const positionY = -position.y;
     let length = this.themeTopYs.length;
     for(let i = 0 ; i < length ;i++){
       if((i<length -1 && positionY > this.themeTopYs[i] && positionY< this.themeTopYs[i+1])||
       (i === length -1 && positionY > this.themeTopYs[i])){
         //console.log(i);
         this.currentIndex = i
         this.$refs.nav.currentIndex = this.currentIndex
       }
     }
  }
  },
  activated() {
    console.log("goodDetail activated执行了");
    //保存传入的goodId
    this.iid = this.$route.params.id;
    //根据id请求数据
    getGoodDetail(this.iid).then((res) => {
      console.log(res);
      //轮播图数据
      this.topImages = res.data.result.itemInfo.topImages;
      const itemInfo = res.data.result.itemInfo;
      const columns = res.data.result.columns;
      const services = res.data.result.shopInfo.services;
      const shopInfo = res.data.result.shopInfo;
      const info = res.data.result.itemParams.info;
      const rule = res.data.result.itemParams.rule;
      //获取商品数据形成商品对象
      this.goodsObject = new Goods(itemInfo, columns, services);
      //店铺信息
      this.bussinessInfo = new Shop(shopInfo);
      //商品详情数据
      this.detailInfo = res.data.result.detailInfo;
      //商品参数 info, rule
      this.paramsInfo = new GoodsParam(info, rule);
      //评论信息
      if (res.data.result.rate.cRate != 0) {
        this.commentInfo = res.data.result.rate.list[0];
      }
      if (this.$refs.params && this.$refs.comment && this.$refs.goods) {
        //$nextTick获取组件中最新DOM元素
        this.$nextTick(() => {
         this.themeTopYs = [];
          this.themeTopYs.push(0);
          this.themeTopYs.push(this.$refs.params.$el.offsetTop);
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
          this.themeTopYs.push(this.$refs.goods.$el.offsetTop);
          console.log(this.themeTopYs);
        });
      }
    });
    //获取推荐商品信息
    getRecommend().then((res) => {
      console.log(res);
      this.recommends = res.data.data.list;
    });
  },
  mounted() {
    console.log("mounted");
  },
};
</script>

<style scoped>
#good-detail {
  position: relative;
  z-index: 20;
  background-color: #fff;
  height: 100vh;
}
.content {
  height: calc(100% - 44px);
  z-index: 10;
  overflow: hidden;
}
</style>