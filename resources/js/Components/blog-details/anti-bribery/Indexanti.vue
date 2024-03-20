<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Antibribery from "@/Components/blog-details/anti-bribery/Antibribery.vue";
import FooterContact from "@/Components/portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Anti-Bribery & Corruption" page_title="Anti-Bribery & Corruption" />
    <Antibribery />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


