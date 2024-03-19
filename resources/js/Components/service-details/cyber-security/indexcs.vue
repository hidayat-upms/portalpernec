<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CyberSecurity from "./CyberSecurity.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Cyber Security Solutions" page_title="Cyber Security Solutions" />
    <CyberSecurity />
  </main>
  <CommonFooter />
</template>