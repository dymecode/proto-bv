<template>
  <div class="brand-footer row">
    <div class="col-4">
      <b-img v-bind="placeHolderAttribs"></b-img>
      <div class="logo-font">mas</div>
    </div>
    <div class="col-4"></div>
    <div class="col-4"></div>
  </div>
</template>

<script>
export default {
  name: "BrandFooter",
  data() {
    return {
      placeHolderAttribs: {
        blank: true,
        width: 75,
        height: 75,
        class: "m1",
        blankColor: "rgba(255, 255, 255, 0.5)"
      }
    };
  }
};
</script>
