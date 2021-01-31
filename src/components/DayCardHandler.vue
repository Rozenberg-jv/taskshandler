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
      DayCard
    },
    props: ["cardsData"]
  };
</script>

<style scoped>
  .header {
    margin-top: 5px;
    font-weight: bold;
  }

  .day-cards-handler {
    /* width: 300px; */
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: stretch;
    background-color: rgba(75, 75, 200, 0.9);
    color: white;
    border-radius: 4px;
    padding-bottom: 5px;
  }
</style>
