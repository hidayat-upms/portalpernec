   
<script setup>
import ContactArea from "./ContactArea.vue";
import GoogleMapArea from "./GoogleMapArea.vue";
// import FooterContact from "./FooterContact.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
import loadingSpinner from "@/Components/loadingSpinner.vue";


</script>

<template>
  <loadingSpinner></loadingSpinner>
  <HeaderThree/>
  <main>
    <Breadcrumb title="Contact Us" page_title="Contact Us" />
    <ContactArea />
    <GoogleMapArea />
    <!-- <FooterContact /> -->
  </main>
  <CommonFooter />
</template>
