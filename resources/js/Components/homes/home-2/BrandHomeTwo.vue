<script setup>
import brand_img_1 from "@/assets/img/brand/home-2/client1.svg";
import brand_img_2 from "@/assets/img/brand/home-2/client2.svg";
import brand_img_3 from "@/assets/img/brand/home-2/client3.svg";
import brand_img_4 from "@/assets/img/brand/home-2/client4.svg";
import brand_img_5 from "@/assets/img/brand/home-2/client5.svg";
import brand_img_6 from "@/assets/img/brand/home-2/1.png";
import brand_img_7 from "@/assets/img/brand/home-2/2.png";
import brand_img_8 from "@/assets/img/brand/home-2/3.png";
import brand_img_9 from "@/assets/img/brand/home-2/4.png";
import brand_img_10 from "@/assets/img/brand/home-2/5.png";
import brand_img_11 from "@/assets/img/brand/home-2/6.png";
import brand_img_12 from "@/assets/img/brand/home-2/7.png";
import brand_img_13 from "@/assets/img/brand/home-2/8.png";
import brand_img_14 from "@/assets/img/brand/home-2/9.png";
import brand_img_15 from "@/assets/img/brand/home-2/10.png";
import brand_img_16 from "@/assets/img/brand/home-2/11.png";
import brand_img_17 from "@/assets/img/brand/home-2/12.png";
import brand_img_18 from "@/assets/img/brand/home-2/13.png";
import brand_img_19 from "@/assets/img/brand/home-2/14.png";
import brand_img_20 from "@/assets/img/brand/home-2/15.png";
import brand_img_21 from "@/assets/img/brand/home-2/16.png";
import brand_img_22 from "@/assets/img/brand/home-2/17.png";
import brand_img_23 from "@/assets/img/brand/home-2/18.png";
import brand_img_24 from "@/assets/img/brand/home-2/19.png";
import brand_img_25 from "@/assets/img/brand/home-2/20.png";
import brand_img_26 from "@/assets/img/brand/home-2/21.png";
import brand_img_27 from "@/assets/img/brand/home-2/22.png";
import brand_img_28 from "@/assets/img/brand/home-2/23.png";
import brand_img_29 from "@/assets/img/brand/home-2/25.png";
import brand_img_30 from "@/assets/img/brand/home-2/26.png";
import brand_img_31 from "@/assets/img/brand/home-2/27.png";
import brand_img_32 from "@/assets/img/brand/home-2/28.png";
import brand_img_33 from "@/assets/img/brand/home-2/29.png";
import brand_img_34 from "@/assets/img/brand/home-2/30.png";
import brand_img_35 from "@/assets/img/brand/home-2/31.png";
import brand_img_36 from "@/assets/img/brand/home-2/32.png";
import brand_img_37 from "@/assets/img/brand/home-2/33.png";
import brand_img_38 from "@/assets/img/brand/home-2/34.png";
import brand_img_39 from "@/assets/img/brand/home-2/35.png";
import brand_img_40 from "@/assets/img/brand/home-2/36.png";
import brand_img_41 from "@/assets/img/brand/home-2/37.png";
import brand_img_42 from "@/assets/img/brand/home-2/38.png";
import brand_img_43 from "@/assets/img/brand/home-2/39.png";
import brand_img_44 from "@/assets/img/brand/home-2/40.png";
import brand_img_45 from "@/assets/img/brand/home-2/41.png";


import shape_bg from "@/assets/img/brand/home-2/shape-bg.png";
import { ref, onMounted, onUnmounted } from 'vue';

const paused = ref(false);
const brandContainer = ref(null);

const stopMarquee = () => {
  paused.value = true;
};

const startMarquee = () => {
  paused.value = false;
};

const brandImages = [
  brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,
  brand_img_6, brand_img_7, brand_img_8, brand_img_9, brand_img_10,
  brand_img_11, brand_img_12, brand_img_13, brand_img_14, brand_img_15,
  brand_img_16, brand_img_17, brand_img_18, brand_img_19, brand_img_20,
  brand_img_21, brand_img_22, brand_img_23, brand_img_24, brand_img_25,
  brand_img_26, brand_img_27, brand_img_28, brand_img_29, brand_img_30,
  brand_img_31, brand_img_32, brand_img_33, brand_img_34, brand_img_35,
  brand_img_36, brand_img_37, brand_img_38, brand_img_39, brand_img_40,
  brand_img_41, brand_img_42, brand_img_43, brand_img_44, brand_img_45,
];

// Duplicate the brandImages array to create an extended loop
const extendedBrandImages = brandImages.concat(brandImages);

</script>

<template>
  <section class="tp-brand-2-area p-relative pt-120 pb-100" @mouseover="stopMarquee" @mouseleave="startMarquee">
    <div class="tp-brand-2-bg" :style="{ backgroundImage: `url(${shape_bg})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="tp-brand-2-item" :class="{ 'paused': paused }" ref="brandContainer">

            <img class="shape-4" v-for="brand in extendedBrandImages" :src="brand" :key="brand" alt="brand-image" />

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tp-brand-2-area {
  background: var(--tp-bg-primary);
  overflow: hidden;
  z-index: 1;
}

.tp-brand-2-item {
  display: flex;
  animation: marquee 20s linear infinite;
}



.tp-brand-2-item.paused {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(-100%);
  }
}

.shape-4 {
  max-width: 100px;
  margin-right: 20px;
}

.tp-brand-2-item img:last-child {
  margin-right: 0;
}

.tp-brand-2-bg {
  z-index: -1;
  background-size: cover;
  background-position: absolute;
  margin-top: 100px;
}

.tp-section-header {
  position: absolute;
  left: 50px;
}

.tp-section-title {
  font-size: 32px;
  color: #333;
  margin-top: 0;
  padding-bottom: 100px;
}
</style>
