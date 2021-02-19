<template>
  <div class="slider-wrapper">
    <swiper
      :slides-per-view="3"
      :space-between="0"
      :initial-slide="0"
      :centered-slides="true"
      :navigation="{
        prevEl: '.swiper-btn-prev',
        nextEl: '.swiper-btn-next',
      }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="[date, taskArray] in getTasksByDate" :key="date">
        <DayCardHandler :taskArray="taskArray" :date="date" />
      </swiper-slide>
    </swiper>
    <div class="swiper-btn-prev"></div>
    <div class="swiper-btn-next"></div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import DayCardHandler from "@/components/DayCardHandler.vue";
import { mapGetters, mapActions } from "vuex";

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
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {
    onSwiper() {
      // console.log(swiper);
    },
    onSlideChange() {
      // console.log("slide change");
    },
    ...mapActions("tasksStore", ["initTaskList"]),
  },
  computed: {
    ...mapGetters("tasksStore", ["getTasksByDate"]),
  },
  created() {
    this.initTaskList();
  },
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
  background: linear-gradient(90deg, rgba(0 20 50 / 1) 50%, transparent);
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
  background: linear-gradient(-90deg, rgba(0 20 50 / 1) 50%, transparent);
  /* background: linear-gradient(-90deg, rgba(255 255 255 / 1) 50%, transparent); */
}

.swiper-btn-prev {
  position: absolute;
  left: 3%;
  right: auto;
  top: 10%;
  height: 80%;
  width: 120px;
  background: center no-repeat url("~@/assets/leftarrow_white.png");
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
  background: center no-repeat url("~@/assets/rightarrow_white.png");
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
  opacity: 0.5;
}

/* native swiper's */
.swiper-slide {
  display: flex;
  justify-content: center;
}

.swiper-slide.swiper-slide-prev {
  transform: translate(-200px, 0);
}

.swiper-slide.swiper-slide-next {
  transform: translate(200px, 0);
}
</style>
