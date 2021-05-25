<!--
 * @Author: your name
 * @Date: 2021-04-23 14:07:54
 * @LastEditTime: 2021-05-12 17:28:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\JScode\vueRouter\tabbar\src\components\tabbar\TabBarItem.vue
-->
<template>
  <div @click="itemClick" class="tab-bar-item">
    <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
      <div>首页</div> -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
       <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-name"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
   //接收父组件值
  props:{
    path:String,
    activeColor:{
      type:String,
      default: 'red'
    }
  }
,
  computed:{
    isActive(){
      //当前活跃路由的path和页面点击的path是否一致
      // return this.$router.path.indexof(this.path) !== -1
      return this.$route.path == this.path
       
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    itemClick(){
      //console.log(this.$router)
       //console.log(this.path)
      //跳转页面(具体跳到哪个页面由父组件来定)
      this.$router.replace(this.path).catch(err =>{
        err
      })
    } 
  }
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
}

/* .active {
  color: activeColor;
} */
</style>