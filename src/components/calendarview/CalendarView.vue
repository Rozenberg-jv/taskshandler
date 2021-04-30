<template>
  <div class="calendar-view-wrapper">
    <!-- <DatePicker
      is-expanded
      v-model="datepickerDate"
      :is-dark="dpSettings.isDark"
      :color="dpSettings.color"
      :model-config="dpSettings.modelConfig"
      @dayclick="onDayClick"
    ></DatePicker> -->
    <Calendar
      class="custom-calendar vc-container max-w-full"
      :masks="masks"
      :attributes="attributes"
      disable-page-swipe
      is-expanded
    >
      <template v-slot:day-content="{ day, attributes }">
        <div class="flex flex-col h-full z-10 overflow-hidden">
          <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
          <div class="flex-grow overflow-y-auto overflow-x-auto">
            <p
              v-for="attr in attributes"
              :key="attr.key"
              class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
              :class="attr.customData.class"
            >
              {{ attr.customData.title }}
            </p>
          </div>
        </div>
      </template>
    </Calendar>
  </div>
</template>

<script>
  import { Calendar } from "v-calendar";
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  export default {
    name: "CalendarView",
    components: {
      Calendar
      // DatePicker
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
        },
        masks: {
          weekdays: "WWW"
        },
        attributes: []
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

  /* calendar */
  .custom-calendar.vc-container {
    --day-border: 1px solid #b8c2cc;
    --day-border-highlight: 1px solid #b8c2cc;
    --day-width: 90px;
    --day-height: 90px;
    --weekday-bg: #f8fafc;
    --weekday-border: 1px solid #eaeaea;
    border-radius: 0;
    /* width: 100%; */
    /* height: 600px; */
  }
  .custom-calendar.vc-container .vc-header {
    background-color: #f1f5f8;
    padding: 10px 0;
  }
  .custom-calendar.vc-container .vc-weeks {
    padding: 0;
  }
  .custom-calendar.vc-container .vc-weekday {
    background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    padding: 5px 0;
  }
  .custom-calendar.vc-container .vc-day {
    padding: 0 5px 3px 5px;
    text-align: left;
    height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;
  }
  .custom-calendar.vc-container .vc-day.weekday-1,
  .custom-calendar.vc-container .vc-day.weekday-7 {
    background-color: #eff8ff;
  }
  .custom-calendar.vc-container .vc-day:not(.on-bottom) {
    border-bottom: var(--day-border);
  }
  .custom-calendar.vc-container .vc-day:not(.on-bottom).weekday-1 {
    border-bottom: var(--day-border-highlight);
  }
  .custom-calendar.vc-container .vc-day:not(.on-right) {
    border-right: var(--day-border);
  }
  .custom-calendar.vc-container .vc-day-dots {
    margin-bottom: 5px;
  }

  /* datepicker's adjustments */
  /* .vc-day {
    height: 80px;
  }
  .vc-day:hover {
    background: #ffffff50;
    border-radius: 8px;
  }

  .vc-day.vc-day-box-center-center {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .vc-day .vc-day-layer {
    background-color: #ffffff50;
    border-radius: 8px;
  }
  .vc-day .vc-highlights .vc-day-box-center-center {
    justify-content: flex-start;
    align-items: flex-start;
  }
  .vc-day .vc-highlights .vc-highlight {
    display: flex;
  } */
</style>
