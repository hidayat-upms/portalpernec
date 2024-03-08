

<script setup>
import TeamArea from "./TeamArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import HeaderOne from "@/Layouts/headers/HeaderOne.vue";
import FooterContact from "../portfolio/FooterContact.vue";  
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
</script>


<template>
   <HeaderOne />
   <main>
      <Breadcrumb title="Team" page_title="Team" />
      <TeamArea />
      <FooterContact />
   </main>
   <CommonFooter />
</template>
