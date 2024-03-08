
<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";

import TestimonialQuot from "@/svg/TestimonialQuot.vue";
import testimonial_shape from "@/assets/img/testimonial/shape-1.png";
import testimonial_bg from "@/assets/img/testimonial/testimonial-bg.jpg";
import user_1 from "@/assets/img/testimonial/user-1.jpg";
import user_2 from "@/assets/img/testimonial/user-2.jpg";
import user_3 from "@/assets/img/testimonial/user-3.jpg";

const testimonial_data = reactive([
  {
    id: 1,
    avatar: user_1,
    name: "Cameron Williamson",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
  {
    id: 2,
    avatar: user_2,
    name: "Leslie Alexander",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
  {
    id: 3,
    avatar: user_3,
    name: "Savannah Nguyen",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
  {
    id: 4,
    avatar: user_1,
    name: "Cameron Williamson",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
  {
    id: 5,
    avatar: user_2,
    name: "Leslie Alexander",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
  {
    id: 6,
    avatar: user_3,
    name: "Savannah Nguyen",
    title: "Ceo & Founder",
    description:
      "are so beguiled and demorali ed by the <br/> tech of pleasure of the moment Dislike <br/> men who are so beguiled and demoraliz <br/> worlds ed by the charms of",
  },
]);


</script>


<template>
  <section class="tp-testimonial-area p-relative pb-55">
    <div class="container container-large">
      <div class="tp-testimonial-shape">
        <img :src="testimonial_shape" alt="image-title-here" />
      </div>
      <div class="tp-testimonial-bg">
        <img :src="testimonial_bg" alt="image-title-here" />
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-testimonial-title-wrapper text-center">
            <span class="tp-section-title__pre">
              Client's <span class="title-pre-color">Feedback</span>
              <TitleUnderIcon />
            </span>
            <h3 class="tp-section-title">
              All Professional <span class="title-color">Testimonial</span>
              & Feedback
              <span class="title-center-shape">
                <AboutLineIcon />
              </span>
            </h3>
          </div>
        </div>
        <div class="tp-testimonial-box-wrapper">
          <div class="testimonial-active swiper-container">
            <swiper
              :loop="true"
              :slide-per-view="3"
              :centered-slides="true"
              :breakpoints="{
                0 : {
                  slidesPerView: 1, 
                },
                768: {
                  slidesPerView: 2,
                },
                992: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                }, 
                1400: {
                  slidesPerView: 3,
                }, 
              }"
            >
              <swiper-slide v-for="(item, i) in testimonial_data" :key="i">
                <div
                  class="tp-testimonial-item text-center mb-30 p-relative mx-4"
                >
                  <div class="tp-testimonial-item-inner">
                    <div class="tp-testimonial-quot">
                      <span>
                        <TestimonialQuot />
                      </span>
                    </div>
                    <p v-html="item.description"></p>
                    <div
                      class="tp-testimonial-rating d-flex justify-content-center"
                    >
                      <span>
                        <i class="fa-solid fa-star-sharp"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star-sharp"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star-sharp"></i>
                      </span>
                      <span>
                        <i class="fa-solid fa-star-sharp"></i>
                      </span>
                      <span>
                        <i class="fa-regular fa-star-half-stroke"></i>
                      </span>
                    </div>
                  </div>
                  <div class="tp-testimonial-user-thumb">
                    <img :src="item.avatar" :alt="item.title" />
                  </div>
                  <div class="tp-testimonial-designation">
                    <h4 class="testimonial-title">{{ item.name }}</h4>
                    <p>{{ item.title }}</p>
                  </div>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>




