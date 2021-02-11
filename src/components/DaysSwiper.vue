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
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['05.06.2021']" />
      </swiper-slide>
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['06.06.2021']" />
      </swiper-slide>
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['07.06.2021']" />
      </swiper-slide>
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['08.06.2021']" />
      </swiper-slide>
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['05.06.2021']" />
      </swiper-slide>
      <swiper-slide>
        <DayCardHandler :cardsData="daysData['06.06.2021']" />
      </swiper-slide>
      <!-- <div class="swiper-pagination"></div> -->
    </swiper>
    <div class="swiper-btn-prev"></div>
    <div class="swiper-btn-next"></div>
  </div>
</template>

<script>
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import DayCardHandler from "@/components/DayCardHandler.vue";

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
    return {
      // swiperOption: {
      //   navigation: {
      //     prevEl: ".swiper-button-prev",
      //     nextEl: ".swiper-button-next",
      //   },
      // },
    };
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
  props: ["daysData"],
  computed: {},
  mounted() {},
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
  height: 100%;
  width: 20%;
  background: linear-gradient(
    -90deg,
    transparent 10%,
    30%,
    rgba(255 255 255 / 1)
  );
}

/* fade effect right */
.slider-wrapper::after {
  content: "";
  position: absolute;
  z-index: 990;
  right: 0;
  left: auto;
  height: 100%;
  width: 20%;
  background: linear-gradient(
    90deg,
    transparent 10%,
    30%,
    rgba(255 255 255 / 1)
  );
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
  opacity: 0.5;
}

/* native swiper's */
.swiper-slide {
  display: flex;
  justify-content: center;
}
</style>
