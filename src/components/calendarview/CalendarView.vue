<template>
  <div class="calendar-view-wrapper">
    <DatePicker
      is-expanded
      v-model="datepickerDate"
      :is-dark="dpSettings.isDark"
      :color="dpSettings.color"
      :model-config="dpSettings.modelConfig"
      @dayclick="onDayClick"
    ></DatePicker>
  </div>
</template>

<script>
  import { DatePicker } from "v-calendar";

  export default {
    name: "CalendarView",
    components: {
      DatePicker
    },
    props: {},
    data() {
      return {
        datepickerDate: new Date().getTime(),
        dpSettings: {
          isDark: true,
          color: "green",
          trimWeeks: true,
          modelConfig: {
            type: "number"
          }
        }
      };
    },
    methods: {
      onDayClick(day) {}
    }
  };
</script>

<style>
  .calendar-view-wrapper {
    display: flex;
    width: 60%;
    height: 100%;

    justify-content: center;
    align-items: center;

    margin-top: 100px;
  }

  /* datepicker's adjustments */
  .vc-day {
    height: 80px;
  }

  .vc-day:hover {
    background: #ffffff50;
  }
</style>
