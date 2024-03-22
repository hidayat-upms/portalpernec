  
<script setup> 
import AboutArea from "./AboutArea.vue"; 
import AboutSupportArea from "./AboutSupportArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import AboutFeatureArea from "./AboutFeatureArea.vue"; 
import TestimonialText from "./TestimonialText.vue"; 
// import AboutPernec from "./AboutPernec.vue";
import TestimonialFeature from "./TestimonialFeature.vue"; 
import FooterContact from "../service/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue"; 
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";



</script>

<template>
  <HeaderThree />
  <main>  
    <Breadcrumb title="Company" page_title="Our Company"  />
    <AboutArea />
    <AboutFeatureArea />
    <!-- <AboutPernec/> -->
    <AboutSupportArea/>
    <TestimonialText/>
    <TestimonialFeature/>
    <FooterContact />
  </main>
    <CommonFooter />
    
</template>
