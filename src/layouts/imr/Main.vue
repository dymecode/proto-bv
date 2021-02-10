<template>
  <div class="imr">
    <navbar></navbar>
    <page-view></page-view>
    <bottombar></bottombar>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import PageView from "../../components/PageView.vue";
import Bottombar from "../../components/Bottombar.vue";

export default {
  name: "Main",
  components: { Navbar, PageView, Bottombar }
};
</script>
