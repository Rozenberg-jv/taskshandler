<template>
  <div class="slider-wrapper">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :initial-slide="initialSlideIndex"
      :centered-slides="true"
      :navigation="{
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next'
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="[date, taskArray] in tasksByDate" :key="date">
        <DayCardHandler
          :taskArray="taskArray"
          :date="date"
          @editTask="onEditTask"
        />
      </swiper-slide>
    </swiper>
    <div class="swiper-btn-prev"></div>
    <div class="swiper-btn-next"></div>
  </div>
</template>

<script>
  import SwiperCore, { Navigation } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/vue";
  import DayCardHandler from "@/components/daysview/DayCardHandler.vue";
  import { mapGetters } from "vuex";

  import "swiper/swiper.min.css";
  import "swiper/swiper.min.css";
  import "swiper/components/navigation/navigation.min.css";

  // install Swiper components
  SwiperCore.use([Navigation]);

  export default {
    name: "DaysSwiper",
    components: {
      DayCardHandler,
      Swiper,
      SwiperSlide
    },
    data() {
      return {};
    },
    props: {
      initialSlideIndex: Number
    },
    methods: {
      onSwiper() {
        // console.log(swiper);
      },
      onSlideChange() {
        // console.log("slide change");
      },
      ...mapGetters("tasksStore", ["getTasksByDate"]),
      onEditTask(id) {
        this.$emit("editTask", id);
      }
    },
    computed: {
      tasksByDate: function() {
        return this.getTasksByDate();
      }
    },
    created() {}
  };
</script>

<style scoped>
  .slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* fade effect left */
  .slider-wrapper::before {
    content: "";
    position: absolute;
    z-index: 990;
    left: 0;
    right: auto;
    top: 10%;
    bottom: auto;
    height: 100%;
    width: 10%;
    background: linear-gradient(90deg, #6464bb 50%, transparent);
  }

  /* fade effect right */
  .slider-wrapper::after {
    content: "";
    position: absolute;
    z-index: 990;
    right: 0;
    left: auto;
    top: 10%;
    bottom: auto;
    height: 100%;
    width: 10%;
    background: linear-gradient(-90deg, #6464bb 50%, transparent);
  }

  .swiper-btn-prev {
    position: absolute;
    left: 3%;
    right: auto;
    top: 10%;
    height: 80%;
    width: 120px;
    background: center no-repeat url("~@/assets/leftarrow.png");
    background-size: contain;
    z-index: 999;
  }

  .swiper-btn-next {
    position: absolute;
    right: 3%;
    left: auto;
    top: 10%;
    height: 80%;
    width: 120px;
    background: center no-repeat url("~@/assets/rightarrow.png");
    background-size: contain;
    z-index: 999;
  }

  .swiper-btn-prev:hover {
    transform: scale(1.02);
    box-shadow: -6px 0 6px -3px rgb(0 0 0 / 15%);
  }

  .swiper-btn-next:hover {
    transform: scale(1.02);
    box-shadow: 6px 0 6px -3px rgb(0 0 0 / 15%);
  }

  .swiper-btn-prev.swiper-button-disabled,
  .swiper-btn-next.swiper-button-disabled {
    opacity: 0.3;
  }

  /* native swiper's */
  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  /*   .swiper-slide.swiper-slide-prev {
    transform: translateX(55%);
  }
  .swiper-slide.swiper-slide-next {
    transform: translateX(-50%);
  } */
  /*
  .swiper-slide.swiper-slide-active .day-cards-handler {
    transform: scaleX(1.1);
    transition: all 0.5s;
  }

  .swiper-slide.swiper-slide-prev .day-cards-handler {
    transform: scale(0.65);
    transition: all 0.2s;
  }

  .swiper-slide.swiper-slide-next .day-cards-handler {
    transform: scale(0.65);
    transition: all 0.2s;
  } */
</style>
