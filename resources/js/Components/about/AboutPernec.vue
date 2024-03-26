<template>
  <section class="tp-feature-3-area" :style="{ backgroundImage: `url(${image_3})` }">
    <div class="row gx-0">
      <div class="col-xl-12">
        <div class="tp-feature-3-text-style">
          <div class="feature-title" :style="{ backgroundImage: `url(${image_3})`, backgroundSize: 'cover' }"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import img_1 from '@/assets/img/feature/home-3/feature-bg.png'
import img_2 from '@/assets/img/feature/home-3/text-img.jpg'
import image_3 from '@/assets/img/about/home-3/pernec.png'
</script>

<style scoped>
.tp-feature-3-area {
  background-size: cover;
  background-position: center;
  padding: 100px 0; /* Adjust the padding as needed */
}

.tp-feature-3-text-style {
  text-align: center;
}

.feature-title {
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  /* Additional styling for the title if needed */
}

/* Responsive styles using media queries */
@media (max-width: 768px) {
  .tp-feature-3-area {
    padding: 80px 0; /* Adjust the padding for smaller screens */
  }
}

@media (max-width: 576px) {
  .tp-feature-3-area {
    padding: 60px 0; /* Adjust the padding for even smaller screens */
  }
}
</style>
