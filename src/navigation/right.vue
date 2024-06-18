<template>
    <table class="allll">
        <tbody class="alll">
            <tr v-for="(item, index) in comment.slice(0, 6)" :key="index" @click="Tj(item.id)" class="rightnav">
                <td class="ss">
                <td><img :src="item.url" :id="item.id" class="picture"></td>
                <td class="s">点评人：</td>
                <td class="foodname">{{ item.title }}</td>
                </td>
            </tr>
        </tbody>
    </table>
</template>
<script>
import { getAll } from '@/utils/api/course'

export default {
    computed: {
        products() {
            return this.$store.state.detail
        },
        comment() {
            return this.list66
        }
    },
    data() {
        return {
            //存储用axios二次封装再解耦操作获取的数据
            list66: []
        }
    },
    beforeMount() {
        this.$store.commit('updaterpis', this.list66)
    },
    created(
    ) {
        //用解耦后的方法获取数据
        getAll().then(res => {
            this.list66 = res;
        })
    },
    methods: {
        Tj(id) {
            console.log(id)
            let commentid = id
            this.$router.push(
                {
                    path: "/demo2",
                    query: { id: commentid }
                }
            )
        }
    }
}
</script>
<style>
.allll {
    position: absolute;
}

.alll {
    position: absolute;
}

.rightnav {
    width: 300px;
    cursor: pointer;
    position: relative;
    left: 800px;

}

.ss:hover {
    box-shadow: 2px 2px 2px 2px rgb(146, 146, 146);
}

.ss {
    border: 1px solid #f9f7f7;
    display: inline-block;
    margin: 10px;
    width: 300px;
    border-bottom: 1px solid rgb(0, 0, 0);
    border-left: 1px solid rgb(0, 0, 0);
    border-right: 1px solid rgb(0, 0, 0);
    border-top: 1px solid rgb(0, 0, 0);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
}

.s {
    position: absolute;
    left: 177px;
    bottom:130px;
    color: rgb(148, 156, 163);
    width: 60px;
    font-size: 13px;
}
.foodname {
    position: absolute;
    left: 180px;
    bottom:147px;
    font-weight: bold;
}
.picture {
    height: 150px;
    width: 150px;
    font-size: 15px;
}
</style>