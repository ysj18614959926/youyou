import { createStore } from "vuex";
export default createStore({
    state: {
        isLoad: true,
        isShow: true,
        homePage: {}
    },
    getters: {},
    mutations: {
        updateHomePage(state, datas) {
            state.homePage = datas;
        },
        updateLoad(state, isLoad) {
            state.isLoad = isLoad;
        },
        reloadPage(state) {
            state.isShow = false;
            setTimeout(() => {
                state.isShow = true;
            }, 0);
        }
    },
    actions: {},
    modules: {}
});