

<script setup>
import TeamArea from "./TeamArea.vue";
import Breadcrumb from "../common/Breadcrumb.vue"; 
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>


<template>
   <loadingSpinner></loadingSpinner>
   <div class="wow fadeInLeft" data-wow-duration="2s"> 
   <HeaderThree />
   <main>
      <Breadcrumb title="Team" page_title="Team" />
      <TeamArea />
   </main>
   <CommonFooter />
   </div>
</template>
