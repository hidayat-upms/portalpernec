<script setup>
import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceDetailsArea from "./ServiceDetailsArea.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";

</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Machine Learning" page_title="Service Details" />
    <ServiceDetailsArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


