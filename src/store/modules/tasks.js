const tasksStore = {
  namespaced: true,

  state: {
    example_tasks: {
      "5": {
        id: 5,
        title: "title5",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "07.06.2021"
      },
      "1": {
        id: 1,
        title: "title1",
        text: "text1",
        imageName: "logo.png",
        date: "05.06.2021"
      },
      "11": {
        id: 11,
        title: "title11",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "05.06.2021"
      },
      "2": {
        id: 2,
        title: "title2",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        imageName: "logo.png",
        date: "06.06.2021"
      },
      "3": {
        id: 3,
        title: "title3",
        text:
          "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "06.06.2021"
      },
      "4": {
        id: 4,
        title: "title4",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "07.06.2021"
      },
      "6": {
        id: 6,
        title: "title6",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "07.06.2021",
        imageName: "logo.png"
      },
      "7": {
        id: 7,
        title: "title7",
        text:
          "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "08.06.2021"
      },
      "8": {
        id: 8,
        title: "title8",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "08.06.2021",
        imageName: "logo.png"
      },
      "9": {
        id: 9,
        title: "title9",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "08.06.2021"
      },
      "10": {
        id: 10,
        title: "title10",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "08.06.2021"
      },
      "12": {
        id: 12,
        title: "title12",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "09.06.2021",
        imageName: "logo.png"
      },
      "13": {
        id: 13,
        title: "title13",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "09.06.2021"
      },
      "14": {
        id: 14,
        title: "title14",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
        date: "10.06.2021"
      }
    }
  },
  getters: {
    getTasksByDate: ({ example_tasks }) => {
      // console.log("gettasks", example_tasks);

      const tasks = Object.values(example_tasks);
      // console.log(tasks);
      /* const result = tasks.reduce((acc, item) => {
        let date = item.date;
        if (acc[date]) {
          acc[date].push(item);
        } else {
          acc[date] = [item];
        }
        return acc;
      }, {}); */
      const result = tasks.reduce((acc, item) => {
        let date = item.date;
        /* console.log(date);
        console.log(item);
        console.log(acc); */
        if (!acc.has(date)) {
          acc.set(date, [item]);
        } else {
          acc.get(date).push(item);
        }

        return acc;
      }, new Map());

      /* console.log("tasksStore.getTasksByDate.result", result);

      const entries = Object.keys(result).map((date) => [
        { [date]: result[date] }
      ]);

      console.log("tasksStore.getTasksByDate.entries", entries);

      for (let item of entries) {
        console.log(item);
      } */

      return result;
    }
  },
  mutations: {},
  actions: {}
};

export default tasksStore;
