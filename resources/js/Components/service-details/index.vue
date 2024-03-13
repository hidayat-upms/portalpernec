<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceDetailsArea from "./ServiceDetailsArea.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Machine Learning" page_title="Service Details" />
    <ServiceDetailsArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


