<script setup>

import BrandHomeTwo from "./BrandHomeTwo.vue";
import CtaAreaHomeTwo from "./CtaAreaHomeTwo.vue";
import BlogAreaHomeTwo from "./BlogAreaHomeTwo.vue";
import HeroAreaHomeTwo from "./HeroAreaHomeTwo.vue";
import OfferAreaHomeTwo from "./OfferAreaHomeTwo.vue";
import CounterAreaHomeTwo from "./CounterAreaHomeTwo.vue";
import IndustryArea from "../../service/IndustryArea.vue";
import FeatureAreaHomeTwo from "./FeatureAreaHomeTwo.vue";
import HeaderTwo from "@/layouts/headers/HeaderTwo.vue";
import FooterTwo from "@/layouts/footers/FooterTwo.vue";
import BusinessAreaHomeTwo from "./BusinessAreaHomeTwo.vue";
import TestimonialAreaHomeTwo from "./TestimonialAreaHomeTwo.vue";
import { provide, ref } from "vue";

//  props passing
const addClass = ref(true);
provide('addClass', addClass)

const handleAddClass = (value = true) => { 
	addClass.value = value ;
};


</script>


<template>
  <HeaderTwo />
  <main>
    <HeroAreaHomeTwo />
    <OfferAreaHomeTwo />
    <BusinessAreaHomeTwo />
    <CounterAreaHomeTwo />  
    <IndustryArea @handleAddClass="handleAddClass" />
    <FeatureAreaHomeTwo />
    <BrandHomeTwo />
    <BlogAreaHomeTwo />
    <TestimonialAreaHomeTwo />
    <CtaAreaHomeTwo />
  </main>
  <FooterTwo />
</template>
 
 
