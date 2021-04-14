const iconPathPrefix = "/task_icon/";
const iconExt = ".png";

const taskIconImagesStore = {
  state: {
    taskIconImages: [
      { name: "common", file: "common_128" },
      { name: "birthday", file: "birthday_96" },
      { name: "payment", file: "coin_stack_90" },
      { name: "urgent", file: "fire_96" },
      { name: "vue", file: "vue" }
    ].map((i) => {
      i.file = iconPathPrefix + i.file + iconExt;
      return i;
    })
  },
  getters: {
    getIconImages({ taskIconImages }) {
      return taskIconImages;
    },
    getImageByName({ taskIconImages }, name) {
      return taskIconImages.filter((img) => {
        return img.name === name;
      });
    }
  },
  mutations: {},
  actions: {}
};

export default taskIconImagesStore;
