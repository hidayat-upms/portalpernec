
<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import PortfolioDetailsArea from "../portfolio-details/PortfolioDetailsArea.vue";
</script>


<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Portfolio Details" page_title="Portfolio Details" />
    <PortfolioDetailsArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>

