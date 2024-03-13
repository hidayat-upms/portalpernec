
<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import BlogDetailsPostbox from "./BlogDetailsPostbox.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Blog Details" page_title="Blog Details" />
    <BlogDetailsPostbox />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


