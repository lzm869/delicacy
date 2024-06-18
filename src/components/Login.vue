<template>
  <div class="Login">
    <el-form class="login-container">
      <h1 class="title">用户登录</h1>
      <el-form-item label="">
        <el-input type="text" v-model="username" placeholder="登录账号" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-input type="password" v-model="password" placeholder="登录密码" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="doSubmit()">提交</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width:100%;" @click="tc()">退出</el-button>
      </el-form-item>
      <el-row style="text-align: center;margin-top:-10px">
        <el-link type="primary">忘记密码</el-link>
        <el-link type="primary" @click="gotoRegister()">用户注册</el-link>
      </el-row>
    </el-form>
  </div>
</template>
<script>
import { getuser } from '@/utils/api/course'
export default {
  inject: ['reload'],
  name: "Login",
  data() {
    return {
      msg: "登录界面",
      username: "",
      password: "",
      list3: [],
      person: ""
    }
  },
  created(
  ) {
    //用解耦后的方法获取数据
    getuser().then(res => {
      this.list3 = res;
    })
  },
  computed: {
      user() {
        return this.list3
      },
    },
  methods: {
    gotoRegister() {
      this.$router.push("/Register");
    },
    //提交事件
    doSubmit() {
      this.reload();
      const person = this.user.find(item => {
        return item.username === this.username;
      })
      if (person.password === this.password) {
        localStorage.setItem("token","5689")
        this.$router.push("/");
      }
      else {
        alert("账号密码错误")
      }
    },
    tc(){
      this.reload()
      localStorage.removeItem('token')
    }
  }
}
</script>

<style scoped>
.login-container {
  border-radius: 10px;
  margin: 0px auto;
  width: 350px;
  padding: 30px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  text-align: left;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}
</style>