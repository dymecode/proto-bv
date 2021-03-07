<template>
  <b-dropdown
    :id="'thead-filter-dropdown-' + column.field.key"
    size="sm"
    variant="light"
    menu-class="mt-2"
    right
  >
    <template #button-content>
      <b-icon-filter-circle-fill v-if="active"></b-icon-filter-circle-fill>
      <b-icon-filter-circle v-else></b-icon-filter-circle>
    </template>

    <b-dropdown-form>
      <b-form-group :label="column.field.label" label-size="sm">
        <component :is="inputControl(column.field.filter.type)"></component>
      </b-form-group>
    </b-dropdown-form>
  </b-dropdown>
</template>

<script>
import { BIconFilterCircle, BIconFilterCircleFill } from "bootstrap-vue";
export default {
  name: "WorkspaceColumnFilter",
  props: {
    column: {},
    active: Boolean,
  },
  components: {
    BIconFilterCircle,
    BIconFilterCircleFill,
    "column-filter-text": () => import("./ColumnFilter/ColumnFilterText"),
    "column-filter-treeselect-multi": () =>
      import("./ColumnFilter/ColumnFilterTreeselectMulti"),
  },
  computed: {},
  methods: {
    inputControl(key) {
      return "column-filter-" + key;
    },
  },
};
</script>
