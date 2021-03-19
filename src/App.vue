<template>
  <!-- <div id="app"> -->
  <div class="main-wrapper">
    <Header />
    <!-- <DaysSwiper :daysData="reduceDaysDataByDate(mockCardsData)" /> -->
    <DaysSwiper />
  </div>
  <!-- <div class="modal-full-screen"> -->
  <ModalWrapper ref="modal" />
  <!-- </div> -->
  <!-- </div> -->
</template>

<script>
  import DaysSwiper from "./components/DaysSwiper.vue";
  import Header from "./components/Header.vue";
  import ModalWrapper from "./components/ModalWrapper.vue";

  export default {
    name: "App",
    components: {
      DaysSwiper,
      Header,
      ModalWrapper
    },
    data() {
      return {};
    },
    methods: {
      openModal: function() {
        let modal = this.$refs.modal;
        // console.log(modal);
        modal.openModal();
        console.log("modal");
      }
    },
    mounted() {}
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
    /* min-height: 100%; */
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* min-height: 100%; */
    justify-content: center;
    align-items: center;

    /* margin-bottom: 150px; */
  }

  .modal-full-screen {
    position: absolute;
    min-width: 100%;
    /* min-height: 100%; */
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
  }
</style>
