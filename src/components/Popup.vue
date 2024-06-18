<template>
    <div v-if="visible" class="popup">
        <!-- 弹窗的内容 -->
        <div class="Login">
            <el-form class="login-container">
                <div class="close" @click="closePopup()">
                    <i class="iconfont icon-guanbi"></i>
                </div>
                <h1 class="title">用户登录</h1>
                <el-form-item label="">
                    <el-input type="text" v-model="username" placeholder="登录账号" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-input type="password" v-model="password" placeholder="登录密码" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="close-button" @click="closePopup()">
                    <el-button type="primary" style="width:100%;" @click="doSubmit()">登录</el-button></div>
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
        <!-- 关闭按钮 -->
    </div>

</template>

<script>
import { getuser } from '@/utils/api/course'
export default {
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
        closePopup() {
            this.$emit('close');
        },
        gotoRegister() {
            this.$router.push("/Register");
        },
        //提交事件
        doSubmit() {
            const person = this.user.find(item => {
                return item.username === this.username;
            })
            if (person.password === this.password) {
                location.reload()
                localStorage.setItem("token", "5689")
            }
            else {
                alert("账号密码错误")
            }
        },
        tc() {
            this.reload()
            localStorage.removeItem('token')
        }
    },
    props: {
        visible: {
            type: Boolean,
            default: false
        },
        content: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped>
.close{
    position:relative;
    left: 330px;
    cursor:pointer
}
.popup {
    position: fixed;
    z-index: 5000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}
.popup-content {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
}

.close-button {
    margin-top: 10px;
}
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