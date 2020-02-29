import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/'
import './assets/css/index.css'

import ElementUI from 'element-ui'
Vue.use(ElementUI)

Vue.config.productionTip = true

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
