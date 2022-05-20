import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps"; // Import package
Vue.config.productionTip = false;
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyAeeJmjRfPh0jw4uQ5iOKyw1RfFNSNs84A",
    libraries: "places",
  },
});