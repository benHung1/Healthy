import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faPlus, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import "./fonts/fonts.css";

/* add icons to the library */
library.add(faPlus, faArrowRightLong);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
