<script setup> 
// import CircleProgress from "vue3-circle-progress";

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
                Our Decades-Long Expertise in <span class="title-pre-color"> ICT System Integration</span>
                <TitleUnderIcon />
              </span>
              <h3 class="tp-section-title">
                Business <span class="title-color"> Overview</span>
                
              </h3>
            </div>
            <p class="text">
              We are dedicated to providing comprehensive and innovative solutions 
              that drive the digital transformation of businesses.</br> 
              Through our end-to-end system integration solutions and services,</br>
              we enable organizations to navigate the complexities of modern</br>
              technology and emerge stronger, more efficient, and more competitive.
              <!-- <br />
              through land transport. -->
            </p>
            <p class="text">
              We have been involved in turnkey Telco solutions to the nation’s </br>
              telecommunication network, as well as people-centric business systems. </br> 
              Our involvement require that we interact closely with stakeholders, </br>
              understand the functional and business requirements and propose </br>
              best-fit innovative solutions. Our solutions are supported by our flexible </br>
              delivery model.
            </p>

            <p class="text">
              Our commitment to excellence in service delivery is evident in every aspect of our services, from initial consultation to final implementation. 
              We provide transformative solutions that are adaptable to each project's unique circumstances, enabling us to navigate digital transformation challenges 
              with agility and precision. With a rich history as an ICT System Integrator, we offer global best practices tailored to local contexts. 
              Our solutions are designed to optimize operations, enhance customer experiences, and drive business growth, empowering organizations to achieve their strategic objectives with confidence.


            </p>
            <!-- <div class="tp-about-progressbar-inner d-flex flex-wrap pt-20">
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
                </div> -->
                <!-- <div class="tp-about-3-progressbar-title">
                  <p>
                    Business <br />
                    Strategy Growth
                  </p>
                </div> -->
              <!-- </div>
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
                </div> -->
              <!-- </div>
            </div> --> 
            <!-- <div class="tp-about-3-btn-inner d-flex flex-wrap">
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
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.text{
  text-align: justify;
}
</style>