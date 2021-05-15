<template>
  <div
    class="calendar-view-external-wrapper"
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="busy"
    infinite-scroll-distance="10"
    id="inf-list"
  >
    <RozenCalendar></RozenCalendar>
  </div>
</template>

<script>
  import RozenCalendar from "@/components/calendarview/RozenCalendar.vue";

  export default {
    name: "CalendarView",
    components: { RozenCalendar },
    props: {},
    data() {
      return {
        data: [],
        busy: false,
        count: 0
      };
    },
    methods: {
      loadMore() {
        this.busy = true;

        setTimeout(() => {
          for (var i = 0, j = 10; i < j; i++) {
            this.data.push({ name: this.count++ });
          }
          this.busy = false;
          console.log(this.data);
        }, 1000);
      }
    },
    mounted() {

    }
  };
</script>

<style>
  .calendar-view-external-wrapper {
    display: flex;
    width: 60%;
    max-height: 644px;

    overflow: auto;

    justify-content: center;
    align-items: center;

    margin-top: 40px;
  }
  /* ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  } */
</style>
