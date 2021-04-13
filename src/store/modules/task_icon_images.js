const iconPathPrefix = "/task_icon/";
const iconExt = ".png";

const taskIconImagesStore = {
  state: {
    taskIconImages: [
      "birthday_96",
      "coin_stack_90",
      "common_128",
      "fire_96",
      "vue"
    ].map((i) => iconPathPrefix + i + iconExt)
  },
  getters: {
    getIconImages({ taskIconImages }) {
      return taskIconImages;
    }
  },
  mutations: {},
  actions: {}
};

export default taskIconImagesStore;
