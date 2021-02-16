// import Vue from "vue";
// import Vuex from "vuex";

// Vue.useContext(Vuex);

// export default new Vuex.Store({
//   state: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// });

import { createStore } from "vuex";
import tasksStore from "./modules/tasks";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tasksStore
  }
});

export default store;
