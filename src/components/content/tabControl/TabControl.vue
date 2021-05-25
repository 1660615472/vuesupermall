<!--
 * @Author: your name
 * @Date: 2021-05-08 21:55:03
 * @LastEditTime: 2021-05-11 16:42:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\content\tabControl\TabControl.vue
-->
<template>
  <div class="tab-control">
      <div v-for="(title,index) in titles" class="tab-control-item" 
      :class="{active:index === currentIndex}"
      @click="changeIndex(index)"
      >
          <span>{{title}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            //记录当前选中div下标
            currentIndex:0
        }
    },
    methods:{
        changeIndex(index){
            this.currentIndex = index;
            //子组件发射事件给父组件监听
            this.$emit('itemchange',index)
        }
    }
}
</script>

<style>
    .tab-control{
        display: flex;
        width: 100%;
        text-align: center;
        background:white;
        font-size: 14px;
        line-height: 40px;
        z-index: 9;
    } 
    .tab-control-item{
        flex: 1;
         height: 40px;
    }
    .tab-control-item span{
        padding: 5px;
    }
    .active span{
        color: rgb(238, 104, 166);
        border-bottom: 3px solid rgb(224, 60, 60);
        bottom:0px ;
    }
</style>
