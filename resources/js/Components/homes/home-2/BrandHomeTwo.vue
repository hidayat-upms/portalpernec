
<script setup>
import brand_img_1 from "@/assets/img/brand/home-2/shape-1.png";
import brand_img_2 from "@/assets/img/brand/home-2/shape-2.png";
import brand_img_3 from "@/assets/img/brand/home-2/shape-3.png";
import brand_img_4 from "@/assets/img/brand/home-2/shape-4.png";
import brand_img_5 from "@/assets/img/brand/home-2/shape-5.png";
import shape_bg from "@/assets/img/brand/home-2/shape-bg.png"
</script>

<template>
  <div class="tp-brand-2-area p-relative pt-120 pb-80">
    <div class="tp-brand-2-bg" :style="{ backgroundImage: `url(${shape_bg})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-md-4">
          <div class="tp-brand-2-item">
            <img class="shape-1" :src="brand_img_1" alt="image-title-here" />
            <img class="shape-2" :src="brand_img_2" alt="image-title-here" />
          </div>
        </div>
        <div class="col-lg-2 col-md-4 order-sm-3 order-md-2">
          <div class="tp-brand-2-item">
            <img class="shape-3" :src="brand_img_3" alt="image-title-here" />
          </div>
        </div>
        <div class="col-lg-5 col-md-4 order-sm-2 order-md-3">
          <div class="tp-brand-2-item">
            <img class="shape-4" :src="brand_img_4" alt="image-title-here" />
            <img class="shape-5" :src="brand_img_5" alt="image-title-here" />
          </div>
        </div>
      </div>
      <div class="row justify-content-center pt-80">
        <div class="col-lg-8">
          <div class="tp-brand-2-trend text-center">
            <p>
              <i class="fa-regular fa-arrow-right-long"></i>
              IMPROVE AND INNOVATE WITH THE
              <router-link to="/portfolio">TECH TRENDS</router-link>
              <i class="fa-regular fa-arrow-left-long"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


