
<script setup>
 import { reactive } from "vue";
 import AboutTitleUnderLineIcon from "../../svg/AboutTitleUnderLineIcon.vue";
 import AboutLineIcon from "../../svg/AboutLineIcon.vue";

import shape_1 from "@/assets/img/feature/home-3/shape-1.png";
import shape_2 from "@/assets/img/feature/shape-2.png";
import shape_3 from "@/assets/img/feature/img-shape.png"; 


import feature_img_1 from "@/assets/img/feature/m1.jpg";
import feature_img_3 from "@/assets/img/feature/v1.jpg";


const feature_data = reactive([
    {
        id: 1,
        img: feature_img_1,
        title: "Our mission",
        description: 'To provide excellent service to create maximum value for customers.</br>To inspire innovations through collaboration and partnership.</br>To contribute to nation building and the growth of a knowledge economy.',
        delay: ".3s"
    },
   
    {
        id: 3,
        img: feature_img_3,
        title: "Our Vision",
        description: 'To be a technology company that inspires innovation towards providing excellent service and enabling value creation.</br>                  </br> ',
        delay: ".5s"
    },
])

</script>

<template>
  <section class="tp-feature-area feature-breadcrumb">
         <div class="tp-feature-shape">
            <img class="shape-1" :src="shape_1" alt="image-title-here">
         </div>
         <div class="container container-large">
            <div class="row align-items-center">
               <div class="col-lg-6">
                  <div class="tp-feature-title-wrapper">
                     <h3 class="tp-section-title">We've Been Stay <span class="title-color">51 years</span>
                        <span class="title-left-shape">
                          <AboutLineIcon /> 
                        </span>
                     </h3>
                  </div>
               </div>
               
            </div>
            <div class="row">
              
              <div v-for="(item, i)  in feature_data" :key="i" class="col-lg-6 col-md-6">
                  <div class="tp-feature-item-box p-relative wow fadeInUp" data-wow-duration="1s" :data-wow-delay="item.delay">
                     <div class="tp-feature-item p-relative mb-100">
                        <div class="tp-feature-item-shape">
                           <img :src="shape_2" alt="image-title-here">
                        </div>
                        <div class="tp-feature-item-wrapper">
                           <div class="tp-feature-item-thumb">
                              <div class="shape">
                                 <img :src="shape_3" alt="image-title-here">
                              </div>
                              <img class="thumb" :src="item.img" alt="image-title-here">
                           </div>
                           <div class="tp-feature-item-content">
                              <h3 class="feature-title">
                                <router-link to="/about">{{ item.title }}</router-link>
                                 <span>
                                  <AboutTitleUnderLineIcon /> 
                                 </span>
                              </h3>
                              <p v-html="item.description"></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
</template>

<style scoped>
.tp-feature-item-content p {
  text-align: center;
  
}
.tp-section-title {
   margin-top: 50px;
}
</style>
 