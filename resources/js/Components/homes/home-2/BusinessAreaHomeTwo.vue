
<script setup>
import { reactive } from "vue";
import CodeIcon from "@/svg/CodeIcon.vue";
import TechIcon from "@/svg/TechIcon.vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import SmallUnderLine from "@/svg/SmallUnderLine.vue";

import  business_shape_1 from "@/assets/img/business/shape-1.png";
import  business_shape_2 from "@/assets/img/business/shape-2.png";
import  business_shape_3 from "@/assets/img/business/shape-3.png";
import  business_shape_4 from "@/assets/img/business/shape-4.png" ;
import  business_img_1 from "@/assets/img/business/img-1.jpg" ;
import  business_img_2 from "@/assets/img/business/img-2.png" ;
import  business_img_3 from "@/assets/img/business/img-3.png" ;
import  business_user from "@/assets/img/business/user.png" ;


const business_content = reactive({
  sub_title: 'feature <span class="title-pre-color">IT Solutions</span>',
  title: "Best It & Technology Agency For Your Business",
  info: "No matter how much you know about a particular medical healthcare <br> professional, you always need to be thinking about whats?",
  info_2: 'Bring them together and you overcome the ordinary.',
})
const {sub_title, title, info, info_2} = business_content


const business_data = reactive([
  {id: 1, title: "Custom shortcodes", sm_des: 'No matter how much you know <br> about a part icular medical'},
  {id: 2, title: "IT Consultant & Tech", sm_des: 'No matter how much you know <br> about a part icular medical'}, 
])


</script>

<template>
   <section class="tp-business-area p-relative pt-110 pb-115">
      <div class="tp-business-shape">
          <img class="shape-1 d-none d-lg-block" :src="business_shape_1" alt="business_shape_1">
          <img class="shape-2" :src="business_shape_2" alt="business_shape_2">
          <img class="shape-3" :src="business_shape_3" alt="business_shape_3">
          <img class="shape-4" :src="business_shape_4" alt="business_shape_4">
      </div>
      <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
                <div class="tp-business-thumb-wrapper p-relative">
                  <div class="tp-business-thumb text-center">
                      <img :src="business_img_1" alt="business_img_1">
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
                      <img class="shape-1" :src="business_img_2" alt="business_img_2">
                      <img class="shape-2" :src="business_img_3" alt="business_img_3">
                  </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="tp-business-title-wrapper">
                  <span class="tp-section-title__pre"> 
                    <span v-html="sub_title"></span> 
                      <TitleUnderIcon /> 
                  </span>
                  <h3 class="tp-section-title">
                    {{ title }}
                      <span class="title-left-shape">
                      <AboutLineIcon />  
                      </span>
                  </h3>
                  <p>{{ info }}</p>
                </div>
                <div class="row">

                <div v-for="(item, index) in business_data" :key="index" class="col-lg-6 col-md-6">
                    <div class="tp-business-box mb-30">
                      <div class="tp-business-box-title d-flex align-items-center">
                          <span v-if="index === 0"> <CodeIcon />   </span>
                          <span v-if="index === 1"> <TechIcon />  </span>
                          <h4 class="tp-business-title">{{ item.title }}</h4>
                      </div>
                      <p v-html="item.sm_des"></p>
                    </div>
                </div> 
                
                  <div class="tp-business-btn-area d-flex align-items-center mt-20">
                      <router-link class="tp-btn" to="/about">About Our Agency</router-link>
                      <img class="d-none d-xl-block" :src="business_user" alt="business_user">
                      <i> 5m+ Customer
                        <span>
                          <SmallUnderLine /> 
                        </span>
                      </i>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </section>
</template>

