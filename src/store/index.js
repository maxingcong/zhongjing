import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

import menu from './modules/menu'
import auth from './modules/auth'


console.log(menu)

export default new Vuex.Store({
    // strict: process.env.NODE_ENV !== "production",
    // actions,
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        auth,
        // user,
        menu
        // layout,
        // enterprise
    }
});