

<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";  
import AboutLineIcon from "@/svg/AboutLineIcon.vue";

import shape_1 from "@/assets/img/about/shape-1.png";
import about_img_1 from "@/assets/img/about/about-1.png";


const about_data = reactive([
  {
    id: 1,
    img: "@/assets/img/about/icon-1.png",
    title: "Business services",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
  {
    id: 2,
    img: "@/assets/img/about/icon-2.png",
    title: "Education and training",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
  {
    id: 3,
    img: "@/assets/img/about/icon-3.png",
    title: "Artificial intelligence",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
  // update for swiper
  {
    id: 1,
    img: "@/assets/img/about/icon-1.png",
    title: "Business services",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
  {
    id: 2,
    img: "@/assets/img/about/icon-2.png",
    title: "Education and training",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
  {
    id: 3,
    img: "@/assets/img/about/icon-3.png",
    title: "Artificial intelligence",
    description:
      "As far as we might be concerned <br> making an extraordinary advanc<br> ed experience is a blend bet",
  },
]);

 
</script>



<template>
  <section class="tp-about-area pb-45 box-plr p-relative">
    <div class="tp-about-shape d-none d-xl-block">
      <img class="shape-1" :src="shape_1" alt="image-title-here" />
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-4 col-lg-12">
          <div class="tp-about-wrapper-thumb text-center text-xl-start fadeLeft">
            <img :src="about_img_1" alt="image-title-here" />
          </div>
        </div>
        <div class="col-xl-8 col-lg-10">
          <div class="tp-about-wrapper pl-50">
            <div class="row">
              <div class="col-lg-8">
                <div class="tp-about-title-wrapper p-relative">
                  <span class="tp-section-title__pre">
                    best <span class="title-pre-color">it service</span>
                    <TitleUnderIcon /> 
                  </span>
                  <h3 class="tp-section-title">
                    It Industries We're Offering
                    <span class="title-left-shape">
                        <AboutLineIcon /> 
                    </span>
                  </h3>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="tp-about-nav d-none d-md-block p-relative">
                  <button type="button" class="about-button-prev-1">
                    <i class="fa-regular fa-arrow-left"></i>
                  </button>
                  <button type="button" class="about-button-next-1">
                    <i class="fa-regular fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="tp-about-item-wrapper">
              <div class="about-active swiper-container">
                <swiper
                  :loop="true"
                  :space-between="50"
                  :modules="[Navigation]"
                  :breakpoints="{
                    '@0.00': {
                      slidesPerView: 1,
                    },
                    '@0.50': {
                      slidesPerView: 1,
                    },
                    '@0.75': {
                      slidesPerView: 2,
                    },
                    '@1.00': {
                      slidesPerView: 2,
                    },
                    '@1.50': {
                      slidesPerView: 2,
                    },
                    '@2.00': {
                      slidesPerView: 3,
                    },
                  }"
                  :navigation="{
                    nextEl: '.about-button-next-1',
                    prevEl: '.about-button-prev-1',
                  }"
                >
                  <swiper-slide v-for="(item, i) in about_data" :key="i">
                    <div class="tp-about-item mb-30">
                      <div class="tp-about-item-thumb">
                        <img :src="item.img" alt="image-title-here" />
                      </div>
                      <div class="tp-about-item-content">
                        <h4 class="about-title">{{ item.title }}</h4>
                        <p v-html="item.description"></p>
                        <div class="tp-about-item-btn">
                          <router-link to="/about">
                            <i class="fa-regular fa-arrow-right"></i>
                          </router-link>
                        </div>
                      </div>
                    </div>
                  </swiper-slide>
                </swiper>
              </div>

              <div class="tp-about-call">
                <a href="tel:01310-069824">
                  <p>
                    <i class="fa-solid fa-phone"></i>
                    Provide IT services to hundreds customers
                    <span>+14842634813</span>
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
