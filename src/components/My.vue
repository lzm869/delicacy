<template>
  <div class="caidan">
    <el-divider border-style="dotted" class="fgx"/>
    <span class="collection" @click="collection">我的收藏</span>
    <el-divider direction="vertical" />
    <span class="like" @click="like">喜欢</span>
    <el-divider direction="vertical" border-style="dashed" />
    <span class="discuss" @click="discuss">参与讨论</span>
    <el-divider direction="vertical" border-style="dashed" />
    <span class="release" @click="release">发布作品</span>
</div>
<div>
  <div v-show="location=1">
    1
  </div>
  <div v-show="location=2">
    2
  </div>
  <div v-show="location=3">
    3
  </div>
  <div v-show="location=4">
    4
  </div>
  <div v-show="location=5">
    5
  </div>
</div>
</template>

<script>
import { getAll } from '@/utils/api/course'
export default {
  data(){
    return{
      list:[],
      location:'1'
    }
  },
  created(){
    getAll().then(res=>{
      this.list=res
    })
  }

};
</script>

<style scoped>
.caidan{
  position: relative;
  top: 100px;
    right: 100px;
    width: 700px;
    height: 120%;
}
.collection{

}
</style>
