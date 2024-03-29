<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import Preloader from "@/Components/custPreloader.vue";

const loading = ref(false);
const router = useRouter();

// Global navigation guard to show loader
router.beforeEach((to, from, next) => {
  loading.value = true;
  next();
});

// Global navigation guard to hide loader
router.afterEach(() => {
  loading.value = false;
});

onMounted(async () => {
  // Dynamically import and initialize WOW.js
  const WOW = await import('wow.js');
  new WOW.default().init();
});
</script>

<template>
  <div id="app">
    <Preloader :loading="loading" />
    <router-view />
  </div>
</template>
