
<script setup>
 import { reactive } from "vue";
 import AboutTitleUnderLineIcon from "../../svg/AboutTitleUnderLineIcon.vue";
 import AboutLineIcon from "../../svg/AboutLineIcon.vue";

import shape_1 from "@/assets/img/feature/home-3/shape-1.png";
import shape_2 from "@/assets/img/feature/shape-2.png";
import shape_3 from "@/assets/img/feature/img-shape.png"; 


import feature_img_1 from "@/assets/img/feature/img-1.jpg";
import feature_img_2 from "@/assets/img/feature/img-2.jpg";
import feature_img_3 from "@/assets/img/feature/img-3.jpg";


const feature_data = reactive([
    {
        id: 1,
        img: feature_img_1,
        title: "Our mission",
        description: 'As far as we might be concerned <br /> making an extraordinary ad',
        delay: ".3s"
    },
    {
        id: 2,
        img: feature_img_2,
        title: "About History",
        description: 'Concerned as far as we might be <br /> making an extraordinary ad',
        delay: ".5s"
    },
    {
        id: 3,
        img: feature_img_3,
        title: "Our Partners",
        description: 'Extraordinary as far as we might be <br /> concerned making an ad',
        delay: ".7s"
    },
])

</script>

<template>
  <section class="tp-feature-area feature-breadcrumb pb-100">
         <div class="tp-feature-shape">
            <img class="shape-1" :src="shape_1" alt="image-title-here">
         </div>
         <div class="container container-large">
            <div class="row align-items-center">
               <div class="col-lg-6">
                  <div class="tp-feature-title-wrapper">
                     <span class="tp-section-title__pre">
                        feature <span class="title-pre-color">IT Solutions</span>
                        <AboutTitleUnderLineIcon />  
                     </span>
                     <h3 class="tp-section-title">We've Been Stay <span class="title-color">38 years</span>
                        <span class="title-left-shape">
                          <AboutLineIcon /> 
                        </span>
                     </h3>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="tp-feature-wrapper p-relative">
                     <p>As the complexity of buildings to increase, the field of architecture <br> became multi-disciplinary with technological expertise.</p>
                  </div>
               </div>
            </div>
            <div class="row">
              
              <div v-for="(item, i)  in feature_data" :key="i" class="col-lg-4 col-md-6">
                  <div class="tp-feature-item-box p-relative wow fadeInUp" data-wow-duration="1s" :data-wow-delay="item.delay">
                     <div class="tp-feature-item p-relative mb-30">
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
                     <div class="tp-feature-item-btn">
                        <router-link to="/about"><i class="fa-regular fa-arrow-right"></i></router-link>
                     </div>
                  </div>
               </div> 
            </div>
         </div>
      </section>
</template>


 