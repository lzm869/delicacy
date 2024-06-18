import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/index.js'
import Vuex from 'vuex';
import store from './store/index'
// import '@/mock/mock.js'
import "@/assets/iconfont/iconfont.css"
import * as ElIconModules from '@element-plus/icons-vue'
import axios from 'axios'
import "virtual:svg-icons-register";
import SvgIcon from "./components/SvgIcon.vue";
const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(store)
app.use(router)
app.use(ElIconModules)
app.use(Vuex);
app.use(ElementPlus)
app.component("SvgIcon", SvgIcon);
app.mount('#app')
