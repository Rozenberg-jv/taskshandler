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
    return {};
  },
  methods: {},
  mounted() {
    
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

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
