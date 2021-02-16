<template>
  <div class="datasource-content">
    <content-header></content-header>
  </div>
</template>

<script>
const { default: ContentHeader } = require("../ContentHeader.vue");

export default {
  name: "DatasourceContent",
  components: { ContentHeader },
};
</script>
