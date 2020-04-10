import Vue from 'vue'
import Vuex from 'vuex'

import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)


const ipcRenderer = require("electron").ipcRenderer;
import { remote } from "electron";


export default new Vuex.Store({
    state: {
        listData: [],
        editTaskIsShow: true,
        windowSize: [1000, 1000]
    },
    mutations: {
        editTaskShow(state, step) {
            state.editTaskIsShow = step;
        },
        editListData(state, step) {
            state.listData = step;
        },
        editWindowSize(state, step) {
            state.windowSize[0] = step.width;
            state.windowSize[1] = step.height;
            remote.getCurrentWindow().setSize(state.windowSize[0], state.windowSize[1])
        }
    },

    modules,
    plugins: [
        createPersistedState(),
        // createSharedMutations()
    ],
    strict: process.env.NODE_ENV !== 'production'
})
