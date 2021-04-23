<template>
  <div class="main-wrapper">
    <Header @openModal="onOpenModal" />
    <DaysSwiper
      :initialSlideIndex="initialSlideIndex"
      v-if="isLoaded"
      @editTask="onEditTask"
    />
  </div>
  <NewTaskModal
    ref="modal"
    :taskDataProp="taskData"
    @newTaskSubmit="onNewTaskSubmit"
    @closeModal="onCloseModal"
    v-if="showModal"
  />
</template>

<script>
  import DaysSwiper from "@/components/daysview/DaysSwiper.vue";
  import Header from "@/components/daysview/Header.vue";
  import NewTaskModal from "@/components/daysview/NewTaskModal.vue";
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "DaysView",
    components: {
      DaysSwiper,
      Header,
      NewTaskModal
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
          type: this.getTaskTypeByName()("common"),
          timetype: this.getTaskTimeTypeByName()("single"),
          image: this.getIconImageByName()("common")
        },
        taskData: Object.assign({}, this.defaultTaskData)
      };
    },
    methods: {
      onEditTask(id) {
        const task = this.getTaskById()(id);

        const template = {
          title: task.title,
          text: task.text,
          date: task.date,
          type: task.type,
          timetype: task.timetype,
          image: task.image
        };

        // console.log(template);

        this.onOpenModal(template);
      },
      onOpenModal(taskTemplate) {
        if (taskTemplate) {
          this.taskData = Object.assign({}, taskTemplate);
        } else {
          this.taskData = Object.assign({}, this.defaultTaskData);
        }
        this.showModal = true;
      },
      onCloseModal() {
        this.showModal = false;
      },
      ...mapActions("tasksStore", ["addNewTask", "initTaskList"]),
      ...mapGetters("tasksStore", ["getTasksByDate", "getTaskById"]),
      ...mapGetters([
        "getTaskTypeByName",
        "getTaskTimeTypeByName",
        "getIconImageByName"
      ]),
      onNewTaskSubmit(newTask) {
        // newTask.date = this.$moment(newTask.date, "DD-MM-YYYY").unix();
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
