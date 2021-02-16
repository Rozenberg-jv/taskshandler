<template>
  <div class="day-cards-handler">
    <div class="header">{{ date }}</div>
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
    computed: {},
    props: { taskArray: Array, date: String }
  };
</script>

<style scoped>
  .header {
    margin-top: 5px;
    font-weight: bold;
  }

  .day-cards-handler {
    width: 650px;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    color: white;
    border-radius: 4px;
    /* padding-bottom: 5px; */
    margin: 10px 10px;

    background: linear-gradient(135deg, rgb(185, 140, 221), rgb(144, 133, 245));
    box-shadow: 0 0 3px 1px rgba(100, 80, 190, 0.5);
  }
</style>
