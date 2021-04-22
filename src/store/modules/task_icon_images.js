const taskIconImagesStore = {
  state: {
    taskIconImages: [
      { name: "common", file: "/task_icon/common_128.png" },
      { name: "birthday", file: "/task_icon/birthday_96.png" },
      { name: "payment", file: "/task_icon/coin_stack_90.png" },
      { name: "urgent", file: "/task_icon/fire_96.png" },
      { name: "vue", file: "/task_icon/vue.png" }
    ]
  },
  getters: {
    getIconImages({ taskIconImages }) {
      return taskIconImages;
    },
    getIconImageByName: ({ taskIconImages }) => (name) => {
      return taskIconImages.find((img) => img.name === name);
    }
  },
  mutations: {},
  actions: {}
};

export default taskIconImagesStore;
