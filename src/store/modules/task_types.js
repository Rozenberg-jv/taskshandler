const taskTypesStore = {
  state: {
    taskTypes: [
      {
        name: "common",
        defaultImg: "/task_icon/common_128.png"
      },
      {
        name: "birthday",
        defaultImg: "/task_icon/birthday_96.png"
      },
      {
        name: "payment",
        defaultImg: "/task_icon/coin_stack_90.png"
      },
      {
        name: "urgent",
        defaultImg: "/task_icon/fire_96.png"
      }
    ]
  },
  getters: {
    getTaskTypes({ taskTypes }) {
      return taskTypes;
    },
    getTaskTypeByName: (state) => (name) => {
      console.log("name", name);
      return state.taskTypes.find((type) => {
        console.log("type", type);
        return type.name === name;
      });
    }
  },
  mutations: {},
  actions: {}
};

export default taskTypesStore;
