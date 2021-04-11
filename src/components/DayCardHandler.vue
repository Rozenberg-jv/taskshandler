<template>
  <div class="day-cards-handler">
    <div class="header">{{ headerDate }}</div>
    <TaskCard
      v-for="(taskData, index) in taskArray"
      :key="index"
      :cardData="taskData"
    />
  </div>
</template>

<script>
  import TaskCard from "@/components/TaskCard.vue";

  export default {
    name: "DayCardHandler",
    components: {
      TaskCard
    },
    props: { taskArray: Array, date: String },
    computed: {
      headerDate: function() {
        return this.$moment(this.date).format("DD-MM-YYYY");
      }
    }
  };
</script>

<style scoped>
  .day-cards-handler {
    width: 650px;
    min-height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: blanchedalmond;
    /* margin: 10px 10px; */

    background-size: 100%;
  }

  .header {
    width: 25%;
    height: 48px;

    color: brown;
    background-color: #c0c0c0e6;
    border-radius: 24px;
    box-shadow: 0 2px 2px 2px #404040;
    font: bold 1.2em/48px "Roboto", sans-serif;
  }

  /* .header p {
  line-height: 32px;
  margin: auto;
} */

  .header:hover {
    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.8);
  }
</style>
