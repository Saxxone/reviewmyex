<template>
  <div class="position-relative h-100-vh">
    <nuxt/>
<!--    <BottomBar class="position-fixed w-100 bottom-bar"/>-->
  </div>
</template>

<script>
export default {
  name: "default"
}
</script>

<style>
.bottom-bar{
  bottom: 0;
  left: 0;
}
.h-100-vh{
  /*height: 100vh;*/
}
</style>
