<template>
  <div class="r-calendar-main-wrapper">
    <div
      v-for="(row, rindex) of daysArray"
      :key="rindex"
      class="r-calendar-row-wrapper"
    >
      <DayTile v-for="(day, dindex) of row" :key="dindex" :day="day" />
    </div>
  </div>
</template>

<script>
  import moment from "moment";
  import DayTile from "@/components/calendarview/DayTile";

  const ROWS_COUNT = 5;

  const defaultSettings = {
    type: "infinit",
    startDate: moment()
    // startDate: new Date().toLocaleDateString()
  };

  export default {
    name: "RozenCalendar",
    components: {
      DayTile
    },
    props: {
      settings: { type: Object, required: false, default: defaultSettings }
    },
    data() {
      return {
        currentDate: this.settings.startDate,
        daysArray: []
      };
    },
    methods: {
      initDays() {
        const tDate = moment(this.currentDate)
          .subtract(2, "week")
          .startOf("week");
        for (let row = 0; row < ROWS_COUNT; row++) {
          this.daysArray.push([]);
          for (let day = 0; day < 7; day++) {
            let date = moment(tDate.add(1, "day"));
            let data = { date: date, eventsArray: [] };
            this.daysArray[row].push(data);
          }
        }

        // select today
        let today = this.daysArray[2].find(
          (el) => el.date.format("D") === moment().format("D")
        );
        today.selected = true;
      }
    },
    mounted() {
      this.initDays();
    },
    updated() {
      let infList = document.querySelector("#inf-list");
      infList.scrollBy(0, 100);
      console.log("scrolled");
    }
  };
</script>

<style scoped>
  .r-calendar-main-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .r-calendar-row-wrapper {
    display: flex;
    flex-direction: row;
    height: 160px;
    gap: 2px;
  }
</style>
