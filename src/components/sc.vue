<template>
{{products}}
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    }
  },

};
</script>
<style>
.zpsc{
  position: relative;
  left: 30px;
}
.sc0 {
  border: 1px solid #f9f7f7;
  display: inline-block;
  margin: 10px;
  position: relative;
  bottom: 10px;
  height: 180px;
  width: 380px;
  border-bottom: 1px solid rgb(194, 177, 177);
  border-left: 1px solid rgb(194, 177, 177);
  border-right: 1px solid rgb(194, 177, 177);
  border-top: 1px solid rgb(194, 177, 177);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 5px;
  position: relative;
  top: 20px;
}

.wdsc {
  font-size: 30px;
  position: relative;
  top: 20px;
  left: 680px;
}

.ann {
  background-color: aquamarine;
  position: relative;
  bottom: 130px;
  left: 250px;
}

.ann:hover {
  background-color: aqua
}

.img1 {
  display: flex;
  width: 200px;
  height: 150px;
  position: relative;
  top: 8px;
  left: 5px;
}

.id2{
  font-size: 15px;
  position: relative;
  left: 230px;
  bottom: 130px;
}
.id1 {
  position: relative;
}

.id {
  position: relative;
  left: 25px;
  bottom: 19.5px;
}

.name2{
  font-size: 15px;
  position: relative;
  left: 200px;
  bottom: 130px;
}
.name {
  position: relative;
  left: 55px;
  bottom: 19.5px;
}
.name1 {
  position: relative;
}

.zpm4{
  font-size: 15px;
  position: relative;
  left: 185px;
  bottom: 130px;
}
.zpm2 {
  position: relative;
  left: 70px;
  bottom: 19.5px;
}
.zpm3 {
  position: relative;
}</style>