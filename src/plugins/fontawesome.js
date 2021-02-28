import Vue from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEye,
  faQuestionCircle,
  faLanguage,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleDown,
  faAngleLeft,
  faAngleRight,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faEye,
  faQuestionCircle,
  faLanguage,
  faUserCircle
);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("fa-icon", FontAwesomeIcon);
