<template>
    <headerk>
        <div class="container">
            <nav class="headerk-wrap">
                <ul>
                    <div class="jubu">
                    <li>
                        <router-link :to="{ name: 'Home' }" exact class="fontsetup"> 首页</router-link>
                    </li>
                    <li>
                        <router-link to="/demo2">
                            <div class="dropdown" @click="fenlei">
                                <span class="fontsetup">分类</span>
                            </div>
                        </router-link>
                    </li>
                    <li>
                        <div class="drop">
                            <div style="position: relative;">
                                <input type="text" ref="selectButton" @click="toggleDrop" v-model="searchKeyword"
                                    placeholder="请输入菜名" class="searchkuan" v-show="searchk">
                                <div v-show="searchKeyword != ''">
                                    <div v-if="isDropVisible" ref="drop" class="drop-content">
                                        <div></div>
                                        <HeaderkItem v-for="headerk in filteredItems" :key="headerk.id"
                                            :headerk="headerk">
                                        </HeaderkItem>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><button @click="change" class="Search">
                            <div class="searchfont">搜索</div>
                        </button></li>
                    </div>
                    <li>
                        <div class="dropdo">
                            <svg t="1718441534974" class="profile" viewBox="0 0 1024 1024" version="1.1"
                                xmlns="http://www.w3.org/2000/svg" p-id="2144" width="50" height="50">
                                <path
                                    d="M512 4.608C231.936 4.608 4.608 231.936 4.608 512s227.328 507.392 507.392 507.392 507.392-227.328 507.392-507.392S792.064 4.608 512 4.608zM234.496 861.184c11.264-84.48 59.904-158.72 133.632-202.752 8.192-5.12 13.824-13.312 14.848-23.04s-2.56-18.944-9.216-25.6c-39.936-37.888-61.44-89.088-61.44-144.896 0-110.592 89.6-200.704 200.192-200.704s200.704 90.112 200.704 200.704c0 55.296-22.016 107.008-61.44 144.896-7.168 6.656-10.24 15.872-9.216 25.6 1.024 9.728 6.656 17.92 14.848 23.04 72.192 43.52 120.832 116.224 133.632 198.656 0 1.024 0.512 2.56 1.024 3.584-76.288 61.44-173.568 97.792-278.528 97.792-106.496 0-202.752-36.352-279.04-97.28z m608.256-49.664c-19.456-73.728-62.976-138.24-124.416-184.832 35.84-45.568 55.296-102.912 55.296-161.28 0-144.384-117.76-262.144-262.144-262.144-144.384 0-261.632 117.76-261.632 262.144 0 58.368 19.968 115.712 55.296 161.28-61.44 46.592-104.96 111.616-124.416 185.344-72.192-79.36-116.224-184.832-116.224-300.032 0-246.272 200.704-446.464 446.464-446.464S957.44 266.24 957.44 512c1.024 115.2-42.496 220.16-114.688 299.52z"
                                    fill="#646464" p-id="2145"></path>
                            </svg>
                            <div class="dropdo-content">
                                <div class="box">
                                    <div class="box1"><router-link to="/my" class="fontsetupxlk">
                                            <i class="iconfont icon-gerenzhongxin-zhihui"></i>个人中心</router-link>
                                    </div>
                                </div>
                                <div class="box">
                                    <div class="box1">
                                        <router-link to="/Underdevelopment" class="fontsetupxlk"><i
                                                class="iconfont icon-shangchuan"></i>上传菜品</router-link>
                                    </div>
                                </div>
                                <div class="box">
                                </div>
                                <div class="box">
                                    <div class="box1" @click="qieh" v-show="showll"><i
                                            class="iconfont icon-tuichu"></i>退出登录
                                    </div>
                                    <div @click="qieh" v-show="!showll">
                                        <div>
                                            <div @click.stop="showPopup">显示弹窗</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <Popup :visible="popupVisible" :content="popupContent" @close="closePopup" />
                    </li>
                    <li>
                    </li>
                </ul>
            </nav>
        </div>
    </headerk>
