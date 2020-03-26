import Vue from "vue";
import vueAwesomeCountdown from "vue-awesome-countdown";
import location from '@/assets/js/location'

Vue.use(vueAwesomeCountdown);
Vue.prototype.$location = location
