   
<script setup>
import ContactArea from "./ContactArea.vue";
import GoogleMapArea from "./GoogleMapArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <div class="wow fadeInLeft" data-wow-duration="2s"> 
  <HeaderThree/>
  <main>
    <Breadcrumb title="Contact Us" page_title="Contact Us" />
    <ContactArea />
    <GoogleMapArea />
  </main>
  <CommonFooter />
  </div>
</template>
