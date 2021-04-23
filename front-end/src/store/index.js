import Vue from 'vue'
import Vuex from 'vuex'

import product from "./modules/product/product"
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        product,
    },
    plugins: [createPersistedState()]
})