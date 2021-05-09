<template>
  <div class="home">
    <HelloWorld msg="proto-bv" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
.home {
  position: relative;
  width: 100vw;
  height: 100vh;
}
</style>
