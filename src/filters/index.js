import Vue from "vue";

Vue.filter("localeString", function (value) {
  if ( value instanceof Date ) {
    return value.toLocaleDateString();
  }
  return value;
});

Vue.filter("implodeArray", function (value) {
  if ( value instanceof Array ) {
    let result = "";
    value.forEach(e => (result += e + " "));
    return result;
  }
  return null;
});
