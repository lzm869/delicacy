<template>
  <div class="boxxlk">
    <div class="boxxlk">
      <router-link :to="{
        name: 'Details', params: {
          id: headerk.id
        }
      }">
        <div class="foodtitle">{{ headerk.title }}</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: ['headerk'],
  name: 'headerk',
  computed: {
    headerks() {
      return this.$store.state.headerks
    }
  },
  data() {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foodtitle {
  font-size: 13px;
  color: black;
}

.fontsetup:hover {
  color: rgb(210, 184, 53);
}
.boxxlk {
    width: 150px;
}

.boxxlk :hover {
    width: 163px;
    background-color: #eae1e1;
}
</style>