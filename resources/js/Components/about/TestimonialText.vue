<script setup>
import img_1 from '@/assets/img/feature/home-3/feature-bg.png'
import img_2 from '@/assets/img/feature/home-3/text-img.jpg'
</script>

<template>
   <section class="tp-feature-3-area pt-50" :style="{ backgroundImage: `url(${img_1})` }">
         <div class="row gx-0">
            <div class="col-xl-12">
               <div class="tp-feature-3-text-style text-center fadeUp">
                  <h3 class="feature-title" :style="{ backgroundImage: `url(${img_2})` }">Experience</h3>
               </div>
            </div>
         </div>
      </section>
</template>
