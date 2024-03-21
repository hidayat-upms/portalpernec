
<script setup>
import brand_img_1 from "@/assets/img/brand/home-2/client1.svg";
import brand_img_2 from "@/assets/img/brand/home-2/client2.svg";
import brand_img_3 from "@/assets/img/brand/home-2/client3.svg";
import brand_img_4 from "@/assets/img/brand/home-2/client4.svg";
import brand_img_5 from "@/assets/img/brand/home-2/client5.svg";
import shape_bg from "@/assets/img/brand/home-2/shape-bg.png";

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
    </div>
  </div>
</template>


