<template>
    <div class="Searchcontent">
        <ProductItem v-for="product in filteredItems" :key="product.id" :product="product">
        </ProductItem>
        <ProductItem v-for="product in lableItems" :key="product.id" :product="product" v-show="filteredItems=''">
        </ProductItem>
    </div>
</template>
<script>
import { getSliders, getAll } from '@/utils/api/course'
import ProductItem from './ProductItem.vue';
export default {
    components: {
        ProductItem,
    },
    data() {
        return {
            list1: [],
            name1:'肉'
        }
    },
    created() {
        getAll().then(res => {
            this.list1 = res;
        })
    },
    computed: {
        //获取store中的state的inputValue数据
        name: function () {
            return this.$store.state.inputValue
        },
        //按数组list1的字段title包括name为条件进行索引建成新的数组
        filteredItems() {
            return this.list1.filter(item => item.title.includes(this.name));
        },
        lable: function(){
            return this.$store.state.inputValue
        },
        lableItems(){
            return this.list1.filter(item =>item.lable.includes(this.lable))
        }
    },
}
</script>
<style>
.lll {
    z-index: 1;
}

.Searchcontent {
    width: 880px;
    text-align: left;
}
</style>