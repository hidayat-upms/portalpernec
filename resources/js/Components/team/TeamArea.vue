<script setup>
import SocailLinks from "../common/SocailLinks.vue";
import PlusCrosIicon from "../../svg/PlusCrosIicon.vue";
// team members img 
import { reactive } from 'vue';
import team_img_1 from '@/assets/img/breadcrumb/team/img-1.jpg';
import team_img_2 from '@/assets/img/breadcrumb/team/img-2.jpg';
import team_img_3 from '@/assets/img/breadcrumb/team/img-3.jpg';
import team_img_4 from '@/assets/img/breadcrumb/team/img-4.jpg';
import team_img_5 from '@/assets/img/breadcrumb/team/img-5.jpg';
import team_img_6 from '@/assets/img/breadcrumb/team/img-6.jpg';

const team_data = reactive([
  {
    id: 1,
    img: team_img_1,
    name: "Alextina Ditarson",
    job_title: "GRAPHIC DESIGNER",
  },
  {
    id: 2,
    img: team_img_2,
    name: "Marvin McKinney",
    job_title: "App DESIGNER",
  },
  {
    id: 3,
    img: team_img_3,
    name: "Kathryn Murphy",
    job_title: "Web DESIGNER",
  },
  {
    id: 4,
    img: team_img_4,
    name: "Jamil Rayhan",
    job_title: "GRAPHIC DESIGNER",
  },
  {
    id: 5,
    img: team_img_5,
    name: "Brooklyn Simmons",
    job_title: "Game DESIGNER",
  },
  {
    id: 6,
    img: team_img_6,
    name: "Leslie Alexander",
    job_title: "Web Developer",
  },

])

</script>

<template>
  <section class="tp-team-breadcrumb-area pt-120 pb-90">
    <div class="container">
      <div class="row">

        <div v-for="(item,i) in team_data" :key="i" class="col-lg-4 col-sm-6">
          <div class="tp-team-wrapper p-relative mb-30">
            <div class="tp-team-wrapper-thumb ">
              <router-link to="/team-details"><img :src="item.img" alt="image-title-here"></router-link >
              <div class="tp-team-social-info">
                <SocailLinks />
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
              </div>
            </div>
            <div class="tp-team-wrapper-content d-flex justify-content-between">
              <div class="tp-team-wrapper-content-text">
                <h3 class="team-title"><router-link to="/team-deteails">{{ item.name }}</router-link></h3>
                <p>{{ item.job_title }}</p>
              </div>
              <div class="tp-team-wrapper-icon">
                <span class="tp-team-social">
                  <PlusCrosIicon />
                </span>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</section>
</template>

