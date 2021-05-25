<!--
 * @Author: your name
 * @Date: 2021-05-19 14:46:22
 * @LastEditTime: 2021-05-24 22:53:18
 * @LastEditors: Please set LastEditors
 * @Description: detail的导航组件
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\goodDetail\childComp\childComp.vue
-->
<template>
  <div id="detail-navbar">
    <nav-bar>
      <div slot="left" class="backImage" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="middle" class="title">
        <div
          class="detail-title"
          v-for="(title, index) in titles"
          :class="{active:index=== currentIndex}"
          @click="changeIndex(index)"
         
        >
          {{ title }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "childComp",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      //发送点击index页面跟随跳转事件
      this.$emit('titleClick',index)
    },
    backClick(){
        this.$router.go(-1);
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
}
.detail-title {
  flex: 1;
  text-align: center;
}
.active {
  color: rgb(238, 104, 166);
  border-bottom: 3px solid rgb(224, 60, 60);
  bottom: 0px;
}
.backImage{
    margin-top: 7px;
    margin-right: 15px;
}
.backImage img{
    width: 20px;
    height: 20px;
}
</style>
