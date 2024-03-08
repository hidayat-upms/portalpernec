<script setup>
 
 import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import feature_icon_1 from "@/assets/img/feature/home-3/icon-1.png";
import feature_icon_2 from "@/assets/img/feature/home-3/icon-2.png";
import feature_icon_3 from "@/assets/img/feature/home-3/icon-3.png";
import feature_icon_4 from "@/assets/img/feature/home-3/icon-4.png";

const feature_data =reactive([
    {
        id: 1, 
        img: feature_icon_1,
        title: "Quick response",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 2, 
        img: feature_icon_2,
        title: "perfect solutions",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 3, 
        img: feature_icon_3,
        title: "No Geek Speeks",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 4, 
        img: feature_icon_4,
        title: "100% Satisfaction",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 5, 
        img: feature_icon_1,
        title: "Quick response",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 6, 
        img: feature_icon_2,
        title: "perfect solutions",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 7, 
        img: feature_icon_3,
        title: "No Geek Speeks",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
    {
        id: 8, 
        img: feature_icon_4,
        title: "100% Satisfaction",
        description: "onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun",
    },
])

</script>

<template>
  <section class="tp-feature-3-area pt-100" style="background-image: url(/assets/img/feature/home-3/feature-bg.png)">
    <div class="container-fluid gx-0">
        <div class="row gx-0">
          <swiper  :slides-per-view="4"
              :space-between="20"
              :loop="true"
              :breakpoints="{
                '@0.00': {
                  slidesPerView: 1,
                },
                '@0.50': {
                  slidesPerView: 1,
                },
                '@0.75': {
                  slidesPerView: 1,
                },
                '@1.00': {
                  slidesPerView: 2,
                },
                '@1.50': {
                  slidesPerView: 2,
                },
                '@1.75': {
                  slidesPerView: 3,
                },
                '@2.00': {
                  slidesPerView: 4,
                },
              }" class="feature-3-active swiper-container">
            <swiper-slide v-for="(item, index) in feature_data" :key="index" class="swiper-slide">
                <div class="tp-feature-3-content-inner d-flex align-items-center">
                  <div class="tp-feature-3-content-thumb">
                      <img :src="item.img" alt="image-title-here">
                  </div>
                  <div class="tp-feature-3-content">
                      <h3 class="tp-feature-title">{{ item.title }}</h3>
                      <p>{{ item.description }}</p>
                  </div>
                </div>
            </swiper-slide> 
          </swiper>
        </div>
    </div>
    <div class="row gx-0">
        <div class="col-xl-12">
          <div class="tp-feature-3-text-style text-center fadeUp pt-80">
              <h3 class="feature-title" style="background-image: url(/assets/img/feature/home-3/text-img.jpg);">testimonial</h3>
          </div>
        </div>
    </div>
  </section>
</template>


