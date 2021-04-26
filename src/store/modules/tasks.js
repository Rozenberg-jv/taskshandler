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
    },
    getTaskById: ({ taskList }) => (id) => {
      return taskList[id];
    }
  },
  mutations: {
    SET_FULL_TASKS(state, tasks) {
      state.taskList = tasks;
      // console.log(state.taskList);
    },
    ADD_NEW_TASK({ taskList }, task) {
      const id = uuid();
      task.id = id;
      tasksRootRef.child(id).set(task, (e) => {
        if (e) {
          console.error(e);
          return null;
        }
      });

      taskList[task.id] = task;
      console.log("new task", id);
    },
    UPDATE_TASK({ taskList }, task) {
      tasksRootRef
        .child(task.id)
        .update(task)
        .then(function() {
          console.log("update succeeded", task);
          taskList[task.id] = task;
        })
        .catch(function(error) {
          console.log(`Update failed[${task.id}]: ` + error.message);
        });
    },
    REMOVE_TASK({ taskList }, id) {
      tasksRootRef
        .child(id)
        .remove()
        .then(function() {
          console.log("Remove succeeded");
          delete taskList[id];
        })
        .catch(function(error) {
          console.log(`Remove failed[${id}]: ` + error.message);
        });
    }
  },
  actions: {
    async initTaskList({ commit }) {
      await tasksRootRef
        .get()
        .then((data) => {
          const tasks = data.val();
          commit("SET_FULL_TASKS", tasks);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addNewTask({ commit, state }, task) {
      // console.log("taskList", state.taskList);
      // console.log("task", task);
      if (Object.keys(state.taskList).includes(task.id)) {
        console.log("contains");
        commit("UPDATE_TASK", task);
      } else {
        console.log("not contains");
        commit("ADD_NEW_TASK", task);
      }
    },
    removeTask({ commit }, id) {
      commit("REMOVE_TASK", id);
    }
  }
};

export default tasksStore;
