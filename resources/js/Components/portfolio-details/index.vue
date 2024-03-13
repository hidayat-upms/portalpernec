
<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import PortfolioDetailsArea from "../portfolio-details/PortfolioDetailsArea.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>


<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Portfolio Details" page_title="Portfolio Details" />
    <PortfolioDetailsArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>

