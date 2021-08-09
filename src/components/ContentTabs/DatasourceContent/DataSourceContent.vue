<template>
  <b-card no-body class="datasource-content">
    <b-tabs pills card vertical nav-wrapper-class="col-xl-2 col-md-3">
      <b-tab title="Activity">
        <content-header></content-header>
      </b-tab>
      <b-tab title="Options"><b-card-text>Tab contents 2</b-card-text></b-tab>
      <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
    </b-tabs>
  </b-card>
</template>

<script>
export default {
  name: "DatasourceContent",
  components: {
    ContentHeader: () => import("../../ContentHeader.vue")
  }
};
</script>
