<script setup>

import BrandHomeTwo from "./BrandHomeTwo.vue";
import CtaAreaHomeTwo from "./CtaAreaHomeTwo.vue";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo.vue";
import HeroAreaHomeThree from "@/Components/homes/home-3/HeroAreaHomeThree.vue";
import OfferAreaHomeTwo from "./OfferAreaHomeTwo.vue";
import FeatureAreaHomeTwo from "./FeatureAreaHomeTwo.vue";
import FooterTwo from "@/Layouts/footers/FooterTwo.vue";
import BusinessAreaHomeTwo from "./BusinessAreaHomeTwo.vue";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo.vue";
import { provide, ref } from "vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

//  props passing
const addClass = ref(true);
provide('addClass', addClass)


</script>


<template>
  <HeaderThree />
  <main>
    <HeroAreaHomeThree />
    <OfferAreaHomeTwo />
    <BusinessAreaHomeTwo />
    <FeatureAreaHomeTwo />
    <BrandHomeTwo />
    <BlogAreaHomeTwo />
    <TestimonialAreaHomeTwo />
    <CtaAreaHomeTwo />
  </main>
  <FooterTwo />
</template>
 
 
