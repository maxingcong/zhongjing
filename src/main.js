import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import './assets/css/index.css'
import 'element-ui/lib/theme-chalk/index.css';
import "./utils";
import "./utils/filtersUtils"
import emums from './enum'

import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = true
Vue.prototype.$imgBaseUrl = 'http://120.24.224.218:8600/'
Vue.prototype.emumObj= emums

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
