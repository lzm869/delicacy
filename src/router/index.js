import {createRouter,createWebHashHistory} from "vue-router";
import List from "@/components/List.vue"
import My from "@/components/My.vue"
import Header from "@/navigation/header.vue"
import SideMenu from "@/navigation/SideMenu.vue"
import Right from "@/navigation/right.vue"
import Demo from "@/components/demo.vue"
import Search from "@/components/Search.vue"
import Demo2 from "@/components/demo2.vue"
import Login from "@/components/Login.vue"
import Sc from "@/components/sc.vue"
import Popup from "@/components/Popup.vue"
import Underdevelopment from '@/components/underdevelopment.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
    {
        path:"/",
        name:'Home',
        component:()=>import('@/components/Home.vue'),
    },
    {
        path:"/my",
        name:My,
        component:My
    },
    {
        path:"/list",
        name:List,
        component:List
    },
    {
        path:"/header",
        name:Header,
        component:Header
    },
    {
        path:"/details/:id",
        name:'Details',
        component:()=>import('../components/Details.vue'),
    },
    {
        path:"/sidemenu",
        name:'SideMenu',
        component:SideMenu
    },
    {
        path:"/right",
        name:'Right',
        component:Right
    }, 
    {
        path:"/demo",
        name:'Demo',
        component:Demo
    },   
    {
        path:"/search",
        name:'Search',
        component:Search,
    },
    {
        path:"/demo2",
        name:"demo2",
        component:Demo2,
    },
    {
        path:"/login",
        name:"Login",
        component:Login,
    },
    {
        path:"/sc",
        name:"Sc",
        component:Sc
    },
    {
        path:"/Popup",
        name:"Popup",
        component:Popup
    },
    {
        path:"/underdevelopment",
        name:"underdevelopment",
        component:Underdevelopment
    }
]});

router.beforeEach((to,from,next)=>{
    let token = localStorage.getItem("token")
    if(token || to.path!="/Demo2"){
        next()
    }else{
        next("/login")
    }
})
export default router;