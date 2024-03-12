<script setup>
import Blog from "../Components/blog/index.vue";
import ScrollToTop from "../Components/common/ScrollToTop.vue";
</script>

<template>
  <RouterView></RouterView>
  <Blog />
  <ScrollToTop />
</template>

