
<script setup>
// import { inject, reactive } from "vue";
// import { Swiper, SwiperSlide } from "swiper/vue";
// import {Navigation}  from "swiper/modules";  
// import AboutTitleUnderLineIcon from "../../svg/AboutTitleUnderLineIcon.vue";

// // team member img import here  
// import avatar_img_1 from "@/assets/img/team/team-5.jpg";
// import avatar_img_2 from "@/assets/img/team/team-1.jpg";
// import avatar_img_3 from "@/assets/img/team/team-2.jpg";
// import avatar_img_4 from "@/assets/img/team/team-3.jpg";
// import avatar_img_5 from "@/assets/img/team/team-4.jpg"; 
  
// import SocailLinkTwo from "../common/SocailLinkTwo.vue";
// import PlusIcon from  "../../svg/PlusIcon.vue"

// const team_data = reactive([
//     {
//         id: 1,
//         img: avatar_img_1,
//         name: "Alextina Ditarson",
//         job_title: "App Developer",
//     },
//     {
//         id: 2,
//         img: avatar_img_2,
//         name: "Leslie Alexander",
//         job_title: "Web Developer",
//     },
//     {
//         id: 3,
//         img: avatar_img_3,
//         name: "Brooklyn Simmons",
//         job_title: "Game Developer",
//     },
//     {
//         id: 4,
//         img: avatar_img_4,
//         name: "Marvin McKinney",
//         job_title: "Website Developer",
//     },
//     {
//         id: 5,
//         img: avatar_img_5,
//         name: "Kathryn Murphy",
//         job_title: "GRAPHIC DESIGNER",
//     },
//     {
//         id: 6,
//         img: avatar_img_1,
//         name: "Alextina Ditarson",
//         job_title: "App Developer",
//     },
//     {
//         id: 7,
//         img: avatar_img_2,
//         name: "Leslie Alexander",
//         job_title: "Web Developer",
//     },
//     {
//         id: 8,
//         img: avatar_img_3,
//         name: "Brooklyn Simmons",
//         job_title: "Game Developer",
//     },
//     {
//         id: 9,
//         img: avatar_img_4,
//         name: "Marvin McKinney",
//         job_title: "Website Developer",
//     },
//     {
//         id: 10,
//         img: avatar_img_5,
//         name: "Kathryn Murphy",
//         job_title: "GRAPHIC DESIGNER",
//     },
// ])


// const propValue = inject('addClass');
// const emit = defineEmits(["handleAddClass"]);

</script>
<template>
  <!-- <section class="tp-team-area p-relative" :class="propValue? 'pb-100' : 'pb-120'">
         <div class="tp-team-shape"> -->

            <!-- <img src="assets/img/testimonial/home-3/shape-3.png" alt="image-title-here" /> -->

         <!-- </div>
         <div class="container">
            <div class="row align-items-center">
               <div class="col-lg-6">
                  <div class="tp-team-title-wrapper">
                     <span class="tp-section-title__pre">
                        best <span class="title-pre-color">IT Solutions</span>
                        <AboutTitleUnderLineIcon />  
                     </span>
                     <h3 class="tp-section-title">Best Digital <span class="title-color">Technology</span> <br> Agency For People
                     </h3>
                  </div>
               </div>
               <div class="col-lg-6">
                  <div class="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-30">
                     <button type="button" class="team-button-prev-1 tp-btn-hover-clear alt-color" tabindex="0" aria-label="Previous slide"><i class="fa-regular fa-arrow-left"></i>
                     <b></b>
                     </button>
                     <button type="button" class="team-button-next-1 tp-btn-hover-clear alt-color" tabindex="0" aria-label="Next slide"><i class="fa-regular fa-arrow-right"></i>
                     <b></b>
                     </button>
                  </div>
               </div>
            </div>
         </div>
         <div class="container-fluid">
            <div class="row">
               <Swiper  
               :slides-per-view="5" 
               :space-between="20" 
               :loop="true" 
               :breakpoints="{
                  '@0.00': {
                    slidesPerView: 1,
                  },
                  '@0.50': {
                    slidesPerView: 2,
                  },
                  '@0.75': {
                    slidesPerView: 2,
                  },
                  '@1.00': {
                    slidesPerView: 2,
                  },
                  '@1.50': {
                    slidesPerView: 4,
                  },
                  '@2.00': {
                    slidesPerView: 5,
                  },
                }" 
                :modules="[Navigation]"
                :navigation="{nextEl: '.team-button-next-1', prevEl:'.team-button-prev-1'}"
               class="team-active swiper-container"> -->

                    <!-- <SwiperSlide v-for="(item , index) in team_data" :key="index"  class="swiper-slide">
                        <div class="tp-team-wrapper p-relative">
                           <div class="tp-team-wrapper-thumb">
                              <router-link to="/team-details">
                                <img :src="item.img" alt="image-title-here">
                              </router-link>
                              <div class="tp-team-social-info">
                                <SocailLinkTwo /> 
                              </div>
                           </div>
                           <div class="tp-team-wrapper-content d-flex align-items-center justify-content-between">
                              <div class="tp-team-wrapper-content-text">
                                 <h3 class="team-title"><router-link to="/team-details">{{ item.name }}</router-link></h3>
                                 <p>{{ item.job_title }}</p>
                              </div>
                              <div class="tp-team-wrapper-icon">
                                 <span class="tp-team-social">
                                  <PlusIcon /> 
                                 </span>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide> 
               </Swiper>
            </div>
         </div>
      </section> -->
</template>


