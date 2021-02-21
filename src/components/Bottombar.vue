<template>
  <div :class="drawerClass('panel')">
    <div class="bottombar">
      <a class="bar-toggle" @click="toggleDrawer()">
        <fa-icon :icon="drawerClass('icon')" fixed-width></fa-icon>
      </a>
      <div class="bar-item">
        {{ acronymMaker("omg") }}
      </div>
      <div class="bar-item">{{ wordYall }}</div>
    </div>
    <div class="drawer-content">
      <brand-footer></brand-footer>
    </div>
  </div>
</template>

<script>
import BrandFooter from "./BrandFooter.vue";
const acron = require("acron");
const Sentencer = require("sentencer");
export default {
  name: "Bottombar",
  components: { BrandFooter },
  data() {
    return {
      showDrawer: false,
    };
  },
  computed: {
    wordYall: function () {
      let gen = Sentencer.make("{{ an_adjective }} {{ noun }}.");
      return gen.charAt(0).toUpperCase() + gen.slice(1) + " ";
    },
  },
  methods: {
    acronymMaker(string) {
      let result = "";
      let words = acron(string);
      words.forEach((word) => {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      });
      return result;
    },
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
