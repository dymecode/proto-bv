import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("fa-icon", FontAwesomeIcon);
