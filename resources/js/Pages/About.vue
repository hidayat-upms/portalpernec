<script setup>
import { onMounted } from "vue";
import About from "../Components/about/index.vue";
import ScrollToTop from "../Components/common/ScrollToTop.vue";

</script>

<template>
  <RouterView></RouterView>
  <About />
  <ScrollToTop />
</template>


