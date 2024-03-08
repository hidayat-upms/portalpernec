<script setup>
import AboutAreaHomeOne from "./AboutAreaHomeOne.vue";
import BlogAreaHomeOne from "./BlogAreaHomeOne.vue";
import BrandAreaHomeOne from "./BrandAreaHomeOne.vue";
import FaqAreaHomeOne from "./FaqAreaHomeOne.vue";
import FeatureAreaHomeOne from "./FeatureAreaHomeOne.vue";
import HeroAreaHomeOne from "./HeroAreaHomeOne.vue";
import ServiceAreaHomeOne from "./ServiceAreaHomeOne.vue";
import SliderAreaHomeOne from "./SliderAreaHomeOne.vue";
import SupportAreaHomeOne from "./SupportAreaHomeOne.vue";
import TestimonialHomeOne from "./TestimonialHomeOne.vue";
import FooterOne from "@/Layouts/footers/FooterOne.vue";
import HeaderOne from "@/Layouts/headers/HeaderOne.vue"; 


</script>

<template> 
  <HeaderOne />
  <main>
    <HeroAreaHomeOne />
    <AboutAreaHomeOne />
    <FeatureAreaHomeOne />
    <ServiceAreaHomeOne />
    <BrandAreaHomeOne />
    <SupportAreaHomeOne />
    <TestimonialHomeOne />
    <SliderAreaHomeOne />
    <FaqAreaHomeOne />
    <BlogAreaHomeOne />
  </main>
  <FooterOne />
</template>

