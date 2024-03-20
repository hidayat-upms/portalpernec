<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceArea from "./ServiceArea.vue";
import VideoArea from "./VideoArea.vue"; 
import IndustryArea from "./IndustryArea.vue";
import ServiceBrand from "./ServiceBrand.vue";
import FooterContact from "./FooterContact.vue";
import ServiceBlogArea from "./ServiceBlogArea.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue"; 
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";


</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Our Service"  page_title="Service" />
    <ServiceArea />

 

    <ServiceBlogArea />
  </main>
  <CommonFooter />
</template>


