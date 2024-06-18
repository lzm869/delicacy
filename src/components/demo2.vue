<template>
    <div class="lable">
        <li v-for="(item, index) in newArr" :key="index" class="bigsmall" @click="classification(index)">
            <div class="ssr">{{ item }}<div class="dx"></div>
            </div>
        </li>
    </div>
    <div class="daxiao">
    <ProductItem v-for="product in sorta":key="product.id" :product="product">
        {{ product.id }}
    </ProductItem>
</div>
</template>
<script>
import ProductItem from '@/components/ProductItem.vue';
import { getAll } from '@/utils/api/course'
export default {
    components: {
        ProductItem,
    },
    data() {
        return {
            list: []
        }
    },
    created() {
        getAll().then(res => {
            this.list = res
        })
        this.name = this.name.sort()
        let newArr = []
        for (let i = 0; i < this.name.length; i++) {
            this.name[i] === this.name[i - 1] ? newArr : newArr.push(this.name[i])
        };
        return newArr,
            this.newArr = newArr
    },
    computed: {
        //获取store中的state的inputValue数据
        name() {
            return this.$store.state.abc
        },
        classify() {
            return this.newArr
        },
        mmm() {
            return this.newArr.at(this.$store.state.sort)
        },
        sorta() {
            return this.list.filter(item =>item.lable.includes(this.mmm))
        }
    },
    methods: {
        async classification(index) {
            await this.$store.commit('updatesort', index)
        }
    }
}

</script>
<style>
.daxiao{
    position: relative;
    top: 100px;
    width: 900px;
    right: 50px;
    text-align: left;
}
.ssr {
    width: 120%;
    border-bottom: 1px solid rgb(194, 177, 177);
    border-left: 1px solid rgb(194, 177, 177);
    border-right: 1px solid rgb(194, 177, 177);
    border-top: 1px solid rgb(194, 177, 177);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px
}

.dx {
    width: 80%;
}

.lable {
    position: absolute;
    right: 380px;
    top: 70px;
    width: 900px;
    font-size: 13px;
    z-index: 8;
}

.bigsmall {
    position: relative;
    right: 50px;
    display: inline-block;
    /* 间隔 */
    margin: 10px;
    cursor: pointer
}

.ssr:hover {
    background-color: antiquewhite;
}
</style>