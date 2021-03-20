<template>
  <div class="header-wrapper">
    <p>Header</p>
    <button class="testbutton" v-on:click="openAddTaskModal">
      Add new task
    </button>
  </div>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    name: "Header",
    data() {
      return {
        exampleTask: {
          id: 111,
          title: "title111",
          text:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
          date: "08.06.2021"
        }
      };
    },
    methods: {
      ...mapActions("tasksStore", ["addNewTask"]),
      openAddTaskModal() {
        // console.log(this.$root);
        this.$root.openModal();

        // this.addNewTask(task);
      },
      generateExampleTask() {
        this.exampleTask.id = this.exampleTask.id + 1;
        return this.exampleTask;
      }
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

  .testbutton {
    width: 100px;
    color: darkblue;
    font-weight: 900;
    background-color: forestgreen;
    box-shadow: 0;
    border: 0;
    border-radius: 24px;
    box-shadow: 0 0 1px 1px rgb(34, 134, 34);
  }

  .testbutton:hover {
    color: rgb(220, 220, 220);
    box-shadow: 0 0 2px 2px rgb(220, 220, 220);
  }

  .testbutton:focus {
    outline: 0;
    background-color: rgb(64, 194, 64);
    box-shadow: 0 0 2px 2px rgb(0, 0, 0);
    /* background-color: rgb(34, 104, 34); */
  }
</style>
