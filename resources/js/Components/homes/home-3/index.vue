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
import AboutBrand from "../../about/AboutBrand.vue";
import AboutTeamArea from "../../about/AboutTeamArea.vue";
import AboutBlogArea from "../../about/AboutBlogArea.vue";
import FooterContact from "../../service/FooterContact.vue";
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
    <AboutBrand />
    <AboutTeamArea @handleAddClass="handleAddClass" />
    <AboutBlogArea @handleAddClass="handleAddClass" />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


