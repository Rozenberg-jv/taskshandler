<template>
  <div class="day-cards-handler">
    <div class="header">{{ cardsData[0].date }}</div>
    <DayCard
      v-for="cardData in cardsData"
      :key="cardData.id"
      :cardData="cardData"
    />
  </div>
</template>

<script>
import DayCard from "@/components/DayCard.vue";

export default {
  name: "DayCardHandler",
  components: {
    DayCard,
  },
  props: ["cardsData"],
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

  background: linear-gradient(
    135deg,
    rgb(185, 140, 221),
    rgb(144, 133, 245)
  );
  box-shadow: 0 0 3px 1px rgba(100, 80, 190, 0.5);
}
</style>
