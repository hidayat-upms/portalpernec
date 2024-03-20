<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Nogift from "@/Components/blog-details/no-gift/Nogift.vue";
import FooterContact from "@/Components/portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="No Gift" page_title="No Gift" />
    <Nogift />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


