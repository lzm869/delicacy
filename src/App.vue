<template>
  <vue-header />
  <Right />
  <router-view v-if="isRouterAlive" :key="route.fullPath"></router-view>
  <SideMenu />
</template>

<script>
import { useRoute } from 'vue-router'
import VueHeader from "@/navigation/header.vue";
import SideMenu from "@/navigation/SideMenu.vue";
import Right from "@/navigation/right.vue"
export default {
  provide() {
    return {
      reload: this.reload
    }
  },
  setup() {
    const route = useRoute()
    return {
      route
    };
  },
  name: 'App',
  components: {
    VueHeader,
    SideMenu,
    Right
  },
  data() {
    return { isRouterAlive: true };
  },
  methods: {
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style></style>
