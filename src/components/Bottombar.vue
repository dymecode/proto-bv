<template>
  <div :class="drawerClass('panel')">
    <div class="bottombar">
      <a class="bar-toggle" @click="toggleDrawer()">
        <fa-icon :icon="drawerClass('icon')" fixed-width></fa-icon>
      </a>
      <div class="bar-item">{{ item1 | implodeArray }}</div>
      <div class="bar-item">{{ item2 | implodeArray }}</div>
    </div>
    <div class="drawer-content">
      <brand-footer></brand-footer>
    </div>
  </div>
</template>

<script>
import BrandFooter from "./BrandFooter.vue";
const acron = require("acron");
export default {
  name: "Bottombar",
  components: { BrandFooter },
  computed: {
    item1: function () {
      return acron("omg");
    },
    item2: function () {
      return acron("lmsms");
    },
  },
  data() {
    return {
      showDrawer: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.showDrawer = !this.showDrawer;
    },
    drawerClass(element) {
      if (this.showDrawer) {
        switch (element) {
          case "panel":
            return "bottom-drawer open";
          case "icon":
            return "chevron-down";
          default:
            return "";
        }
      } else {
        switch (element) {
          case "panel":
            return "bottom-drawer";
          case "icon":
            return "chevron-up";
          default:
            return "";
        }
      }
    },
  },
};
</script>
