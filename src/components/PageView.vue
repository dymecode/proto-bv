<template functional>
  <div class="page-view container-fluid">
    <view-header></view-header>
    <div class="row flex-xl-nowrap2">
      <div class="view-sidebar border-bottom-0 col-md-3 col-xl-2 col-12">
        <sidebar></sidebar>
      </div>
      <main class="col-md-9 col-xl-8 py-md-3 pl-md-5 view-content">
        <div
            class="d-md-flex flex-md-row-reverse align-items-center justify-content-between"
        ></div>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import ViewHeader from "./ViewHeader.vue";

export default {
  name: "PageView",
  components: {
    ViewHeader,
    Sidebar,
  },
};
</script>
