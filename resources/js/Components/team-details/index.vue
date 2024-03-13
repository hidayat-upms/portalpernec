  <script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import TeamDetailsArea from "./TeamDetailsArea.vue";
import FooterContact from "../portfolio/FooterContact.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Team Details" page_title="Team Details" />
    <TeamDetailsArea />
    <FooterContact />
  </main>
  <CommonFooter />
</template>

