<template>
  <div class="hello container">
    <span class="hello-logo mb-1">
      <img alt="dyme logo" src="../assets/logo.png" />
    </span>
    <h1 class="mb-4">{{ msg }}</h1>
    <div class="row">
      <div class="col-4">
        <p>Sandbox playground for prototype Vue components with Bootstrap 4.</p>
      </div>
      <div class="col-3 offset-2">
        <label class="heading">Layouts</label>
        <ul>
          <li>
            <router-link to="/layouts/imr">IMR</router-link>
          </li>
        </ul>
      </div>
      <div class="col-3">
        <label class="heading">Documentation</label>
        <ul>
          <li>
            <a
              href="https://getbootstrap.com/docs/4.6/getting-started/introduction/"
              target="_blank"
              rel="noopener"
              >Bootstrap 4</a
            >
          </li>
          <li>
            <a
              href="https://bootstrap-vue.org/docs"
              target="_blank"
              rel="noopener"
              >Bootstrap-Vue</a
            >
          </li>
          <li>
            <a
              href="https://fontawesome.com/icons?d=gallery"
              target="_blank"
              rel="noopener"
              >Fontawesome Icons</a
            >
          </li>
          <li>
            <a
              href="https://github.com/ankurk91/vue-web-storage"
              target="_blank"
              rel="noopener"
              >Vue-Web-Storage</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="row footer">
      <div class="footer-item">{{ acronymMaker("dyme") }}</div>
    </div>
  </div>
</template>

<script>
import Mixins from "../mixins";
export default {
  name: "HelloWorld",
  mixins: [Mixins],
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
  color: #595959;
  width: 46vw;
  font-size: 1rem;
  font-family: "Domine", serif;
  font-weight: 300;
  font-kerning: auto;
  padding: 1rem;

  .hello-logo {
    display: inline-block;
    background-color: #ffffffee;
    border-radius: 5em;
    padding: 0.75em;
    img {
      width: 4em;
    }
  }

  .heading {
    text-align: left;
    width: 100%;
    font-weight: 700;
    color: lighten(#595959, 10%);
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0 0 0 0.5em;
    text-align: left;

    li {
      line-height: 1.5;
      margin-bottom: 0.5em;
    }
  }

  .footer {
    margin: 2em 0;
    padding: 0.5rem;
    border-top: 1px solid #59595955;
    color: #59595999;
    display: flex;
    justify-content: flex-end;

    .footer-item {
      font-size: 0.75rem;
      line-height: 1rem;
      padding: 0 0.5rem;
    }
  }
}
</style>
