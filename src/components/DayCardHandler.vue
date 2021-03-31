<template>
  <div class="day-cards-handler">
    <div class="header"><p>{{ headerDate }}</p></div>
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
      return this.$moment(this.date).format("DD-MM-YYYY");
    },
  },
};
</script>

<style scoped>
.day-cards-handler {
  width: 650px;
  min-height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  color: blanchedalmond;
  /* margin: 10px 10px; */

  background-size: 100%;
}

.header {
  width: 50%;
  height: 48px;

  font-weight: bold;
  color: brown;
  background: center radial-gradient(#fffa 24%, #fff4 45%, #000 47%, #0000 48%);
  border-radius: 48px;
}
</style>
