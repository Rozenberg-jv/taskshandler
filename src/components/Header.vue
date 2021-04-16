<template>
  <div class="header-wrapper">
    <p>Header</p>
    <button class="add-task-button" v-on:click="openAddTaskModal">
      <img src="/icons_dark/plus-128.png" />
    </button>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    name: "Header",
    methods: {
      ...mapActions("tasksStore", ["addNewTask"]),
      ...mapGetters([
        "getTaskTypeByName",
        "getTaskTimeTypeByName",
        "getIconImageByName"
      ]),
      openAddTaskModal() {
        // this.$root.openModal();
        this.$emit("openModal", this.newTaskTemplate);
      }
      /* generateExampleTask() {
        this.exampleTask.id = this.exampleTask.id + 1;
        return this.exampleTask;
      } */
    },
    data() {
      return {
        newTaskTemplate: {
          title: "",
          text: "",
          date: new Date(),
          type: this.getTaskTypeByName("common"),
          timetype: this.getTaskTimeTypeByName("single"),
          image: this.getIconImageByName("common")
        }
      };
    }
  };
</script>

<style scoped>
  .header-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
    justify-content: space-evenly;
  }

  .add-task-button {
    width: 100px;
    height: 100px;
    background: 0;
    border: 0;
    border-radius: 50px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .add-task-button img {
    height: 100%;
    width: 100%;
  }
  .add-task-button:hover {
    border: 2px solid #fff;
    box-shadow: 0 0 2px 2px rgb(220, 220, 220);
  }
  /* .add-task-button:focus {
    border: 2px solid #fff;
  } */
  .add-task-button:active {
    transform: scale(0.93);
    border-radius: 25px;
    border: 3px solid #fff;
  }
</style>
