  
  <script setup>
import PostboxArea from "./PostboxArea.vue";
import HeaderOne from "@/layouts/headers/HeaderOne.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Blog" page_title="Blog" />
    <PostboxArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>
