<script setup>
import MainHome from "@/Components/homes/home/index.vue";
import ScrollToTop from "@/Components/common/ScrollToTop.vue";
</script>

<template>
  <router-view></router-view>
  <MainHome />
  <RouterView></RouterView>
  <ScrollToTop />
</template>




