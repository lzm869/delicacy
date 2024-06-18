<template>
    <el-carousel indicator-position="outside" class="CarouselChart">
        <el-carousel-item v-for="(item, index) in list.slice(0, 6)" :title="item.title" :key="index">
            <img :src="item.url" :id="item.id" class="picture">
        </el-carousel-item>
    </el-carousel>
        <div class="rectangle">
            <div>
                <h2>
                    <div>
                    </div>
                    <h2>
                        <svg-icon name="rou" size="45"></svg-icon>肉类菜谱
                    </h2>
                </h2>
            </div>
            <div class="sort">
                <ProductItem v-for="product in meat.slice(0, 3)" :key="product.id" :product="product">
                </ProductItem>
            </div>
            <div>
                <h2><svg-icon name="shucai" size="45"></svg-icon>
                    素食菜谱
                </h2>
            </div>
            <div class="sort">
                <ProductItem v-for="product in vegetable.slice(0, 3)" :key="product.id" :product="product">
                </ProductItem>
            </div>
            <div>
                <h2>
                    <svg-icon name="yingliao" size="45"></svg-icon>饮料制作
                </h2>
            </div>
            <div class="sort">
                <ProductItem v-for="product in beverage.slice(0, 3)" :key="product.id" :product="product">
                </ProductItem>
            </div>

            <div>
                <h2><svg-icon name="dangao" size="45"></svg-icon>甜品点心
                </h2>
            </div>
            <div class="sort">
                <ProductItem v-for="product in desserts.slice(0, 3)" :key="product.id" :product="product">
                </ProductItem>
            </div>
        </div>
</template>
<script>
import { getAll } from '@/utils/api/course'
import ProductItem from '@/components/ProductItem.vue';
export default {
    name: 'Home',
    components: {
        ProductItem,
    },
    setup() {
        const bindHandleA = (id) => {
            router.push({
                name: "Details",
                query: "1"
            });
        }
    },
    data() {
        return {
            //存储用axios二次封装再解耦操作获取的数据
            list: []
        }
    },
    created() {
        //用解耦后的方法获取数据
        getAll().then(res => {
            this.list = res;
        })
    },
    computed: {
        meat() {
            return this.list.filter(item => item.lable.includes("肉"))
        },
        vegetable() {
            return this.list.filter(item => item.lable.includes("素"))
        },
        beverage() {
            return this.list.filter(item => item.lable.includes("饮料"))
        },
        beverage() {
            return this.list.filter(item => item.lable.includes("饮料"))
        },
        desserts() {
            return this.list.filter(item => item.lable.includes("甜点"))
        }
    }
}
</script>
<style scoped>
/* 轮播图 */
.el-carousel__item h3 {
    display: flex;
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}

.CarouselChart {
    position: relative;
    right: 0px;
    width: 700px;
    height: 120%;
}

.picture {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sort {
    position: relative;
    bottom: 60px;
}

.icon {
    position: relative;
    top: 10px;
    right: 8px;
    width: 2em;
    height: 2em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>