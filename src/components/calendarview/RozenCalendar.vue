<template>
  <div class="calendar-wrapper">
    <div class="calendar-infinite-scroll-wrapper" id="infinite-list">
      <div class="r-calendar-main-wrapper">
        <DayTile v-for="day of compDaysArray" :key="day.date" :day="day" />
      </div>
    </div>
    <div><button class="tst" @click="scrollToSelected"></button></div>
  </div>
</template>

<script>
  import moment from "moment";
  import DayTile from "@/components/calendarview/DayTile";

  // const INIT_DAYS_LOAD_COUNT = 35;
  const INIT_DAYS_LOAD_COUNT = 63;
  // const DAYS_LOAD_COUNT = 7;
  const DAYS_LOAD_COUNT = 28;
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
        daysArray: [],
        busy: false
      };
    },
    methods: {
      loadMore(direction) {
        this.busy = true;

        if (direction) {
          setTimeout(() => {
            let lastDay = this.daysArray[this.daysArray.length - 1].date;
            let data = [];
            // console.log(lastDay, direction ? "bottom" : "top");
            for (var i = 0; i < DAYS_LOAD_COUNT; i++) {
              let date = moment(lastDay.add(1, "day"));
              data.push({ date: date, eventsArray: [] });
            }
            this.daysArray.push(...data);
            this.busy = false;
          }, 0);
        } else {
          setTimeout(() => {
            let lastDay = moment(this.daysArray[0].date).subtract(
              DAYS_LOAD_COUNT + 1,
              "day"
            );
            let data = [];
            // console.log(lastDay, direction ? "bottom" : "top");
            for (var i = 0; i < DAYS_LOAD_COUNT; i++) {
              let date = moment(lastDay.add(1, "day"));
              data.push({ date: date, eventsArray: [] });
            }
            this.daysArray.unshift(...data);
            this.busy = false;
          }, 0);
          const infiniteListElem = document.querySelector("#infinite-list");
          // infiniteListElem.scroll(0, 80);
        }
        // console.log(this.daysArray);
      },
      handleScroll(e) {
        const infiniteListElem = document.querySelector("#infinite-list");

        if (
          infiniteListElem.scrollTop + infiniteListElem.clientHeight >=
          infiniteListElem.scrollHeight
        ) {
          this.loadMore(true);
        } else if (infiniteListElem.scrollTop <= 10) {
          this.loadMore(false);
          // infiniteListElem.scroll(0, 0);
        }
      },
      initDays() {
        const tDate = moment(this.currentDate)
          // .subtract(Math.round(INIT_DAYS_LOAD_COUNT / 14 - 1), "week")
          .subtract(1, "week")
          .startOf("week");
        for (let day = 0; day < INIT_DAYS_LOAD_COUNT; day++) {
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
      },
      scrollToSelected() {
        const elem = document.querySelector(
          ".r-calendar-day-wrapper.day-selected"
        );
        elem.scrollIntoView(top);
      }
    },
    computed: {
      compDaysArray() {
        // console.log(this.daysArray);
        return this.daysArray;
      }
    },
    mounted() {
      this.initDays();
      const infiniteListElem = document.querySelector("#infinite-list");
      // console.log("mounted", infiniteListElem);
      infiniteListElem.addEventListener("scroll", this.handleScroll);

      // console.log("scrolled");
    },
    updated() {
      /* let infList = document.querySelector("#infinite-list");
      infList.scrollBy(0, 646);
      console.log("scrolled"); */
    }
  };
</script>

<style scoped>
  .calendar-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
  .calendar-infinite-scroll-wrapper {
    display: flex;
    width: 1132px;
    max-height: 644px;

    overflow: auto;

    border-top: solid 2px red;
    border-bottom: solid 2px red;

    margin-top: 40px;
  }
  /* ::-webkit-scrollbar {
    width: 10px;
    background-color: tomato;
  }
  ::-webkit-scrollbar-thumb {
    background-color: green;
  } */
  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .r-calendar-main-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 2px;
  }

  .r-calendar-row-wrapper {
    display: flex;
    flex-direction: row;
    height: 160px;
    gap: 2px;
  }

  /* */
  .tst {
    height: 32px;
    width: 32px;
    margin-left: 20px;
  }
</style>
