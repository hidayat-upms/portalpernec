  
  <script setup>
import PostboxArea from "./PostboxArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Blog" page_title="Blog" />
    <PostboxArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>
