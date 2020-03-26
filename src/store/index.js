import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import menu from './modules/menu'
import auth from './modules/auth'


console.log(menu)

export default new Vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        auth,
        menu
    }
});