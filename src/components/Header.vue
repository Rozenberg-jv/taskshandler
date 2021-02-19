<template>
  <div class="header-wrapper">
    <p>Header</p>
    <button class="testbutton" v-on:click="addNewExampleTask(generateExampleTask())">Add test task</button>
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
        date: "08.06.2021",
      },
    };
  },
  methods: {
    ...mapActions("tasksStore", ["addNewTask"]),
    addNewExampleTask(task) {
      this.addNewTask(task);
    },
    generateExampleTask() {
      this.exampleTask.id = this.exampleTask.id + 1;
      return this.exampleTask;
    },
  },
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

button .testbutton {
  width: 100px;
}
</style>