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
        <a
            href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
            target="_blank"
            rel="noopener"
        >Bootstrap 4 Documentation</a
        >
      </li>
      <li>
        <a href="https://bootstrap-vue.org/docs" target="_blank" rel="noopener"
        >Bootstrap-Vue Documentation</a
        >
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
