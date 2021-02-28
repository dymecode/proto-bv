const acronym = require("acron");

export default {
  computed: {},
  methods: {
    acronymMaker(string) {
      let result = "";
      let words = acronym(string);
      words.forEach(word => {
        result += word.charAt(0).toUpperCase() + word.slice(1) + " ";
      });
      return result;
    }
  }
};
