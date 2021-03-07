<template>
  <b-sidebar
    id="sidebar-right"
    title="Sidebar"
    right
    shadow
    z-index="1025"
    class="sidebar-right"
  >
    <template #header="{ hide }">
      <h5>Sidebar</h5>
      <button type="button" class="close m-0" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </template>

    <b-card no-body class="mx-3 mb-2">
      <template #header>
        <h6 class="mb-0">Current</h6>
      </template>

      <b-list-group flush v-if="current.length > 0">
        <template v-for="(item, index) in current">
          <b-list-group-item :key="index">{{ item }}</b-list-group-item>
        </template>
      </b-list-group>

      <b-card-body v-else> No active filters.</b-card-body>
    </b-card>

    <b-card no-body class="mx-3 mb-2">
      <template #header>
        <h6 class="mb-0">Hello World</h6>
      </template>

      <b-list-group flush>
        <b-list-group-item>Cras justo odio</b-list-group-item>
        <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
        <b-list-group-item>Vestibulum at eros</b-list-group-item>
      </b-list-group>
    </b-card>

    <template #footer="{ hide }">
      <div class="px-3">
        <b-button size="sm" block variant="primary">Apply</b-button>
        <b-button size="sm" block variant="outline-danger">Reset</b-button>
      </div>
    </template>
  </b-sidebar>
</template>

<script>
export default {
  name: "WorkspaceSidebar",
  props: {
    current: {},
    form: {},
  },
};
</script>
