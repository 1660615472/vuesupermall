<!--
 * @Author: your name
 * @Date: 2021-05-31 09:38:44
 * @LastEditTime: 2021-05-31 22:29:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\components\common\toast\toast.vue
-->
<template>
  <div class="toast" v-show="isShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:'Toast',
    data(){
        return{
            message:'',
            isShow:false
        }
    },
    methods:{
        show(message,time){
            console.log('----')
           this.isShow = true; 
           this.message = message;
           setTimeout(()=>{
               this.isShow = false;
               this.message = '';
           },time)
        }
    }
}
</script>

<style scoped>
    .toast{
        position: fixed;
        padding: 8px 10px;
        transform: translate(-50%,-50%);
        top:50%;
        left: 50%;
        color: rgb(252, 245, 245);
       background-color:rgba(0,0,0,.8) ;
       z-index: 30;
    }
</style>