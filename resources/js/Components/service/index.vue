<script setup>
import Breadcrumb from "../common/Breadcrumb.vue";
import ServiceArea from "./ServiceArea.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";


</script>

<template>
  <div class="wow fadeInLeft" data-wow-duration="2s">
  <HeaderThree />
  <main>

    <Breadcrumb title="Our Business" page_title="Integrate & Our Offerings" />
    <ServiceArea />

  </main>
  <CommonFooter />
  </div>
</template>
