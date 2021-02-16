<template>
  <div id="app">
    <div class="main-wrapper">
      <Header />
      <!-- <DaysSwiper :daysData="reduceDaysDataByDate(mockCardsData)" /> -->
      <DaysSwiper />
    </div>
  </div>
</template>

<script>
import DaysSwiper from "./components/DaysSwiper.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    DaysSwiper,
    Header,
  },
  data() {
    return {
      // mockCardsData: [
      //   {
      //     id: 1,
      //     title: "title1",
      //     text: "text1",
      //     imageName: "logo.png",
      //     date: "05.06.2021",
      //   },
      //   {
      //     id: 2,
      //     title: "title2",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     imageName: "logo.png",
      //     date: "06.06.2021",
      //   },
      //   {
      //     id: 3,
      //     title: "title3",
      //     text:
      //       "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "06.06.2021",
      //   },
      //   {
      //     id: 4,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "07.06.2021",
      //   },
      //   {
      //     id: 5,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "07.06.2021",
      //   },
      //   {
      //     id: 6,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "07.06.2021",
      //   },
      //   {
      //     id: 7,
      //     title: "title3",
      //     text:
      //       "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "08.06.2021",
      //   },
      //   {
      //     id: 8,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "08.06.2021",
      //   },
      //   {
      //     id: 9,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "08.06.2021",
      //   },
      //   {
      //     id: 10,
      //     title: "title4",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      //     date: "08.06.2021",
      //   },
      // ],
    };
  },
  methods: {
    // reduceDaysDataByDate(daysData) {
    //   let result = daysData.reduce((acc, item) => {
    //     let date = item.date.split(" ")[0];
    //     if (acc[date]) {
    //       acc[date].push(item);
    //     } else {
    //       acc[date] = [item];
    //     }
    //     return acc;
    //   }, {});

    //   console.log(result);
    //   return result;
    // },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
}

.main-wrapper {
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  align-items: center;

  margin-bottom: 150px;
}
</style>
