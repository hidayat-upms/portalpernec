   
   <script setup>
import ContactArea from "./ContactArea.vue";
import GoogleMapArea from "./GoogleMapArea.vue";
import FooterContact from "./FooterContact.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Contact Us" page_title="Contact Us" />
    <ContactArea />
    <GoogleMapArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>
