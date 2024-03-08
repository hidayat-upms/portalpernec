<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import PortfolioArea from "./PortfolioArea.vue";
import FooterContact from "./FooterContact.vue";
import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="IT Advisor" page_title="Portfolio" />
    <PortfolioArea />
    <FooterContact />
  </main>
    <CommonFooter />
</template>


