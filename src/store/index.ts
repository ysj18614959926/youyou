import { createStore } from "vuex";
export default createStore({
    state: {
        isLoad: true,
        homePage: {}
    },
    getters: {},
    mutations: {
        updateHomePage(state, datas) {
            state.homePage = datas;
        },
        updateLoad(state, isLoad) {
            state.isLoad = isLoad;
        }
    },
    actions: {},
    modules: {}
});