<template>
  <b-container fluid="true" class="workspace">
    <!-- User Interface controls -->
    <div class="level workspace-header">
      <div class="level-left">
        <div class="level-item">Found {{ totalRows }} items</div>
        <div class="level-item">
          <b-button-group size="sm">
            <b-button variant="outline-dark" @click="toggleSidebar"
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
      :busy="loading"
    >
      <template #head()="column">
        <div class="workspace-thead" v-if="visibleColumn(column)">
          <span>{{ column.label }}</span>
          <workspace-column-filter
            :column="column"
            v-if="columnHasFilter(column)"
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

      <template #busy>
        <b-spinner
          style="width: 3rem; height: 3rem"
          label="Large Spinner"
          type="grow"
        ></b-spinner>
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
      :visible="showSidebar"
      @toggle-sidebar="toggleSidebar"
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
    WorkspaceColumnFilter: () => import("./WorkspaceColumnFilter")
  },
  data() {
    return {
      loading: false,
      showSidebar: false,
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
        content: ""
      },
      filterModal: {
        id: "filter-modal",
        title: "",
        content: ""
      },
      items: [],
      fields: fieldSpec
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
      .filter(f => f.sortable)
      .map(f => {
        return { text: f.label, value: f.key };
      });
    }
  },
  created() {
    this.initialParams();
  },
  mounted() {
    this.loadTableData();

    this.filterInput.pn = ["S", "M"];
  },
  methods: {
    initialParams() {
      this.filterInput = Object.fromEntries(
        this.fields
        .filter(f => Object.prototype.hasOwnProperty.call(f, "filter"))
        .map(f => {
          return [ f.key, null ];
        })
      );
    },
    visibleColumn(colSpec) {
      if ( Object.prototype.hasOwnProperty.call(colSpec.field, "label") ) {
        return colSpec.label.length > 0;
      }
      return false;
    },
    columnHasFilter(colSpec) {
      return Object.prototype.hasOwnProperty.call(colSpec.field, "filter");
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
    toggleSidebar() {
      this.showSidebar = !this.showSidebar;
    },
    async loadTableData() {
      this.loading = true;
      this.items = await this.mock();
      this.totalRows = this.items.length;
      this.loading = false;
    },
    mock() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(mockData);
        }, 4000);
      });
    }
  }
};
</script>
