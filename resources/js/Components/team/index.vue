

<script setup>
import TeamArea from "./TeamArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue";
import FooterContact from "../portfolio/FooterContact.vue";  
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>


<template>
   <HeaderThree />
   <main>
      <Breadcrumb title="Team" page_title="Team" />
      <TeamArea />
      <FooterContact />
   </main>
   <CommonFooter />
</template>
