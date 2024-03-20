

<script setup>
import { reactive, ref, onMounted } from "vue"; 

import {Splide , SplideSlide} from "@splidejs/vue-splide";

import testimonial_shape_1 from "@/assets/img/testimonial/home-3/shape-1.png";
import testimonial_shape_2 from "@/assets/img/testimonial/home-3/shape-2.png";

import testimonial_img_1 from "@/assets/img/testimonial/home-3/img-2.png";

import testimonial_slider_img_1 from "@/assets/img/testimonial/home-3/img1.jpg";
import testimonial_slider_img_2 from "@/assets/img/testimonial/home-3/img2.jpg";
import testimonial_slider_img_3 from "@/assets/img/testimonial/home-3/img3.jpg";
import testimonial_slider_img_4 from "@/assets/img/testimonial/home-3/img4.jpg";
import testimonial_slider_img_5 from "@/assets/img/testimonial/home-3/img5.jpg";
import testimonial_slider_img_6 from "@/assets/img/testimonial/home-3/img6.jpg";

const testimonial_images = reactive([testimonial_slider_img_1, testimonial_slider_img_2, testimonial_slider_img_3, testimonial_slider_img_4,testimonial_slider_img_5,testimonial_slider_img_6]);

const slider_text = reactive([
    "<span>CORE NETWORK</span></br>Experience seamless connectivity and optimized data routing with our state-of-the-art core network, ensuring reliable communication and efficient resource utilization for your business.",
    "<span>INFRASTRACTURE</span></br> Empower your business with a robust and secure IT infrastructure, featuring cutting-edge hardware, software, and networking solutions tailored to drive efficiency and support your growth",
    "<span>ICT</span></br>Transform your operations with our innovative ICT solutions, leveraging the latest technologies to enhance productivity, collaboration, and efficiency across your organization. ",
    "<span>ACCESS NETWORK</span><br>Unlock reliable and high-speed connectivity with our advanced Access Network solutions, providing seamless access to critical data and applications for your business needs. ",
    "<span>APPLICATIONS</span></br>Elevate your business capabilities with our diverse range of applications, designed to streamline processes, improve customer experiences, and drive growth. ",
    "<span>SERVICES</span></br>Simplify IT management and enhance operational efficiency with our comprehensive managed services, tailored to meet your organization's unique needs and ensure smooth, reliable performance.",
])


const settingImg = {
  gap: 0,
  pagination: false,
  arrows: false,
  type: 'loop',
  perPage:1,
  isNavigation: true,
};

const settingText = {
  pagination: true,
  arrows: false,
  type: 'loop',
  breakpoints: {
    576: {
      perPage: 1,
      isNavigation: true, 
    },
    768: {
      perPage: 1,
      isNavigation: false,
    }
  },
};

const mainRef = ref(null);
const thumbsRef = ref(null);


onMounted(() => {
  if (mainRef.value && thumbsRef.value && thumbsRef.value.splide) {
    mainRef.value.sync(thumbsRef.value.splide); 
  }
});


</script>


<template>
   
  <section class="tp-testimonial-3-area pb-120">
      <div class="tp-testimonial-3-large-box"></div>
      <div class="tp-testimonial-3-shape">
         <img class="shape-1" :src="testimonial_shape_1" alt="image-title-here">
         <img class="shape-2" :src="testimonial_shape_2" alt="image-title-here">
      </div>
      <div class="container">
         <div class="row">
            <div class="col-xl-5 col-lg-4">
               <div class="tp-testimonial-3-wrapper">
                  <div class="tp-testimonial-3-wrapper-thumb p-relative">
                     <Splide 
                        :options='settingImg'  
                        ref="mainRef" 
                        aria-label="The carousel with thumbnails. Selecting a thumbnail will change the Beautiful Gallery carousel."
                        class="testimonial-navigation-active splide">
                        <SplideSlide v-for="(item, i) in testimonial_images" :key="i" class="splide__slide">
                           <img class="slide" :src="item" alt="image-title-here">
                        </SplideSlide> 

                     </Splide>
                     <img class="shape-1" :src="testimonial_img_1" alt="image-title-here">
                  </div>
               </div>
            </div>
            <div class="col-xl-7 col-lg-8">
               <div class="tp-testimonial-3-content">
                  <Splide :options='settingText' ref="thumbsRef" class="testimonial-3-active splide">

                        <SplideSlide v-for="(item, i) in slider_text" :key="i">
                           <div class="tp-testimonial-3-slider-wrapper">
                              <p v-html="item"></p>
                           </div>
                        </SplideSlide>   
                  </Splide>
               </div>
            </div>
         </div>
      </div>
   </section>
</template>

<style>
.slider_text{
   text-align: justify;
}
</style>

