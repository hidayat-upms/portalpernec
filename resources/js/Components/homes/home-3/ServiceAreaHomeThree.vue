
<script setup>
import { reactive } from "vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue"

// service icon import here
import service_icon_1 from "@/assets/img/services/home-3/icon-1.png";
import service_icon_2 from "@/assets/img/services/home-3/icon-2.png";
import service_icon_3 from "@/assets/img/services/home-3/icon-3.png";
import service_icon_4 from "@/assets/img/services/home-3/icon-4.png"; 
import servicebg from "@/assets/img/services/home-3/service-bg.png"

// service data
const service_data = reactive([
    {
        id: 1,
        img: service_icon_1,
        title:"It Server & <br /> Cyber Security",
        description:"Transmax is the world tr  we uphold industry Customer Oriented"
    },
    {
        id: 2,
        img: service_icon_2,
        title:"Machine Learning <br /> And Ai",
        description:"Transmax is the world tr  we uphold industry Customer Oriented"
    },
    {
        id: 3,
        img: service_icon_3,
        title:"It Server & <br /> Cyber Security",
        description:"Transmax is the world tr  we uphold industry Customer Oriented"
    },
    {
        id: 4,
        img: service_icon_4,
        title:"Clouds Backup <br /> Services",
        description:"Transmax is the world tr  we uphold industry Customer Oriented"
    },
])
 
 
</script>

<template>
  <section class="tp-service-3-area p-relative pt-120 pb-60" :style="{ backgroundImage: `url(${servicebg})` }">
    <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-6">
              <div class="tp-service-3-title-wrapper">
                <span class="tp-section-title__pre">
                    service <span class="title-pre-color">IT Solutions</span>
                    <TitleUnderIcon /> 
                </span>
                <h3 class="tp-section-title">
                  Best Digital <span class="title-color">Technology</span> <br> Agency For People
                </h3>
              </div>
          </div>
          <div class="col-xl-6">
              <div class="tp-service-3-title-wrapper justify-content-start justify-content-xl-end d-flex">
                <p>Transmax is the world's driving worldwide coordinations supplier <br>
                    we uphold industry and exchange the worldwide trade of about <br>
                    merchandise through land transport.w much you know</p>
              </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(item, index) in service_data" :key="index" class="col-xl-3 col-md-6">
              <div class="tp-service-3-content OneByOne mb-30">
                <div class="tp-service-3-content-thumb">
                    <img :src="item.img" alt="image-title-here">
                </div>
                <h4 class="tp-service-3-title">
                  <router-link to="/service-details"><span v-html="item.title"></span></router-link>
                </h4>
                <p>{{ item.description }}</p>
                <div class="tp-service-btn">
                    <router-link to="/service-details">Read More <i class="fa-solid fa-arrow-up-right"></i></router-link>
                </div>
              </div>
          </div> 
        </div>
        <div class="row">
          <div class="col-xl-12">
              <div class="tp-service-3-trend text-center mt-50">
                <p>
                  <i class="fa-regular fa-arrow-right-long"></i> 
                  Bring them together and you overcome the ordinary. 
                  <router-link to="/service-details">View More SErvice</router-link> 
                  <i class="fa-regular fa-arrow-left-long"></i>
                </p>
              </div>
          </div>
        </div>
    </div>
  </section>
</template>




