<script setup>
import AboutArea from "./AboutArea.vue";
import AboutSupportArea from "./AboutSupportArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import AboutFeatureArea from "./AboutFeatureArea.vue";
import TestimonialText from "./TestimonialText.vue";
import AboutPernec from "./AboutPernec.vue";
import TestimonialFeature from "./TestimonialFeature.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
// import loadingSpinner from "@/Components/loadingSpinner.vue";



</script>
<template>
  <div class="wow fadeInLeft" data-wow-duration="2s">
  <loadingSpinner></loadingSpinner>
  <HeaderThree />
  <main>  
    <Breadcrumb title="Company" page_title="Our Company"  />
    <AboutArea />
    <AboutFeatureArea />
    <AboutPernec />
    <AboutSupportArea />
    <TestimonialFeature />
    <TestimonialText />
  </main>
    <CommonFooter />
  </div>
</template>
