<template>
  <!-- 详情页信息 -->
  <div v-for="(item, index) in list1" :key="index">
    <div><img :src="item.url" class="imgan" /></div>
    <div class="uploadxx">
      <table>
        <tbody>
          <tr class="uploadxx">
            <td>
              <div class="title"><h1>{{ item.title }}</h1></div>
            </td>
            <td><div class="uploader">上传人：{{ item.uploader }}</div></td>
            <td><div class="uploadtime">上传时间：{{ item.uploadtime }}</div></td>
          </tr>
        </tbody>
      </table>
  </div>
  </div>
  <!-- 图标 -->
  <div class="tb">
    <div class="icon">
    </div>
    <el-divider border-style="double" />
    <i class="iconfont icon-dianzan"></i>
    <i v-show="collection != '0'" class="laterBox">
      <i @click="add" class="iconfont icon-shoucang"></i></i>
    <i v-show="collection != '1'">
      <i @click="add" class="iconfont icon-shoucang"></i></i>
    <i class="iconfont icon-pinglun"></i>
  </div>
  <div><h2>准备材料</h2></div>
  
  <div v-for="item in rawmaterials" class="rawmaterials">
    {{ item }}
  </div>
  <div><h2>制作方法</h2></div>
  <div v-for="(item, index) in makes" :key="index">
    <div class="make">{{ item }}</div>
    <i class="iconfont icon-fengelan1"></i>
  </div>
</template>
<script>
import { getAll, getSliders } from '@/utils/api/course'
import axios from 'axios'
export default {
  inject: ['reload'],
  name: 'Details',
  data() {
    return {
      //存储用axios二次封装再解耦操作获取的数据
      list: [],
      list1: [],
      uid: this.$route.params.id,
    }
  },
  created() {
    //用解耦后的方法获取数据
    getAll().then(res => {
      this.list = res;
    }),
      getSliders(this.uid).then(res => {
        this.list1 = res;
      })
  },
  inject: ['reload'],
  computed: {

    makes() {
      return this.list1.map(item => item.make).join().split("。")
    },
    products() {
      return this.$store.state.detail;
    },
    title() {
      return this.list1.map(item => item.title).join()
    },
    url() {
      return this.list1.map(item => item.url).join()
    },
    lable() {
      return this.list1.map(item => item.lable).join()
    },
    uploader() {
      return this.list1.map(item => item.uploader).join()
    },
    uploadtime() {
      return this.list1.map(item => item.uploadtime).join()
    },
    collection() {
      return this.list1.map(item => item.collection).join()
    },
    rawmaterials(){
      return this.list1.map(item => item.rawmaterial)
    },
    rawmaterial() {
      return this.list1.map(item => item.rawmaterial).join()
    },
    make() {
      return this.list1.map(item => item.make).join()
    },
  },
  methods: {
    hhh() {
      this.reload();
    },
    add() {
      this.reload();
      if (this.collection === "0") {
        axios({
          method: 'put',//请求方法
          data: {
            title: this.title,
            url: this.url,
            lable: this.lable,
            uploader: this.uploader,
            uploadtime: this.uploadtime,
            collection: 1,
            rawmaterial: this.rawmaterial,
            make: this.make
          },
          url: 'http://localhost:4000/Dishes/' + this.uid,
        }).then(res => {
          console.log("a", res.data)
        })
      }
      else {
        axios({
          method: 'put',//请求方法
          data: {
            title: this.title,
            url: this.url,
            lable: this.lable,
            uploader: this.uploader,
            uploadtime: this.uploadtime,
            collection: 0,
            rawmaterial: this.rawmaterial,
            make: this.make
          },
          url: 'http://localhost:4000/Dishes/' + this.uid,
        }).then(res => {
          console.log("b", res.data)
        })
      }
    },
  }
}
</script>
<style scoped>
.rawmaterials{
  width: 750px;
  text-align: left;
}
.make{
  text-align: left;
  font-size: 15px;
}
/* 上传信息 */
.title{
  font-size: 13px;
}
.uploader{
  position: absolute;
  left: 0px;
  top: 80px;
  font-size: 14px;
  color: rgb(206, 219, 219);
}
.uploadtime{
  position: absolute;
  left: 0px;
  top: 100px;
  font-size: 14px;
  color: rgb(206, 219, 219);
}
.uploadxx{
  position: absolute;
  bottom: 300px;
  right:350px;
  width: 600px;
}
/* 图标 */
.tb {
  position: relative;
  top: 30px;
  bottom: 120px;
  right: 100px;
}
.icon-fengelan1{
  position: relative;
  right: 400px;
  color: rgb(162, 200, 24);
  font-size: 20px;
  bottom: 25px;
}

.icon {
  position: relative;
  left: 320px;
  top: 100px;
  height: 50px;
  width: 300px;
}

.icon-dianzan {
  font-size: 35px;
}
.icon-dianzan:hover{
  color: aqua;
}
.icon-shoucang {
  position: relative;
  left: 70px;
  font-size: 35px;
}
.icon-shoucang:hover{
  color: aqua;
}
.icon-pinglun {
  position: relative;
  left: 140px;
  font-size: 35px;
}
.icon-pinglun:hover{
  color: aqua;
}
.laterBox {
  color: rgb(237, 237, 17);
}
/* 图片 */
.imgan {
  position: relative;
  right: 20px;
  top: 70px;
  width: 400px;
  height: 400px;
  border-bottom: 1px solid rgb(194, 177, 177);
  border-left: 1px solid rgb(194, 177, 177);
  border-right: 1px solid rgb(194, 177, 177);
  border-top: 1px solid rgb(194, 177, 177);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px
}
.rawmaterial{
  width: 500px;
}
</style>