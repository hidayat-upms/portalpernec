  
<script setup> 
import AboutArea from "./AboutArea.vue"; 
import Breadcrumb from "../common/Breadcrumb.vue";
import AboutFeatureArea from "./AboutFeatureArea.vue"; 
import TestimonialFeature from "./TestimonialFeature.vue"; 
import AboutBrand from "./AboutBrand.vue"; 
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
    <TestimonialFeature />
    <AboutBrand />
    <FooterContact />
  </main>
    <CommonFooter />
    
</template>
