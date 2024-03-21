<script setup>
import Breadcrumb from "@/Components/common/Breadcrumb.vue";
import bodProfile from "@/Components/team-details/bod4/bodProfile.vue";
import CommonFooter from "@/Layouts/footers/CommonFooter.vue";
import HeaderThree from "@/Layouts/headers/HeaderThree.vue";
</script>

<template>
  <HeaderThree />
  <main>
    <Breadcrumb title="Board of Director" page_title="Board of Director" />
    <bodProfile />
  </main>
  <CommonFooter />
</template>
