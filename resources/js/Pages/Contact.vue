<script setup>
import Contact  from "@/Components/contact/index.vue";
import ScrollToTop from "@/Components/common/ScrollToTop.vue";
import { RouterView } from "vue-router";
</script>

<template>
   <RouterView></RouterView>
   <Contact /> 
   <ScrollToTop />
</template>