</template>
<script>
import { getSliders, getAll } from '@/utils/api/course'
import HeaderkItem from '@/navigation/headerkItem.vue';
import Popup from '@/components/Popup.vue';
export default {
    components: {
        HeaderkItem,
        Popup
    },
    data() {
        return {
            popupVisible: false,
            list1: [],
            searchKeyword: '',
            searchk: true,
            isDropVisible: false, // 下拉框的显示状态
            showll: ""
        }
    },
    created() {
        let token = localStorage.getItem("token")
        if (token) {
            this.showll = true
        } else {
            this.showll = false
        }
        getAll().then(res => {
            this.list1 = res;
        })
    },
    computed: {
        filteredItems() {
            // 搜索包含搜索框的数据
            return this.list1.filter(item => item.title.includes(this.searchKeyword));
        },
        lables(){
            return this.list1.map(item => item.lable).join().split(",")
        }
    },
    mounted() {
        // 监听点击事件，用于关闭下拉框
        window.addEventListener('click', this.handleClickOutside);
    },
    beforeUnmount() {
        // 移除点击事件监听器
        window.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        fenlei(){
            this.$store.commit('updateabc', this.lables)
        },
        showPopup() {
            this.popupVisible = true;
        },
        closePopup() {
            this.popupVisible = false;
        },
        qieh() {
            let token = localStorage.getItem("token")
            if (token) {
                this.showll = !this.showll
                console.log("已登录")
                localStorage.removeItem('token')
                localStorage.reload()
            } else {
                this.showll = !this.showll
                console.log("请登录")
                localStorage.setItem("token", "5689")
            }
        },
        change() {
            if (this.searchKeyword === '') {
                alert("请输入搜索内容")
            }
            else {
                this.$store.commit('updateInputValue', this.searchKeyword)
                this.$router.push({
                    path: '/Search',
                    //用store中的updateInputValue方法将searchKeyword传给inputValue
                })
            }
        },
        toggleDrop() {
            this.isDropVisible = !this.isDropVisible; // 切换下拉框的显示状态
        },
        handleClickOutside(event) {
            // 判断点击事件的目标是否在下拉框内部或按钮内部，如果不在，则关闭下拉框
            if (this.$refs.drop
                && !this.$refs.drop.contains(event.target)
                && !this.$refs.selectButton.contains(event.target)) {
                this.isDropVisible = false;
            }
        },
    }

}
</script scoped>
<style>
.jubu{
    position: relative;
    top: 30px;
}
/* 搜索 */
.searchfont {
    position: relative;
    bottom: 6px;
    color: black;
}

.Search:hover {
    border-bottom: 1px solid rgba(8, 43, 238, 0.811);
    border-left: 1px solid rgba(8, 43, 238, 0.811);
    border-right: 1px solid rgba(8, 43, 238, 0.811);
    border-top: 1px solid rgba(8, 43, 238, 0.811);
}

.Search {
    position: relative;
    background-color: rgb(234, 238, 240);
    color: black;
    top: 7px;
    right: 15px;
    height: 25px;
    font-size: 14px;
    border-bottom: 1px solid rgb(194, 177, 177);
    border-left: 1px solid rgb(194, 177, 177);
    border-right: 1px solid rgb(194, 177, 177);
    border-top: 1px solid rgb(194, 177, 177);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.searchkuan {
    height: 18px;
    border-bottom: 1px solid rgb(194, 177, 177);
    border-left: 1px solid rgb(194, 177, 177);
    border-right: 1px solid rgb(194, 177, 177);
    border-top: 1px solid rgb(194, 177, 177);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.searchkuan:hover {
    background-color: rgb(250, 252, 255);
    border-bottom: 1px solid rgb(77, 63, 63);
    border-left: 1px solid rgb(77, 63, 63);
    border-right: 1px solid rgb(77, 63, 63);
    border-top: 1px solid rgb(77, 63, 63);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

/* 总体边框*/
.container {
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 10;
    bottom: 700px;
    right: 0px;
    height: 30px;
    width: 2000px;
    background-color: #f9f9f9;
    min-width: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
}

/* 下拉框 */
.dropdo {
    position: absolute;
    left: 1500px;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    z-index: 10;
    bottom: 30px;
}

.dropdo:hover .dropdo-content {
    display: block;
}

.dropdo-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 60px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    top: 50px;
    left: -20px;
    color: black;
}

.drop {
    display: inline-block;
    font-size: 17px;
    font-weight: bold;
    z-index: 10;
    position: relative;
}

.drop:hover .drop-content {
    display: block;
}

.drop-content {
    display: inline-block;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 138px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 3px 3px;
    z-index: 1;
    width: 163px;
    top: 25px;
    left: 0px;
    text-align: left;
    color: black;
}

.dropdown {
    position: relative;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
}

/* 头部组件相关布局 */
headerk {
    display: flex;
    width: 500px;
    height: 45px;
}

/* li倒转与间隔 */
headerk ul li {
    padding: 0 10px;
    display: inline-block;
}

/* 字体位置 */
.headerk-wrap {
    position: relative;
    bottom: 50px;
    right: 200px;
}

/* 头部字体颜色大小等设置 */
.fontsetupxlk {

    color: rgb(0, 0, 0);
}

/* 图标 */
.profile {
    position: absolute;
    font-size: 50px;
}
.icon-morentouxiangbeifen {
    font-size: 35px;
}

.box1 {
    width: 100px;
}

.box :hover {
    display: inline-block;
    width: 100px;
    background-color: #e8e3e3;
}

/* 字体 */
.fontsetupxlk:hover {
    color: rgb(7, 7, 7);
}

.fontsetup {
    position: relative;
    font-size: 14px;
    text-decoration: none;
    font-weight: bold;
    color: rgb(0, 0, 0);
}

.fontsetup:hover {
    color: rgb(210, 184, 53);

}
</style>