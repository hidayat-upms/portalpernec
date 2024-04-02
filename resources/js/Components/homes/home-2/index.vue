<script setup>
 
import BrandHomeTwo from "./BrandHomeTwo.vue";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo.vue";
import HeroAreaHomeThree from "@/Components/homes/home-2/HeroAreaHomeThree.vue";
import OfferAreaHomeTwo from "./OfferAreaHomeTwo.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import BusinessAreaHomeTwo from "./BusinessAreaHomeTwo.vue";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo.vue";
import { provide, ref, onMounted } from "vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
// import { onMounted } from 'vue';
import loadingSpinner from "@/Components/loadingSpinner.vue";

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

</template>
 

// <!-- /* Loader styles can be added here */ -->
// <!-- <style scoped>
// .loader-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background-color: rgba(255, 255, 255, 0.9); /* Adjust the opacity as needed */
//   z-index: 9999; /* Ensure it's on top of other elements */
// }

// .loader {
//   border: 8px solid #f3f3f3;
//   border-radius: 50%;
//   border-top: 8px solid #3498db;
//   width: 50px;
//   height: 50px;
//   animation: spin 1s linear infinite;
// }

// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// }
// </style> -->
