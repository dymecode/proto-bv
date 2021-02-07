<template>
  <div class="imr">
    <navbar></navbar>
    <page-view></page-view>
  </div>
</template>

<script>

import Navbar from '../../components/Navbar.vue';
import PageView from '../../components/PageView.vue';
export default {
  name: "Main",
  components: { Navbar, PageView }
};
</script>
