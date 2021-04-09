<template>
  <div class="main-wrapper">
    <Header />
    <DaysSwiper />
  </div>
  <ModalWrapper
    ref="modal"
    :initialSlideIndex="initialSlideIndex"
    @newTaskSubmit="onNewTaskSubmit"
  />
</template>

<script>
  import DaysSwiper from "./components/DaysSwiper.vue";
  import Header from "./components/Header.vue";
  import ModalWrapper from "./components/ModalWrapper.vue";
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "App",
    components: {
      DaysSwiper,
      Header,
      ModalWrapper
    },
    data() {
      return {
        initialSlideIndex: 0
      };
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
      },
      ...mapActions("tasksStore", ["initTaskList"]),
      ...mapGetters("tasksStore", ["getTasksByDate"]),
      calcInitialSlideIndex() {
        const tasks = this.getTasksByDate();
        const todayStr = new Date().toISOString().slice(0, 10);

        let index = 0;

        for (let [key] of tasks) {
          if (key === todayStr) break;

          index++;
        }
        console.log(index);
        this.initialSlideIndex = index;
      }
    },
    created() {
      console.log("app created before");
      this.initTaskList();
      this.calcInitialSlideIndex();
      console.log("app created after");
    },
    mounted() {
      console.log("app mounted before");

      console.log("app mounted after");
    }
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
