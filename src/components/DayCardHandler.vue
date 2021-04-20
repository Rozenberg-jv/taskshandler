<template>
  <div class="day-cards-handler">
    <div class="header">
      <div class="buttons-box">
        <button class="expand-all-button" @click="expandAllCards">
          <img src="/icons_dark/expand_vert_96.png" />
        </button>
        <button class="collapse-all-button" @click="collapseAllCards">
          <img src="/icons_dark/collapse_vert_96.png" />
        </button>
      </div>
      <div class="header-date">{{ headerDate }}</div>
    </div>
    <TaskCard
      v-for="(taskData, index) in taskArray"
      :key="index"
      :cardData="taskData"
      :forceExpand="forceExpand[index]"
      @editTask="onEditTask"
      @cardClick="onCardClick"
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
      data() {
        return {
          forceExpand: this.
        };
      },
      props: { taskArray: Array, date: String },
      /**
       * forceExpand
       * 0 - collapse all
       * 1 - collapsed single
       * 2 - expanded single
       * 3 - expand all
       */
      methods: {
        expandAllCards() {
          console.log("expand all");
          this.forceExpand.forEach((e) => (e = true));
          console.log("Outer.forceExpand", this.forceExpand);
        },
        collapseAllCards() {
          console.log("collapse all old val:", this.forceExpand);
          this.forceExpand.forEach((e) => (e = false));
          console.log("Outer.forceExpand", this.forceExpand);
        },
        onCardClick(state) {
          this.forceExpand = state;
        },
        onEditTask(id) {
          this.$emit("editTask", id);
        },
        prepareForceExpandArray(taskArray) {
          
        }
      },
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

    background-size: 100%;
  }

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    height: 48px;
  }

  .buttons-box {
    display: flex;
  }
  .header button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    border: 0;
    border-radius: 16px;

    width: 32px;
    height: 32px;
    padding: 0;
    margin: 4px;

    background-color: #c0c0c0e6;
  }
  .header button:hover {
    border: 2px solid #fff;
  }
  .header button:active {
    transform: scale(0.93);
    border-radius: 8px;
    border: 3px solid #fff;
  }
  .header button img {
    width: 24px;
    height: 24px;
  }

  .header-date {
    width: 128px;

    color: brown;
    background-color: #c0c0c0e6;
    border-radius: 24px;
    box-shadow: 0 2px 2px 2px #404040;
    font: bold 1.2em/48px "Roboto", sans-serif;

    cursor: pointer;
  }

  .header-date:hover {
    box-shadow: 0 4px 4px 4px rgba(0, 0, 0, 0.8);
  }
</style>
