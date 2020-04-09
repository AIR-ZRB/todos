import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)


const ipcRenderer = require("electron").ipcRenderer;

export default new Vuex.Store({
    state: {
        listData: [],
        editTaskIsShow: true,
    },
    mutations: {
        editTaskShow(state, step) {
            state.editTaskIsShow = step;
        },
        editListData(state, step) {
            state.listData = step;
        },
    },

    modules,
    plugins: [
        createPersistedState(),
        // createSharedMutations()
    ],
    strict: process.env.NODE_ENV !== 'production'
})
