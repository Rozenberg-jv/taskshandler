import { createStore } from "vuex";
import tasksStore from "./modules/tasks";
import taskTypesStore from "./modules/task_types";
import taskTimeTypesStore from "./modules/task_time_types";
import taskIconImagesStore from "./modules/task_icon_images";

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    tasksStore,
    taskTypesStore,
    taskTimeTypesStore,
    taskIconImagesStore
  }
});

export default store;
