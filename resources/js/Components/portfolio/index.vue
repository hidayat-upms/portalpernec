<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import PortfolioArea from "./PortfolioArea.vue";
import FooterContact from "./FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="IT Advisor" page_title="Portfolio" />
    <PortfolioArea />
    <FooterContact />
  </main>
    <CommonFooter />
</template>


