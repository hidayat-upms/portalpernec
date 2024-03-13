
<script setup>
import feature from "@/assets/img/feature/home-3/feature-bg.png";
import textimg from "@/assets/img/feature/home-3/text-img.jpg"
</script>

<template>
   <section class="tp-feature-3-area pt-100" :style="{ backgroundImage: `url(${feature})` }">
         <div class="row gx-0">
            <div class="col-xl-12">
               <div class="tp-feature-3-text-style text-center fadeUp">
                  <h3 class="feature-title" :style="{ backgroundImage: `url(${textimg})`}">testimonial</h3>
               </div>
            </div>
         </div>
      </section>
</template>


