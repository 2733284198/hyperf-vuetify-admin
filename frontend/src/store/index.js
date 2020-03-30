import Vue from "vue";
import Vuex from "vuex";
import common from "./module/common";
import user from "./module/user";
import snackbar from "./module/snackbar";
import cloneDeep from "lodash/cloneDeep";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    user,
    snackbar
  },
  mutations: {
    // 重置vuex本地储存状态
    resetStore(state) {
      Object.keys(state).forEach(key => {
        state[key] = cloneDeep(window.SITE_CONFIG["storeState"][key]);
      });
    }
  },
  strict: process.env.NODE_ENV !== "production"
});
