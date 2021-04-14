const taskTimeTypesStore = {
  state: {
    taskTimeTypes: [
      {
        name: "single",
        image: "/icons_dark/clock-single-128.png"
      },
      {
        name: "periodic",
        image: "/icons_dark/clock-periodic-128.png"
      },
      {
        name: "continuous",
        image: "/icons_dark/clock-continuous-128.png"
      }
    ]
  },
  getters: {
    getTimeTypes({ taskTimeTypes }) {
      return taskTimeTypes;
    }
  },
  mutations: {},
  actions: {}
};

export default taskTimeTypesStore;
