<script setup> 
import CircleProgress from "vue3-circle-progress";

import TitleUnderIcon from "../../svg/TitleUnderIcon.vue";
import about_shape from "@/assets/img/business/shape-5.png";

// about img import here
import about_img_1 from "@/assets/img/about/about-1.png";

const date = new Date();
const fullYear = date.getFullYear();
function getMonthName(date) {
  const options = { month: "long" };
  return date.toLocaleString("en-US", options);
}
const today = date.getDate();
</script>

<template>
  <section class="tp-about-breadcrumb p-relative pt-100 pb-90">
    <div class="tp-about-3-shape d-none d-lg-block">
      <img :src="about_shape" alt="shape" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="tp-about-breadcrumb-img p-relative text-center fadeLeft">
            <img :src="about_img_1" alt="image-title-here" />
          </div>
        </div>
        <div class="col-lg-6">
          <div class="tp-about-3-wrapper">
            <div class="tp-about-3-title-wrapper">
              <span class="tp-section-title__pre">
                about <span class="title-pre-color">IT Solutions </span>
                <TitleUnderIcon />
              </span>
              <h3 class="tp-section-title">
                Best Digital <span class="title-color">Technology</span> <br />
                Agency For People
              </h3>
            </div>
            <p class="text">
              Transmax is the world's driving worldwide coordinations supplier —
              we <br />
              uphold industry and exchange the worldwide trade of merchandise
              <br />
              through land transport.
            </p>
            <div class="tp-about-progressbar-inner d-flex flex-wrap pt-20">
              <div class="tp-about-3-progressbar d-flex align-items-center">
                <div class="circular tl-progress">
                  <circle-progress
                    :border-width="7"
                    style="
                      width: 96px;
                      height: 96px;
                      font-weight: 700;
                      font-size: 18px;
                    "
                    fill-color="#05dac3"
                    :bg-shadow="{
                      inset: true,
                      vertical: 2,
                      horizontal: 2,
                      blur: 1,
                      opacity: 0.4,
                      color: '#000000',
                    }"
                    :border-bg-width="7"
                    percent="65"
                    show-percent="true"
                  />
                </div>
                <div class="tp-about-3-progressbar-title">
                  <p>
                    Business <br />
                    Strategy Growth
                  </p>
                </div>
              </div>
              <div class="tp-about-3-progressbar d-flex align-items-center">
                <div class="circular tl-progress">
                  <circle-progress
                    :border-width="7"
                    style="
                      width: 96px;
                      height: 96px;
                      font-weight: 700;
                      font-size: 18px;
                    "
                    fill-color="#05dac3"
                    :bg-shadow="{
                      inset: true,
                      vertical: 2,
                      horizontal: 2,
                      blur: 1,
                      opacity: 0.4,
                      color: '#000000',
                    }"
                    :border-bg-width="7"
                    percent="75"
                    show-percent="true"
                  />
                </div>
                <div class="tp-about-3-progressbar-title">
                  <p>
                    Health Valuable <br />
                    Ideas
                  </p>
                </div>
              </div>
            </div>
            <div class="tp-about-3-btn-inner d-flex flex-wrap">
              <div class="tp-about-btn">
                <router-link class="tp-btn" to="/about">
                  Our History
                  <i class="fa-regular fa-arrow-right-long"></i>
                </router-link>
              </div>
              <div class="tp-about-3-year">
                <p>
                  BRENDON GARREY
                  <br />
                  <span>
                    mayor, since {{ today }} {{ getMonthName(date) }},
                    {{ fullYear }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
