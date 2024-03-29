
<script setup>
import { reactive } from "vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";

import  business_shape_2 from "@/assets/img/business/shape-2.png";
import  business_shape_4 from "@/assets/img/business/shape-4.png" ;
import  business_img_3 from "@/assets/img/business/img-3.png" ;
import  PernecHQ from "@/assets/img/business/PernecHQ.png" ;
import  PERNECALL from "@/assets/img/business/PERNECALL.png" ;
import  ELEMENT from "@/assets/img/business/ELEMENT.png" ;
import  pernecshape3 from "@/assets/img/business/pernecshape3.png" ;

const business_content = reactive({
  title: "Company's Overview",
  info: "PERNEC Corporation Bhd stands as a prominent player in Malaysia's telecommunications infrastructure and information, communications, and technology sector. With a strong foothold in the nation, we actively engage in collaborations and smart partnerships to enhance our presence. As part of our strategic growth initiatives, we are diligently venturing into international markets, showcasing our cutting-edge telecommunications services and products. ",
  info2: "For over fifthy years, we have remained steadfast in delivering innovative, dependable, and top-tier products and services alongside unwavering customer support. Our commitment lies in crafting novel solutions for both individual consumers and businesses, propelling innovation within the telecommunications and ICT landscape.",
})
const { title, info, info2} = business_content


const business_data = reactive([
  {id: 1, title: "Custom shortcodes", sm_des: 'No matter how much you know <br> about a part icular medical'},
  {id: 2, title: "IT Consultant & Tech", sm_des: 'No matter how much you know <br> about a part icular medical'}, 
])


</script>

<template>
   <section class="tp-business-area p-relative pt-110 pb-115">
      <div class="tp-business-shape">
          <img class="shape-1 d-none d-lg-block" :src="ELEMENT" alt="ELEMENT">
          <img class="shape-2" :src="business_shape_2" alt="business_shape_2">
          <img class="shape-3" :src="pernecshape3" alt="pernecshape3">
          <img class="shape-4" :src="business_shape_4" alt="business_shape_4">
      </div>
      <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="tp-business-thumb-wrapper p-relative">
                  <div class="tp-business-thumb text-center">
                      <img :src="PERNECALL" alt="PERNECALL">
                  </div>
                  <div class="circle-animation business-4">
                      <span class="tp-circle-1"></span>
                  </div>
                  <div class="circle-animation business-3">
                      <span class="tp-circle-2"></span>
                  </div>
                  <div class="circle-animation business-2">
                      <span class="tp-circle-3"></span>
                  </div>
                  <div class="tp-business-thumb-shape">
                      <img class="shape-1" :src="PernecHQ" alt="PernecHQ">
                      <img class="shape-2" :src="business_img_3" alt="business_img_3">
                  </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tp-business-title-wrapper">
                  <h3 class="tp-section-title" v-motion-slide-visible-left>
                    {{ title }}
                      <span class="title-left-shape">
                      <AboutLineIcon />  
                      </span>
                  </h3>
                  <p class="desc" v-motion-slide-visible-right>{{ info }}</p>
                  <br>
                  <p class="desc" v-motion-slide-visible-left>{{ info2 }}</p>
                </div>
                <div class="row">
                </div>
            </div>
          </div>
      </div>
    </section>
</template>