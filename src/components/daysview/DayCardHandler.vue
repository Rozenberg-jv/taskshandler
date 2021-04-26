<template>
  <div class="day-cards-handler">
    <div class="header">
      <div class="buttons-box">
        <button
          class="expand-all-button"
          :class="{ inactive: !computeExpandAllButtonIsActive }"
          @click="expandAllCards"
        >
          <img src="/icons_dark/expand_vert_96.png" />
        </button>
        <button
          class="collapse-all-button"
          :class="{ inactive: !computeCollapseAllButtonIsActive }"
          @click="collapseAllCards"
        >
          <img src="/icons_dark/collapse_vert_96.png" />
        </button>
      </div>
      <div class="header-date">{{ headerDate }}</div>
    </div>
    <TaskCard
      v-for="(taskData, index) in taskArray"
      :key="index"
      :cardData="taskData"
      :expandState="
        findExpandStateById(taskData.id)
          ? findExpandStateById(taskData.id).state
          : false
      "
      @editTask="onEditTask"
      @cardClick="onCardClick"
    />
  </div>
</template>

<script>
  import TaskCard from "@/components/daysview/TaskCard.vue";

  export default {
    name: "DayCardHandler",
    components: {
      TaskCard
    },
    data() {
      return {
        expandState: this.prepareCardsState()
      };
    },
    props: { taskArray: Array, date: String },
    methods: {
      expandAllCards() {
        this.expandState.forEach((state) => (state.state = true));
      },
      collapseAllCards() {
        this.expandState.forEach((state) => (state.state = false));
      },
      onEditTask(id) {
        this.$emit("editTask", id);
      },
      onCardClick(id, newState) {
        const cardState = this.findExpandStateById(id);
        cardState.state = newState;
      },
      prepareCardsState() {
        let stateArray = [];
        for (let task of this.taskArray) {
          stateArray.push(Object.assign({}, { id: task.id, state: false }));
        }
        return stateArray;
      },
      findExpandStateById(id) {
        return this.expandState.find((item) => item.id === id);
      }
    },
    watch: {
      taskArray: function(newValue) {
        // console.log("watch", newValue);
        this.expandState = this.prepareCardsState();
      }
    },
    computed: {
      headerDate: function() {
        return this.$moment(this.date).format("DD-MM-YYYY");
      },
      computeCollapseAllButtonIsActive() {
        return this.expandState.find((s) => s.state === true);
      },
      computeExpandAllButtonIsActive() {
        return this.expandState.find((s) => s.state === false);
      }
    }
  };
</script>

<style scoped>
  .day-cards-handler {
    width: 650px;
    min-height: 150px;
    /* margin-bottom: 16px; */
    margin: 24px 0;

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
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.8);
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

  .header button.inactive {
    opacity: 0.3;
  }
  .header button.inactive:hover {
    border: 0;
    box-shadow: none;
    transform: none;
  }
  .header button.inactive:active {
    border: 0;
    border-radius: 16px;
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
    box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.8);
  }
</style>
