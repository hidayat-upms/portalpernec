
<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

import brand_img_1 from "@/assets/img/brand/home-3/brand-1.png";
import brand_img_2 from "@/assets/img/brand/home-3/brand-2.png";
import brand_img_3 from "@/assets/img/brand/home-3/brand-3.png";
import brand_img_4 from "@/assets/img/brand/home-3/brand-4.png";
import brand_img_5 from "@/assets/img/brand/home-3/brand-5.png";

const brand_img = reactive([
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
])
</script>

<template>
  <div class="tp-brand-3-area breadcrumb-brand p-relative pt-65 pb-60">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-brand-3-wrapper">
            <swiper :slides-per-view="5" :space-between="20" :loop="true" :breakpoints="{
              '@0.00': {
                slidesPerView: 1,
              },
              '@0.50': {
                slidesPerView: 2,
              },
              '@0.75': {
                slidesPerView: 2,
              },
              '@1.00': {
                slidesPerView: 2,
              },
              '@1.50': {
                slidesPerView: 4,
              },
              '@2.00': {
                slidesPerView: 5,
              },
            }" class="brand-3-active swiper-container">

              <swiper-slide v-for="(item, i) in brand_img" :key="i" class="swiper-slide">
                <div class="tp-brand-3-thumb">
                  <img :src="item" alt="image-title-here">
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

