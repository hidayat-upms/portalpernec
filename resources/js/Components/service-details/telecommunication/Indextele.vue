<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import Telecommunication from "./Telecommunication.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";

</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
    <HeaderThree />
    <main>
      <Breadcrumb title="Telecommunication" page_title="Telecommunication" />
      <Telecommunication />
    </main>
    <CommonFooter />
  </div>
</template>