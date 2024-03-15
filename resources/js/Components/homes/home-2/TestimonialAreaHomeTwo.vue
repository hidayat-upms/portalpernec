
<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import {Navigation, Autoplay}  from "swiper/modules";
import PrevIconHomeTwo from "@/svg/PrevIconHomeTwo.vue";
import NextIconHomeTwo from "@/svg/NextIconHomeTwo.vue";
 

// import shape here 
import testimonial_shape_1 from "@/assets/img/testimonial/shape-blur.png";
import testimonial_shape_2 from "@/assets/img/testimonial/shape-2.png";
import testimonial_shape_3 from "@/assets/img/testimonial/shape-3.png";
import testimonial_shape_4 from "@/assets/img/testimonial/shape-4.png";
import testimonial_shape_5 from "@/assets/img/testimonial/shape-blur.png"; 
import quote from "@/assets/img/testimonial/quot2.png";
import cat from "@/assets/img/testimonial/cat.jpg";

// slider data 
const testimonial_data = reactive([
  {
      id: 1, 
      name: "Mohamed Hidayat",
      title: "Software Developer,Team Lead",
      img:quote,
      description: "“Within our esteemed company, we cherish more than just our renowned reputation. Our office transcends a mere workspace; it's a dynamic environment pulsating with creativity and teamwork. <br /> Just like a magnetic pull, upon entering, you'll feel compelled to stay, enchanted by the lively atmosphere and strong sense of camaraderie that characterizes our culture.”"
  },
  {
      id: 2, 
      name: "Akuma Till",
      title: "ui/ux Developer",
      img:quote,
      description: "“A big name Our office is additionally . Our office is something <br /> we are pleased with. We consider it the little  magnet;  <br />it is wanting to come here and afterward difficult to leave it.”"
  },
  {
      id: 3, 
      name: "Moktir Rahman",
      title: "Graphics Developer",
      img:quote,
      description: "“Our office is something we are pleased with. We consider it the little <br /> magnet; it is wanting to come here and afterward difficult to leave it. <br /> Our office is additionally a big name.”"
  },
])

</script>

<template>
  <section class="tp-testimonial-2-area p-relative pt-150 pb-120">
    <div class="tp-testimonial-2-shape">
        <img class="shape-1" :src="testimonial_shape_1" alt="image-title-here">
        <img class="shape-2" :src="testimonial_shape_2" alt="image-title-here">
        <img class="shape-3" :src="testimonial_shape_3" alt="image-title-here">
        <img class="shape-4" :src="testimonial_shape_4" alt="image-title-here">
        <img class="shape-5" :src="testimonial_shape_5" alt="image-title-here">
    </div>
    <div class="tp-testimonial-2-np">
        <span class="prev"></span>
        <span class="next"></span>
    </div>
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
              <div class="circle-animation business">
                <div class="circle-animation business-2">
                    <span class="tp-circle-8"></span>
                    <span class="tp-circle-6"></span>
                <div class="circle-animation business-3">
                    <span class="tp-circle-7"></span>
                </div>
                <div class="circle-animation business-4">
                    <span class="tp-circle-5"></span>
                </div>
                </div>
              </div>
              <swiper
                    :slides-per-view="1"
                    :space-between="20" 
                    :loop="true"  
                    :modules="[Navigation, Autoplay]" 
                    :autoplay="{
                        delay: 9000,
                        disableOnInteraction: false,
                    }"
                    :navigation="{nextEl: '.testimonial-button-next-1', prevEl:'.testimonial-button-prev-1'}" 
                    class="testimonial-2-active swiper-container"> 

                  <swiper-slide v-for="(item, i) in testimonial_data" :key="i" class="testimonial-item">
                      <div class="tp-testimonial-2-content">
                        <div class="tp-testimonial-2-thumb text-center">
                            <img :src="item.img" alt="image-title-here">
                        </div>
                        <div class="tp-testimonial-2-info">
                            <h4 class="tp-testimonial-2-info-title text-center">{{ item.name }}</h4>
                            <p class="tp-testimonial-2-info-designation text-center">({{ item.title }})</p>
                        </div>
                        <div class="tp-testimonial-2-text text-center">
                            <p v-html="item.description"></p>
                        </div>
                      </div>
                  </swiper-slide>  
              </swiper>
              <div class="tp-testimonial-2-nav d-none d-lg-block">
                <button type="button" class="testimonial-button-prev-1"><span> <PrevIconHomeTwo /></span></button>
                <button type="button" class="testimonial-button-next-1"><span> <NextIconHomeTwo /></span></button>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>


