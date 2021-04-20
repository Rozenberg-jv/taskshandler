<template>
  <div class="header-wrapper">
    <p>Header</p>
    <button v-on:click="test" style="height:32px">test</button>
    <button class="add-task-button" v-on:click="openNewTaskModal">
      <img src="/icons_dark/plus-128.png" />
    </button>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Header",
    data() {
      return {
        newTaskTemplate: {
          title: "",
          text: "",
          date: new Date().getTime() / 1000,
          type: this.getTaskTypeByName()("common"),
          timetype: this.getTaskTimeTypeByName()("single"),
          image: this.getIconImageByName()("common")
        }
      };
    },
    methods: {
      ...mapGetters([
        "getTaskTypeByName",
        "getTaskTimeTypeByName",
        "getIconImageByName"
      ]),
      openNewTaskModal() {
        this.$emit("openModal", this.newTaskTemplate);
      },
      test() {
        const q = this.getIconImageByName()("payment");
        console.log(q);
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
