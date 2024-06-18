<template>

{{ $route.query.id }}

</template>
<script>

export default{
  computed:{
    Detail(){
      return this.$store.state.detail
    }
  }
}
</script>
