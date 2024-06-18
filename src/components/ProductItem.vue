<template>
  <div class="product">
    <router-link :to="{
      name: 'Details', params: {
        id: product.id,
      }
    }">
      <span class="product-zpm" v-bind:title="message">
        <img :src="product.url" class="picture">
      </span>
      <table>
        <tbody>
          <tr>
            <td class="title">{{ product.title }}</td>
            <td class="uploader">上传人：{{ product.uploader }}</td>
            <td class="uploadtime">发布日期：{{ product.uploadtime }}</td>
          </tr>
        </tbody>
      </table>
    </router-link>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  data() {
    sta: false
  },
  methods: {
    changeSta() {
      this.sta = !this.sta
      console.log('aa', this.sta)
    },
    add() {
      if (this.products.findIndex(products => products.id === this.product.id) !== -1) {
        this.$store.dispatch('del_item', this.product.id)
      }
      else {
        let newObject = {
          id: this.product.id, name: this.product.name
          , zpm: this.product.zpm, src: this.product.src
        }
        this.$store.dispatch('addToCart', newObject)
      }
    },
    onClick() {
      // 赋值取反
      this.showCode = !this.showCode;
    },
    counter() {
      this.count++;
    }
  }
}
</script>
<style scoped>
.title {
  font-weight: bold;
  color: black;
  font-size: 18px;
}

.uploadtime {
  position: absolute;
  font-size: 11px;
  bottom: 0px;
  right: 0px;
  color: rgb(122, 111, 97);
}

.uploader {
  position: absolute;
  font-size: 11px;
  bottom: 18px;
  right: 0px;
  color: rgb(122, 111, 97);
}

.product:hover {
  box-shadow: 2px 2px 2px 2px rgb(146, 146, 146);
}

.picture {
  width: 250px;
  height: 250px;
}
</style>
