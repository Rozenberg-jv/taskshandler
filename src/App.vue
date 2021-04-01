<template>
  <div class="main-wrapper">
    <Header />
    <DaysSwiper />
  </div>
  <ModalWrapper ref="modal" @newTaskSubmit="onNewTaskSubmit" />
</template>

<script>
  import DaysSwiper from "./components/DaysSwiper.vue";
  import Header from "./components/Header.vue";
  import ModalWrapper from "./components/ModalWrapper.vue";
  import { mapActions } from "vuex";

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
        modal.openModal();
      },
      ...mapActions("tasksStore", ["addNewTask"]),
      onNewTaskSubmit(newTask) {
        newTask.date = this.$moment(newTask.date, "DD-MM-YYYY").unix();
        this.addNewTask(newTask);
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
  }

  .main-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .modal-full-screen {
    position: absolute;
    min-width: 100%;
    z-index: 9999;
    top: 0;
    left: 0;
    bottom: 0;
  }

  button:active,
  button:focus,
  input:focus,
  textarea {
    outline: 0;
  }
</style>
