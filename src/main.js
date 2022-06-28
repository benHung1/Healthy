import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faPlus,
  faArrowRightLong,
  faHeart,
  faFaceGrinHearts,
  faVirus,
  faFaceDizzy,
  faCannabis,
} from "@fortawesome/free-solid-svg-icons";

import "./fonts/fonts.css";

/* add icons to the library */
library.add(
  faPlus,
  faArrowRightLong,
  faHeart,
  faFaceGrinHearts,
  faVirus,
  faFaceDizzy,
  faCannabis
);

import Vue3Marquee from "vue3-marquee";
import "vue3-marquee/dist/style.css";

createApp(App)
  .use(Vue3Marquee)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
