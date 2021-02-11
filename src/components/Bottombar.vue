<template>
  <div class="bottombar">
    <div class="bar-toggle">
      <fa-icon icon="chevron-up"></fa-icon>
    </div>
    <div class="bar-item">{{ item1 | implodeArray }}</div>
    <div class="bar-item">{{ item2 | implodeArray }}</div>
  </div>
</template>

<script>
const acron = require("acron");
export default {
  name: "Bottombar",
  computed: {
    item1: function () {
      return acron("omg");
    },
    item2: function () {
      return acron("lesms");
    }
  }
}
</script>
