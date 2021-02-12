<template>
  <div class="imr">
    <navbar></navbar>
    <view-header></view-header>
    <page-view></page-view>
    <bottombar></bottombar>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import PageView from "../../components/PageView.vue";
import Bottombar from "../../components/Bottombar.vue";
import ViewHeader from "../../components/PageHeader.vue";

export default {
  name: "Form",
  components: { Navbar, PageView, Bottombar, ViewHeader },
};
</script>
