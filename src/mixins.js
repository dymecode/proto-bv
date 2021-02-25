const acron = require("acron");
const Sentencer = require("sentencer");

export default {
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
    }
  }
}
