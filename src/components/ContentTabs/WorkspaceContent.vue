<template>
  <b-container fluid>
    <!-- User Interface controls -->
    <b-row>
      <b-col class="my-1" lg="6">
        <b-form-group
          class="mb-0"
          label="Filter"
          label-align-sm="right"
          label-cols-sm="3"
          label-for="filter-input"
          label-size="sm"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filterInput"
              placeholder="Type to Search"
              type="search"
            ></b-form-input>

            <b-input-group-append>
              <b-button :disabled="!filterInput" @click="filterInput = ''"
                >Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col class="my-1" lg="6">
        <b-form-group
          v-slot="{ ariaDescribedby }"
          v-model="sortDirection"
          class="mb-0"
          description="Leave all unchecked to filter on all data"
          label="Filter On"
          label-align-sm="right"
          label-cols-sm="3"
          label-size="sm"
        >
          <b-form-checkbox-group
            v-model="filterOn"
            :aria-describedby="ariaDescribedby"
            class="mt-1"
          >
            <b-form-checkbox value="name">Name</b-form-checkbox>
            <b-form-checkbox value="age">Age</b-form-checkbox>
            <b-form-checkbox value="isActive">Active</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      :current-page="currentPage"
      :fields="xfields"
      :filter="filterInput"
      :filter-included-fields="filterOn"
      :items="xitems"
      :per-page="perPage"
      responsive
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :sort-direction="sortDirection"
      show-empty
      sticky-header="30rem"
      fixed
      foot-clone
      foot-variant="danger"
      head-row-variant="info"
      hover
      :id="id"
      no-border-collapse
      no-sort-reset
      outlined
      :primary-key="id"
      striped
      @filtered="onFiltered"
    >
      <template #cell(actions)="row">
        <a
          @click="info(row.item, row.index, $event.target)"
          class="btn btn-link"
        >
          <fa-icon icon="eye" size="lg" class="mr-1"></fa-icon>
        </a>
        <a @click="row.toggleDetails" class="btn btn-link">
          <fa-icon
            icon="save"
            size="lg"
            class="mr-1"
            v-if="row.detailsShowing"
          ></fa-icon>
          <fa-icon icon="edit" size="lg" class="mr-1" v-else></fa-icon>
        </a>
      </template>

      <template #row-details="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>

      <template #bottom-row>
        <b-td>{{ xfields }}</b-td>
        <b-td>{{ columns }}</b-td>
      </template>

      <template #head(cat)>
        <b-button size="sm">hi</b-button>
      </template>

      <template #thead-top>
        <b-tr>
          <b-th></b-th>
          <b-td colspan="3">this is this</b-td>
          <b-td colspan="4">that is that</b-td>
        </b-tr>
        <b-tr>
          <template v-for="(col, index) in xfields">
            <b-td :key="index">
              <b-dropdown :id="'dropdown-form-' + index" class="m-2">
                <template #button-content>
                  <fa-icon icon="filter" size="lg"></fa-icon>
                </template>
                <b-dropdown-form>
                  <b-form-group
                    label="Email"
                    label-for="dropdown-form-email"
                    @submit.stop.prevent
                  >
                    <b-form-input
                      id="dropdown-form-email"
                      size="sm"
                      placeholder="email@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label="Password"
                    label-for="dropdown-form-password"
                  >
                    <b-form-input
                      id="dropdown-form-password"
                      type="password"
                      size="sm"
                      placeholder="Password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-checkbox class="mb-3">Remember me</b-form-checkbox>
                  <b-button variant="primary" size="sm" @click="onClick"
                    >Sign In</b-button
                  >
                </b-dropdown-form>
              </b-dropdown>
            </b-td>
          </template>
        </b-tr>
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
          <b-pagination
            v-model="currentPage"
            :per-page="perPage"
            :total-rows="totalRows"
            align="right"
            class="my-0"
            size="sm"
          ></b-pagination>
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
  </b-container>
</template>

<script>
import fieldSpec from "../../schema/fields.json";
import mockData from "../../schema/MOCK_DATA.json";
export default {
  name: "WorkspaceContent",
  data() {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          name: { first: "Dickerson", last: "Macdonald" },
        },
        { isActive: false, age: 21, name: { first: "Larsen", last: "Shaw" } },
        {
          isActive: false,
          age: 9,
          name: { first: "Mini", last: "Navarro" },
          _rowVariant: "success",
        },
        { isActive: false, age: 89, name: { first: "Geneva", last: "Wilson" } },
        { isActive: true, age: 38, name: { first: "Jami", last: "Carney" } },
        { isActive: false, age: 27, name: { first: "Essie", last: "Dunlap" } },
        { isActive: true, age: 40, name: { first: "Thor", last: "Macdonald" } },
        {
          isActive: true,
          age: 87,
          name: { first: "Larsen", last: "Shaw" },
          _cellVariants: { age: "danger", isActive: "warning" },
        },
        { isActive: false, age: 26, name: { first: "Mitzi", last: "Navarro" } },
        {
          isActive: false,
          age: 22,
          name: { first: "Genevieve", last: "Wilson" },
        },
        { isActive: true, age: 38, name: { first: "John", last: "Carney" } },
        { isActive: false, age: 29, name: { first: "Dick", last: "Dunlap" } },
      ],
      fields: [
        {
          key: "name",
          label: "Person full name",
          sortable: true,
          sortDirection: "desc",
        },
        {
          key: "age",
          label: "Person age",
          sortable: true,
          class: "text-center",
        },
        {
          key: "isActive",
          label: "Is Active",
          formatter: (value) => {
            return value ? "Yes" : "No";
          },
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true,
        },
        { key: "actions", label: "Actions" },
      ],

      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
      sortBy: "dts",
      sortDesc: false,
      sortDirection: "asc",
      filterInput: null,
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
      xitems: mockData,
      xfields: fieldSpec,
    };
  },
  computed: {
    totalRows() {
      return this.xitems.length;
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
  },
};
</script>
