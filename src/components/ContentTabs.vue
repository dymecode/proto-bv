<template>
  <div class="content-tabs">
    <b-tabs lazy>
      <b-tab title="Dashboard" active>
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
import DashboardContent from "./ContentTabs/DashboardContent.vue";
import DatasourceContent from './ContentTabs/DatasourceContent.vue';
import SettingsContent from './ContentTabs/SettingsContent.vue';
import WorkspaceContent from "./ContentTabs/WorkspaceContent.vue";
export default {
  name: "ContentTabs",
  components: {
    DashboardContent,
    WorkspaceContent,
    DatasourceContent,
  },
};
</script>

SettingsContent
