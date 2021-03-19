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
    TaskCard,
  },
  props: { taskArray: Array, date: String },
  computed: {
    headerDate: function () {
      return this.date;
      // return this.$moment.unix(this.date).format("DD-MM-YYYY");
    },
  },
};
</script>

<style scoped>
.header {
  margin-top: 15px;
  font-weight: bold;
}

.day-cards-handler {
  width: 650px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  color: blanchedalmond;
  /* border-radius: 4px; */
  /* padding-bottom: 5px; */
  margin: 10px 10px;

  background: no-repeat url("~@/assets/top_line_bg_bluegray.png");
  background-size: 100%;
  /* background: linear-gradient(135deg, rgb(185, 140, 221), rgb(144, 133, 245)); */

  /* box-shadow: 0 0 3px 1px rgba(100, 80, 190, 0.5); */
}
</style>
