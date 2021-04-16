<template>
  <div class="main-wrapper">
    <Header @openModal="onOpenModal" />
    <DaysSwiper :initialSlideIndex="initialSlideIndex" v-if="isLoaded" />
  </div>
  <ModalWrapper
    ref="modal"
    :taskDataProp="defaultTaskData"
    @newTaskSubmit="onNewTaskSubmit"
    @closeModal="onCloseModal"
    v-if="showModal"
  />
</template>
/*
  https://medium.com/js-dojo/how-to-build-a-reusable-vuejs-modal-component-fc8d7f3b4735
  https://www.digitalocean.com/community/tutorials/vuejs-vue-modal-component
  https://v3.vuejs.org/guide/component-slots.html#slot-content
  https://v3.vuejs.org/examples/modal.html
  https://vuex.vuejs.org/ru/guide/getters.html
 */
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
        showModal: false,
        initialSlideIndex: 0,
        isLoaded: false,
        defaultTaskData: {
          title: "",
          text: "",
          date: new Date(),
          type: this.getTaskTypeByName("common"),
          timetype: this.getTaskTimeTypeByName("single"),
          image: this.getIconImageByName("common")
        }
      };
    },
    methods: {
      toggleModal: function() {
        // let modal = this.$refs.modal;
        // modal.openModal();
        // console.log(modal.newTask);
        this.showModal = !this.showModal;
      },
      onOpenModal(taskTemplate) {
        // console.log(this.getTaskTypeByName("common"));
        if (taskTemplate) {
          console.log("1");
        } else {
          console.log("2");
        }
        this.showModal = true;
      },
      onCloseModal() {
        this.showModal = false;
      },
      ...mapActions("tasksStore", ["addNewTask", "initTaskList"]),
      ...mapGetters("tasksStore", ["getTasksByDate"]),
      ...mapGetters([
        "getTaskTypeByName",
        "getTaskTimeTypeByName",
        "getIconImageByName"
      ]),
      onNewTaskSubmit(newTask) {
        newTask.date = this.$moment(newTask.date, "DD-MM-YYYY").unix();
        this.addNewTask(newTask);
      },
      calcInitialSlideIndex() {
        const tasks = this.getTasksByDate();
        const todayStr = new Date().toISOString().slice(0, 10);

        let index = 0;

        for (let [key] of tasks) {
          if (new Date(key) - new Date(todayStr) >= 0) break;

          index++;
        }
        // console.log("App calcInitSlideIndex", index);
        this.initialSlideIndex = index;
        this.isLoaded = true;
      }
    },
    computed: {
      loaded: () => {
        return this.isLoaded;
      }
    },
    created() {
      this.initTaskList().then(this.calcInitialSlideIndex);
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
