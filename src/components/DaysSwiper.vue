<template>
  <swiper
    :slides-per-view="1"
    :space-between="50"
    navigation
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    centeredSlides="true"
    initialSlide=0
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
      SwiperSlide
    },
    data() {
      return {};
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper);
      },
      onSlideChange() {
        console.log("slide change");
      }
    },
    props: ["daysData"],
    computed: {},
    mounted() {}
  };
</script>

<style scoped>
  /* .swiper-wrapper {
    width: 100%;
  } */

  .swiper-slide {
    /* width: 300px; */
  }

  .swiper-pagination {
    margin-bottom: -50px !important;
  }
</style>
