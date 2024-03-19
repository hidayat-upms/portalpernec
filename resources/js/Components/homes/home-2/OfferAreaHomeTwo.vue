
<script setup>
import { reactive } from "vue";
import AboutLineIcon from "../../../svg/AboutLineIcon.vue";
import TitleUnderIcon from "../../../svg/TitleUnderIcon.vue";

import shape_1 from "@/assets/img/offering/shape.png";
import shape_2 from "@/assets/img/offering/shape-2.png";
import bg_img from "@/assets/img/offering/bg.png";

import offering_img_1 from "@/assets/img/offering/img-1.svg";
import cyseca from "@/assets/img/offering/cyseca.png";
import telecom from "@/assets/img/offering/telecom.png";
import deployment from "@/assets/img/offering/deployment.png";

const offering_data = reactive([
    {
        id: 1,
        img: offering_img_1,
        title: "ICT<br /> Essentials",
        link: "it-essentials" 
    },
    {
        id: 2,
        img: cyseca,
        title: "Cyber Security <br /> Solution",
        link: "cyber-security" 
    },
    {
        id: 3,
        img: telecom,
        title: "Telecommunication <br /> Solutions",
        link: "telecommunication"
    },
    {
        id: 4,
        img: deployment,
        title: "Deployment Operation <br /> Services",
        link: "tba"
    },
])
  
const offering_content = reactive({
  sub_title: 'feature <span class="title-pre-color">IT Services</span>',
  title: "Thing that you might be interested",
  info: 'As building complexity rises, the architecture <br> landscape diversifies with technological prowess',
  info_2: 'Bring them together and you overcome the ordinary.',

})
const {sub_title, title, info, info_2, link} = offering_content

</script>

<template>
  <section class="tp-offer-area p-relative pt-120 pb-90" :style="{ backgroundImage: `url(${bg_img})` }">
      <div class="tp-offer-overlay"></div>
      <div class="tp-offer-shape">
         <img class="shape-1 d-none d-xl-block" :src="shape_1" alt="image-title-here">
         <img class="shape-2" :src="shape_2" alt="image-title-here">
      </div>
      <div class="container">
         <div class="row align-items-center">
            <div class="col-lg-6">
               <div class="tp-feature-title-wrapper">
                  <span class="tp-section-title__pre"> <span v-html="sub_title"></span> 
                  <TitleUnderIcon />  
                  </span>
                  <h3 class="tp-section-title">{{ title }}
                     <span class="title-left-shape">
                        <AboutLineIcon /> 
                     </span>
                  </h3>
               </div>
            </div>
            <div class="col-lg-6">
               <div class="tp-feature-wrapper offer p-relative">
                  <p v-html="info"></p>
               </div>
            </div>
         </div>
         <div class="row">

            <div v-for="(item, index) in offering_data" :key="index" class="col-lg-3 col-md-6 col-sm-6">
               <div class="tp-offer-wrapper text-center mb-30">
                  <h3 class="offer-title" v-html="item.title"></h3>
                  <div class="tp-offer-wrapper-thumb">
                     <img :src="item.img" alt="image-title-here">
                  </div>
                  <div class="tp-offer-wrapper-btn">
                     <router-link :to="`/${item.link}`">Read Out More <i class="fa-solid fa-arrow-up-right"></i></router-link>
                  </div>
               </div>
            </div> 
         </div>
      </div>
   </section>
</template>

 