<script>
export default {
  name: "Main",
  components: {
    navbar: () => import("../../components/Navbar.vue"),
    bottombar: () => import("../../components/Bottombar.vue"),
    "content-tabs": () =>
      import("../../components/ContentTabs/ContentTabs.vue"),
  },
};
</script>

<template>
  <div class="imr">
    <navbar></navbar>
    <content-tabs></content-tabs>
    <bottombar></bottombar>
  </div>
</template>
