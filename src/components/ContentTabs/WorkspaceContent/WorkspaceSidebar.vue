<template>
  <b-sidebar
    id="sidebar-right"
    right
    z-index="1025"
    class="sidebar-right"
    :visible="visible"
  >
    <template #header>
      <h5>Sidebar</h5>
      <button
        type="button"
        class="close m-0"
        aria-label="Close"
        @click="$emit('toggle-sidebar')"
      >
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
        <h6 class="mb-0">Add</h6>
      </template>

      <b-card-body>
        <pre>{{ form }}</pre>
      </b-card-body>
    </b-card>

    <template #footer>
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
    visible: Boolean,
  },
  computed: {},
  methods: {},
};
</script>
