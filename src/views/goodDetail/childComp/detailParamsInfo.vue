<!--
 * @Author: your name
 * @Date: 2021-05-23 19:58:10
 * @LastEditTime: 2021-05-23 21:23:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JScoded:\code\vueproject\vuesupermall\src\views\goodDetail\childComp\dataParamsInfo.vue
-->
<template>
  <div class="param-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(table, index) in paramsInfo.sizes"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in paramsInfo.infos" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="param-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.image.length !== 0">
      <img :src="paramsInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'DataParamsInfo',
    props:{
        paramsInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    color:rgb(230, 67, 94);
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
    color:rgb(230, 67, 94);
  }

  .param-info table tr {
    height: 42px;
    color:rgb(230, 67, 94);
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
    color:rgb(230, 67, 94);
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
    color:rgb(230, 67, 94);
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
    color:rgb(230, 67, 94);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
