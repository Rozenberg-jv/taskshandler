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
