<template>
  <div class="imr">
    <navbar></navbar>
    <content-tabs></content-tabs>
    <bottombar></bottombar>
  </div>
</template>

<script>
import Navbar from "../../components/Navbar.vue";
import Bottombar from "../../components/Bottombar.vue";
import ContentTabs from "../../components/ContentTabs/ContentTabs.vue";

export default {
  name: "Main",
  components: { Navbar, Bottombar, ContentTabs },
};
</script>
