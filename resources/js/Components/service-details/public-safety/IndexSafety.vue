<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import CyberSecurity from "./PublicSafety.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Puclic Safety" page_title="Puclic Safety" />
    <CyberSecurity />
  </main>
  <CommonFooter />
</template>