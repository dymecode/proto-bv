<template>
  <b-pagination
    v-model="current"
    :per-page="perPage"
    :total-rows="totalRows"
    align="right"
    class="my-0"
    size="sm"
    hide-ellipsis
    aria-controls="workspace-table"
  >
    <template #first-text>
      <fa-icon icon="angle-double-left" size="sm"></fa-icon>
    </template>
    <template #prev-text>
      <fa-icon icon="angle-left" size="sm"></fa-icon>
    </template>
    <template #next-text>
      <fa-icon icon="angle-right" size="sm"></fa-icon>
    </template>
    <template #last-text>
      <fa-icon icon="angle-double-right" size="sm"></fa-icon>
    </template>
  </b-pagination>
</template>

<script>
export default {
  name: "WorkspacePagination",
  props: {
    currentPage: Number,
    perPage: Number,
    totalRows: Number
  },
  computed: {
    current: {
      get: function () {
        return this.currentPage;
      },
      set: function (value) {
        this.$emit("change", value);
      }
    }
  }
};
</script>
