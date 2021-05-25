<!--
 * @Author: your name
 * @Date: 2021-05-08 14:26:26
 * @LastEditTime: 2021-05-08 15:18:39
 * @LastEditors: Please set LastEditors
 * @Description: 信息展示页面
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\home\childComps\RecInfo.vue
-->
<template>
    <div class="recommend">
        <div v-for="item in recommends" class="recommend-item" :key="item.acm">
             <a :href="item.link">
                <img :src="item.image" alt=""> 
                <div>{{item.title}}</div> 
             </a>    
        </div>
    </div>
</template>

<script>
export default {
    name:'RecInof',
    props:{
        recommends:{
            type:Array,
            default(){
                return[];
            }
        }
    }
}
</script>

<style>
    .recommend{
        display: flex;
        width: 100%;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px 0 ;
        border-bottom:10px solid #eee;
    }
    .recommend-item{
        flex: 1;
    }
     .recommend-item img{
       width: 70px;
       height: 70px;
       margin-bottom:10px ;
    }
    
</style>