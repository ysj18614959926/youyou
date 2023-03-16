import { createStore } from "vuex";
export default createStore({
    state: {
        homePage: {}
    },
    getters: {},
    mutations: {
        updateHomePage(state, datas) {
            state.homePage = datas;
        }
    },
    actions: {},
    modules: {}
});