<template>
  <div id="app">
    <Header />
    <DaysSwiper :daysData="reduceDaysDataByDate(mockCardsData)" />
  </div>
</template>

<script>
  import DaysSwiper from "./components/DaysSwiper.vue";
  import Header from "./components/Header.vue";

  export default {
    name: "App",
    components: {
      DaysSwiper,
      Header
    },
    data() {
      return {
        mockCardsData: [
          {
            id: 1,
            title: "title1",
            text: "text1",
            imageUrl: "logo.png",
            date: "05.06.2021"
          },
          {
            id: 2,
            title: "title2",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            imageUrl: "logo.png",
            date: "06.06.2021"
          },
          {
            id: 3,
            title: "title3",
            text:
              "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "06.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "07.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "07.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "07.06.2021"
          },
          {
            id: 3,
            title: "title3",
            text:
              "1) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 2) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non. 3) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "08.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "08.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "08.06.2021"
          },
          {
            id: 4,
            title: "title4",
            text:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
            date: "08.06.2021"
          }
        ]
      };
    },
    methods: {
      reduceDaysDataByDate(daysData) {
        let result = daysData.reduce((acc, item) => {
          let date = item.date.split(" ")[0];
          if (acc[date]) {
            acc[date].push(item);
          } else {
            acc[date] = [item];
          }
          return acc;
        }, {});

        console.log(result);
        return result;
      }
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
</style>
