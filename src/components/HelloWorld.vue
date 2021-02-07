<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h3>Layouts</h3>
    <ul>
      <li>
        <router-link to="/layouts/imr">IMR</router-link>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
        >eslint</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://getbootstrap.com/docs/4.6/getting-started/introduction/" target="_blank" rel="noopener">Bootstrap
          4 Documentation</a>
      </li>
      <li>
        <a href="https://bootstrap-vue.org/docs" target="_blank" rel="noopener">Bootstrap-Vue Documentation</a>
      </li>


    </ul>

  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
