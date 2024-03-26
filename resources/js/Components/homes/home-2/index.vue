<script setup>
 
import BrandHomeTwo from "./BrandHomeTwo.vue";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo.vue";
import HeroAreaHomeThree from "@/Components/homes/home-3/HeroAreaHomeThree.vue";
import OfferAreaHomeTwo from "./OfferAreaHomeTwo.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import BusinessAreaHomeTwo from "./BusinessAreaHomeTwo.vue";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo.vue";
import { provide, ref, onMounted } from "vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
import Preloader from "@/Components/loadingSpinner.vue";
 
//  props passing
const addClass = ref(true);
provide('addClass', addClass)
 
const loading = ref(true);
 
// Simulate server-side loading
onMounted(() => {
  setTimeout(() => {
    loading.value = false; // Once server data is loaded, hide the preloader
  }, 2000); // Simulating 2 seconds of loading time
});
</script>
 
 
<template>
  <Preloader v-if="loading" />
  <div v-else>
    <div class="wow fadeIn" data-wow-duration="2s">
      <HeaderThree />
      <main>
        <HeroAreaHomeThree />
        <BusinessAreaHomeTwo />
        <OfferAreaHomeTwo />
        <BlogAreaHomeTwo />
        <TestimonialAreaHomeTwo />
        <BrandHomeTwo />
      </main>
      <CommonFooter />
    </div>
  </div>
</template>