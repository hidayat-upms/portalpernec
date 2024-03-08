  
<script setup>
import HeaderOne from "@/Layouts/headers/HeaderOne.vue"; 
import AboutArea from "./AboutArea.vue"; 
import Breadcrumb from "../common/Breadcrumb.vue";
import AboutCounterArea from "./AboutCounterArea.vue"; 
import AboutFeatureArea from "./AboutFeatureArea.vue"; 
import AboutSupportArea from "./AboutSupportArea.vue"; 
import AboutVideoArea from "./AboutVideoArea.vue"; 
import TestimonialText from "./TestimonialText.vue"; 
import TestimonialFeature from "./TestimonialFeature.vue"; 
import AboutBrand from "./AboutBrand.vue"; 
import AboutTeamArea from "./AboutTeamArea.vue"; 
import AboutBlogArea from "./AboutBlogArea.vue";
import FooterContact from "../service/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue"; 


</script>

<template>
  <HeaderOne />
  <main>  
    <Breadcrumb title="Company" page_title="Our Company"  />
    <AboutArea />
    <AboutCounterArea />
    <AboutFeatureArea />
    <AboutSupportArea />
    <AboutVideoArea />
    <TestimonialText />
    <TestimonialFeature />
    <AboutBrand />
    <AboutTeamArea />
    <AboutBlogArea />
    <FooterContact />
  </main>
    <CommonFooter />
    
</template>
