
<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import HeaderOne from "@/layouts/headers/HeaderOne.vue";
import BlogDetailsPostbox from "./BlogDetailsPostbox.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>

<template>
  <HeaderOne />
  <main>
    <Breadcrumb title="Blog Details" page_title="Blog Details" />
    <BlogDetailsPostbox />
    <FooterContact />
  </main>
  <CommonFooter />
</template>


