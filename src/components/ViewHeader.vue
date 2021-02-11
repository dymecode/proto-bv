<template>
  <div class="view-header container-fluid w-100">
    <div class="row">
      <b-tabs content-class="mt-3">
        <p class="title">IMR</p>
        <b-tab title="First" active>
          <div class="view-sidebar border-bottom-0 col-md-3 col-xl-2 col-12">
            <sidebar></sidebar>
          </div>
          <div class="col-md-9 col-xl-8 py-md-3 pl-md-5 view-content">
            <div
              class="d-md-flex flex-md-row-reverse align-items-center justify-content-between"
            ></div>
          </div>
        </b-tab>
        <b-tab title="Second"><p>I'm the second tab</p></b-tab>
        <b-tab title="Disabled" disabled><p>I'm a disabled tab!</p></b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "ViewHeader",
  components: {Sidebar}
};
</script>
