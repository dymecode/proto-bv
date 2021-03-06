<template>
  <div class="content-tabs">
    <b-tabs lazy v-model="tabIndex">
      <b-tab title="Dashboard">
        <dashboard-content></dashboard-content>
      </b-tab>
      <b-tab title="Workspace">
        <workspace-content></workspace-content>
      </b-tab>
      <b-tab title="Datasource">
        <datasource-content></datasource-content>
      </b-tab>
      <b-tab title="Settings">
        <settings-content></settings-content>
      </b-tab>

      <template #tabs-start>
        <div class="page-title">
          <span>IMR</span>
        </div>
      </template>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: "ContentTabs",
  components: {
    DashboardContent: () => import("./DashboardContent"),
    DatasourceContent: () => import("./DatasourceContent/DataSourceContent"),
    WorkspaceContent: () => import("./WorkspaceContent/WorkspaceContent"),
    SettingsContent: () => import("./SettingsContent"),
  },
  computed: {
    tabIndex: {
      get: function () {
        return this.$localStorage.get("main.tabIndex", 0);
      },
      set: function (newValue) {
        this.$localStorage.get("main.tabIndex", newValue);
      },
    },
  },
};
</script>
