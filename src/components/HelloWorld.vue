<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>{{ msg }}</h1>
    <div class="row mt-4">
      <div class="col-6">
        <label class="heading">Layouts</label>
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
      </div>
      <div class="col-6">
        <label class="heading">Links</label>
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
            <a
              href="https://bootstrap-vue.org/docs"
              target="_blank"
              rel="noopener"
              >Bootstrap-Vue Documentation</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss">
.hello {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #595959;

  .heading {
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 0.25px;
    font-size: 0.875rem;
    width: 100%;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: left;
    li {
      line-height: 1.4;
      margin-bottom: 1rem;
    }
  }
}
</style>
