import { tasksRootRef } from "../../plugins/firebase";
import moment from "moment";
import { v4 as uuid } from "uuid";

const tasksStore = {
  namespaced: true,

  state: {
    taskList: {}
  },
  getters: {
    getTasksByDate: ({ taskList }) => {
      const tasks = Object.values(taskList);

      const map = tasks.reduce(function(acc, item) {
        let date = moment.unix(item.date).format("YYYY-MM-DD");
        // const date = new Date(item.date * 1000).toDateString();

        if (!acc.has(date)) {
          acc.set(date, [item]);
        } else {
          acc.get(date).push(item);
        }

        return acc;
      }, new Map());

      const result = new Map(
        [...map.entries()].sort(
          (e1, e2) => moment(e1[0]).unix() - moment(e2[0]).unix()
        )
      );

      return result;
    }
  },
  mutations: {
    SET_FULL_TASKS(state, tasks) {
      state.taskList = tasks;
    },
    ADD_NEW_TASK({ taskList }, task) {
      const newTaskRef = tasksRootRef.push(task, (e) => {
        if (e) {
          console.error(e);
          return null;
        }
      });

      const id = newTaskRef.getKey();
      task.id = id;
      taskList[task.id] = task;
    },
    REMOVE_TASK({ taskList }, id) {
      tasksRootRef
        .child(id)
        .remove()
        .then(function() {
          console.log("Remove succeeded.");
          delete taskList[id];
        })
        .catch(function(error) {
          console.log(`Remove failed[${id}]: ` + error.message);
        });
    }
  },
  actions: {
    initTaskList({ commit }) {
      tasksRootRef
        .get()
        .then((data) => {
          const tasks = data.val();
          commit("SET_FULL_TASKS", tasks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addNewTask({ commit }, task) {
      commit("ADD_NEW_TASK", task);
    },
    removeTask({ commit }, id) {
      // check
      commit("REMOVE_TASK", id);
    }
  }
};

export default tasksStore;
