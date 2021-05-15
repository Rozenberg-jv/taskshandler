<template>
  <div class="r-calendar-main-wrapper">
    <DayTile v-for="(day, dindex) of daysArray" :key="dindex" :day="day" />
  </div>
</template>

<script>
  import moment from "moment";
  import DayTile from "@/components/calendarview/DayTile";

  const DAYS_COUNT = 56;

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
          .subtract(1, "week")
          .startOf("week");
        for (let day = 0; day < DAYS_COUNT; day++) {
          let date = moment(tDate.add(1, "day"));
          let data = { date: date, eventsArray: [] };
          this.daysArray.push(data);
        }
        // select today
        let today = this.daysArray.find((el) => {
          // console.log(el.date);
          return el.date.isSame(moment(), "day");
        });
        // console.log(today);
        if (today) today.selected = true;
        // console.log(this.daysArray);
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
    flex-wrap:wrap;
    /* flex-direction: column; */
    gap: 2px;
  }

  .r-calendar-row-wrapper {
    display: flex;
    flex-direction: row;
    height: 160px;
    gap: 2px;
  }
</style>
