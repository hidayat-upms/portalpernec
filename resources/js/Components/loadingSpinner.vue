<script setup>
import { onMounted, ref } from 'vue';
import WOW from 'wow.js';

const loading = ref(true);

onMounted(() => {
  // Initialize WOW
  new WOW().init();
});

onMounted(() => {
  // Show the loader initially
  setTimeout(() => {
    loading.value = false; // Hide the loader after 2 seconds
  }, 3500);
});
</script>


<template>

    <!-- Loader wrapper -->
    <div v-if="loading" class="loader-wrapper">
      <!-- <span class="loader"><span class="loader-inner"></span></span> -->
      <img src="/image/PernecLogo.gif" alt="Loading Spinner">
    </div>
  

</template>

<style scoped>
/* Loader styles can be added here */
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(1, 6, 38, 255);
  /* Adjust the opacity as needed */
  z-index: 9999;
  /* Ensure it's on top of other elements */
}

.loader {
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #3498db;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>

has context menu