<template>
  <div class="rectangle">
    <ProductItem v-for="product in list" :key="product.id" :product="product" class="whold">
    </ProductItem>
  </div>
</template>
<script>
import { getAll } from '@/utils/api/course'
import ProductItem from '@/components/ProductItem.vue'
export default {

  components: {
    ProductItem,
  },
  data() {
        return {
            //存储用axios二次封装再解耦操作获取的数据
            list: []
        }
    },
    created(
    ) {
        //用解耦后的方法获取数据
        getAll().then(res => {
            this.list = res;
        })
    }
}
</script>
<style>
.rectangle{
    position: relative;
    width: 880px;

    text-align: left;
}
</style>