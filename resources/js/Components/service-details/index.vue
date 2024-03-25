<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceDetailsArea from "./ServiceDetailsArea.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
    <HeaderThree />
    <main>
      <Breadcrumb title="Machine Learning" page_title="Service Details" />
      <ServiceDetailsArea />
    </main>
    <CommonFooter />
  </div>
</template>
