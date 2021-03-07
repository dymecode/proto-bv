<template>
  <b-container fluid="true" class="workspace">
    <!-- User Interface controls -->
    <div class="level workspace-header">
      <div class="level-left">
        <div class="level-item">Found {{ totalRows }} items</div>
        <div class="level-item">
          <b-button-group size="sm">
            <b-button variant="outline-dark" v-b-toggle.sidebar-right
              >Filters</b-button
            >
            <b-button variant="dark">
              <fa-icon icon="times-circle" size="sm"></fa-icon>
            </b-button>
          </b-button-group>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <workspace-pagination
            :current-page.sync="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            @change="changePage"
          ></workspace-pagination>
        </div>
      </div>
    </div>

    <!-- Main table element -->
    <b-table
      id="workspace-table"
      class="workspace-table"
      :current-page="currentPage"
      :fields="fields"
      :filter="filterInput"
      :filter-included-fields="filterOn"
      :items="items"
      :per-page="perPage"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      show-empty
      :sticky-header="stickyHeight"
      no-border-collapse
      no-sort-reset
      no-select-on-click
      striped
      small
      primary-key="id"
      @filtered="onFiltered"
    >
      <template #head()="column">
        <div class="workspace-thead" v-if="column.label.length > 0">
          <span>{{ column.label }}</span>
          <workspace-column-filter
            :column="column"
            :active="columnHasFilter(column.field.key)"
            v-if="column.field.filter"
          ></workspace-column-filter>
        </div>
      </template>
      <template #cell(actions)="row">
        <a
          @click="info(row.item, row.index, $event.target)"
          class="btn btn-link"
        >
          <fa-icon icon="eye" size="sm" class="mr-1"></fa-icon>
        </a>
      </template>
    </b-table>

    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <b-input-group append="per page" class="mb-0" size="sm">
            <b-form-select
              id="per-page-select"
              v-model="perPage"
              :options="pageOptions"
              size="sm"
            ></b-form-select>
          </b-input-group>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <workspace-pagination
            :current-page.sync="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            @change="changePage"
          ></workspace-pagination>
        </div>
      </div>
    </div>

    <!-- Info modal -->
    <b-modal
      :id="infoModal.id"
      :title="infoModal.title"
      ok-only
      @hide="resetInfoModal"
    >
      <pre>{{ infoModal.content }}</pre>
    </b-modal>

    <b-modal
      id="workspace-filters"
      title="workspace-filters"
      @hide="resetFilterModal"
    >
      <pre>{{ filterModal.content }}</pre>
    </b-modal>

    <workspace-sidebar
      :current="filterOn"
      :form="filterInput"
    ></workspace-sidebar>
  </b-container>
</template>

<script>
import fieldSpec from "../../../schema/fields.json";
import mockData from "../../../schema/MOCK_DATA.json";

export default {
  name: "WorkspaceContent",
  components: {
    WorkspaceSidebar: () => import("./WorkspaceSidebar"),
    WorkspacePagination: () => import("./WorkspacePagination"),
    WorkspaceColumnFilter: () => import("./WorkspaceColumnFilter"),
  },
  data() {
    return {
      totalRows: 0,
      currentPage: 1,
      perPage: 30,
      pageOptions: [30, 60, 90, 120],
      sortBy: "dts",
      sortDesc: false,
      sortDirection: "asc",
      filterInput: {},
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      filterModal: {
        id: "filter-modal",
        title: "",
        content: "",
      },
      items: mockData,
      fields: fieldSpec,
    };
  },
  computed: {
    stickyHeight() {
      let h = this.pageHeight;
      return h - 280 + "px";
    },
    pageHeight() {
      return window.innerHeight;
    },
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => {
          return { text: f.label, value: f.key };
        });
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    columnHasFilter(key) {
      return this.filterInput.hasOwnProperty(key);
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    filter(item, index, button) {
      this.filterModal.title = `Row index: ${index}`;
      this.filterModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.filterModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    resetFilterModal() {
      this.filterModal.title = "";
      this.filterModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    changePage(value) {
      this.currentPage = value;
    },
  },
};
</script>
