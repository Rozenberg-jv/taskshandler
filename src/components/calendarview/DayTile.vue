<template>
  <div
    class="r-calendar-day-wrapper"
    :class="{ 'day-selected': isSelectedDay }"
  >
    <div
      class="r-calendar-day-number"
      :class="{ 'day-selected': isSelectedDay }"
    >
      {{ data.date.format("D") }}
    </div>
    .
  </div>
</template>

<script>
  import moment from "moment";

  const dayDefaults = {
    date: moment()
  };

  export default {
    name: "DayTile",
    props: {
      day: {
        type: Object,
        required: false,
        default: dayDefaults,
        selected: {
          type: Boolean,
          default: false
        }
      }
    },
    data() {
      return {
        data: {
          date: this.day && this.day.date ? moment(this.day.date) : moment(),
          eventsArray: this.day.eventsArray,
          isSelected: this.day.selected
        }
      };
    },
    methods: {},
    computed: {
      isSelectedDay() {
        return this.data.isSelected;
      }
    },
    mounted() {}
  };
</script>

<style>
  .r-calendar-day-wrapper {
    display: flex;
    width: 160px;
    height: 160px;

    border: 1px solid dodgerblue;
    /* border: 1px solid darkgray; */
    box-sizing: border-box;

    background-color: lightgrey;
  }
  .r-calendar-day-number {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 28px;
    height: 28px;

    line-height: 24px;
    font-weight: 700;
    background-color: dodgerblue;
  }

  .r-calendar-day-wrapper.day-selected {
    border: 3px solid white;
  }
  .r-calendar-day-number.day-selected {
    background-color: green;
  }
</style>
