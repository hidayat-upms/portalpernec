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

//  props passing
const addClass = ref(true);
provide('addClass', addClass)


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
