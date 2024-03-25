<template>
    <section class="tp-testimonial-2-area p-relative pt-150 pb-120">
      <div class="tp-testimonial-2-shape">
          <img class="shape-1" :src="testimonial_shape_1" alt="image-title-here">
          <img class="shape-2" :src="testi" alt="image-title-here">
          <img class="shape-3" :src="network" alt="image-title-here">
          <img class="shape-4" :src="teamwork1" alt="image-title-here">
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
                              <p class="desc" v-html="item.description"></p>
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

<script setup>
import { reactive } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper/modules";
import PrevIconHomeTwo from "@/svg/PrevIconHomeTwo.vue";
import NextIconHomeTwo from "@/svg/NextIconHomeTwo.vue";

// Import shape images
import testimonial_shape_1 from "@/assets/img/testimonial/shape-blur.png";
import testimonial_shape_2 from "@/assets/img/testimonial/shape-2.png";
import testimonial_shape_3 from "@/assets/img/testimonial/shape-3.png";
import testimonial_shape_4 from "@/assets/img/testimonial/shape-4.png";
import testimonial_shape_5 from "@/assets/img/testimonial/shape-blur.png";
import hidayat3 from "@/assets/img/testimonial/hidayat3.png";
import adry from "@/assets/img/testimonial/adry.png";
import anat from "@/assets/img/testimonial/anat.png";
import nuh from "@/assets/img/testimonial/nuh.png";
import testi from "@/assets/img/testimonial/testi.gif";
import teamwork1 from "@/assets/img/testimonial/teamwork1.gif";
import network from "@/assets/img/testimonial/network.gif";

// Testimonial data
const testimonial_data = reactive([
    {
        id: 1,
        name: "Mohamed Hidayat",
        title: "Software Developer, Team Lead",
        img: hidayat3,
        description: `"Within our esteemed company, we cherish more than just our renowned reputation. Our office transcends a mere workspace; it's a dynamic environment pulsating with creativity and teamwork. Just like a magnetic pull, upon entering, you'll feel compelled to stay, enchanted by the lively atmosphere and strong sense of camaraderie that characterizes our culture."`
    },
    {
        id: 2,
        name: "Anatasia",
        title: "Frontend Software Developer",
        img: anat,
        description: `"Pernec is more than just a workplace; it's a place for personal and professional growth. The company invests in its employees, providing opportunities for learning and development. Whether it's through workshops, training programs, or mentorship, I've been able to expand my skill set and take on new challenges."`
    },
    {
        id: 3,
        name: "Nuh Hidayat",
        title: "Backend Software Developer",
        img: nuh,
        description: `"It's my first company, and I've been warmly welcomed into a friendly, beginner-friendly environment. We're a tight-knit team that enjoys tasty free food every Friday. Thrilled to be part of this supportive community as we grow together."`
    },
    {
        id: 4,
        name: "Muhammad Adry",
        title: "Backend Software Developer",
        img: adry,
        description: `"At PERNEC, where I began my career journey, I found a warm and supportive environment. It's incredibly beginner-friendly, allowing for exploration of various roles for those with the determination to advance their careers"`
    },
])
</script>