<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import bodProfile from "@/Components/team-details/sm8/bodProfile.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <div class="wow fadeInRight" data-wow-duration="2s">
  <HeaderThree />
  <main>
    <Breadcrumb title="Senior Management" page_title="Senior Management" />
    <bodProfile />
  </main>
  <CommonFooter />
</div>
</template>
