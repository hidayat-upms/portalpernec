<script setup> 
import VideoModal from "../common/VideoModal.vue";

import AboutTitleUnderLineIcon from "@/svg/AboutTitleUnderLineIcon.vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import RightSymble from "@/svg/RightSymble.vue";

import support_img_1 from "@/assets/img/about/home-3/img-1.jpg";
import support_img_2 from "@/assets/img/about/home-3/img-2.jpg";
import support_img_3 from "@/assets/img/about/home-3/img-3.jpg";
import support_shape from "@/assets/img/about/home-3/shape-1.png";

const support_contact = {
   sub_title_1: "We've been stay",
   sub_title_2: " 38 years",
   info: 'Our company provides a full range of services for the <br /> construction of private houses and cottages since 19',
   lists: [
      'series of manual and semi-manual activities.',
      'Construction is different from other industries.',
      'Construction is different from other industries.',
   ]   
}
const {sub_title_1, sub_title_2, info, lists} = support_contact

 
import {useVideoModal} from '@/composables/useVideoModal';
const {playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';

 

</script>

<template>
  <section class="tp-support-breadcrumb fix pt-120 pb-210">
         <div class="container">
            <div class="row">
               <div class="col-lg-6">
                  <div class="tp-fun-fact-title-wrapper support-breadcrumb">
                     <span class="tp-section-title__pre">
                        service <span class="title-pre-color">IT Solutions</span>
                        <AboutTitleUnderLineIcon />  
                     </span>
                     <h3 class="tp-section-title">{{ sub_title_1 }} <span class="title-color">{{ sub_title_2 }}</span>
                        <span class="title-left-shape">
                          <AboutLineIcon /> 
                        </span>
                     </h3>
                     <p v-html="info"></p>
                     <ul class="mb-65">
                        <li v-for="(item, i) in lists" :key="i">
                          <span>
                          <RightSymble /></span>{{ item }}
                        </li> 
                     </ul>
                     <div class="tp-support-breadcrumb-btn mb-30">
                        <router-link class="tp-btn" to="/service-details">Tell us How Can We Help</router-link>
                     </div>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="tp-about-3-img p-relative fadeRight">
                     <img :src="support_img_1" alt="image">
                     <img class="shape-1" :src="support_img_2" alt="image">
                     <div class="shape-2 p-relative">
                        <img :src="support_img_3" alt="image">
                        <div class="tp-video-play">
                           <a class="popup-video"
                           @click.prevent="playVideo(videoUrl)"
                            ><i class="fa-sharp fa-solid fa-play"></i></a>
                        </div>
                     </div>
                     <img class="shape-3" :src="support_shape" alt="image-title-here">
                  </div>
               </div>
            </div>
         </div>
      </section>

        <!-- video modal start -->
        <video-modal ref="video_modal" :video-url="videoUrl" />
        <!-- video modal end -->
</template>

