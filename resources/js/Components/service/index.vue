<script setup>
  import Breadcrumb from "../common/Breadcrumb.vue";
  import ServiceArea from "./ServiceArea.vue";
  import VideoArea from "./VideoArea.vue"; 
  import IndustryArea from "./IndustryArea.vue";
  import ServiceBrand from "./ServiceBrand.vue";
  import FooterContact from "./FooterContact.vue";
  import ServiceBlogArea from "./ServiceBlogArea.vue";
  import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
  import CommonFooter from "@/Layouts/footers/CommonFooter.vue"; 


</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Our Service"  page_title="Service" />
    <ServiceArea />
    <VideoArea /> 
    <IndustryArea />
    <ServiceBrand />
    <ServiceBlogArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


