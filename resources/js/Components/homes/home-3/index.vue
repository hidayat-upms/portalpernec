<script setup>
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
import HeroAreaHomeThree from "./HeroAreaHomeThree.vue";
import CounterAreaHomeThree from "./CounterAreaHomeThree.vue";
import AboutAreaHomeThree from "./AboutAreaHomeThree.vue";
import AboutCategoryArea from "./AboutCategoryArea.vue";
import ServiceAreaHomeThree from "./ServiceAreaHomeThree.vue";
import CtaAreaHomeThree from "./CtaAreaHomeThree.vue";
import FeatureAreaHomeThree from "./FeatureAreaHomeThree.vue";
import TestimonialFeature from "../../about/TestimonialFeature.vue";
import CommonFooter from "../../../Layouts/footers/CommonFooter.vue";
import { provide, ref } from "vue";

//  props passing
const addClass = ref(true);
provide('addClass', addClass)

const handleAddClass = (value = true) => { 
	addClass.value = value ;
};


</script>

<template>
  <div class="wow bounceIn" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <HeroAreaHomeThree />
    <CounterAreaHomeThree />
    <AboutAreaHomeThree />
    <AboutCategoryArea />
    <ServiceAreaHomeThree />
    <CtaAreaHomeThree />
    <FeatureAreaHomeThree />
    <TestimonialFeature />
  </main>
  <CommonFooter />
</div>
</template>


