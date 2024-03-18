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
const industry_content = reactive({
  industry_data: [
    {
      id: 1,
      tab_id: "BOD",
      tab_title: "Board of Director",
      content: [
        {
          id: 1,
          img: team_img_1,
          name: "John Doe",
          job_title: "CEO",
        },
        {
          id: 2,
          img: team_img_2,
          name: "Jane Smith",
          job_title: "CFO",
        },
      ],
    },
    {
      id: 2,
      tab_id: "sm",
      tab_title: "Senior Management",
      content: [
        {
          id: 1,
          img: team_img_3,
          name: "Mark Johnson",
          job_title: "COO",
        },
        {
          id: 2,
          img: team_img_4,
          name: "Emily Brown",
          job_title: "CTO",
        },
      ],
    },
  ],
});

const title1 = "Pernec Corporation";
const title2 = "Pernec Integrated Network System";
const title3 = "Pernec Advance Technology";
const title4 = "Cyseca Solution";

// const industry_content = reactive({


//   industry_data: [
//     {
//       id: 1,
//       tab_id: "BOD",
//       tab_title: "Board of Director",

//     },
//     {
//       id: 2,
//       tab_id: "sm",
//       tab_title: "Senior Management",
//     },
//   ],
// })

const { industry_data } = industry_content

if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap');
}

</script>

<template>
  <section class="tp-team-breadcrumb-area pt-120 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-industry-wrapper mb-30 fadeRight">
            <div class="tp-industry-tab">

              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li v-for="(item, i) in industry_data" :key="i" class="nav-item" role="presentation">
                  <button class="nav-link" :class="{ active: i === activeTabIndex }" :id="'pills-' + item.tab_id + 'home-tab'"
                    data-bs-toggle="pill" :data-bs-target="'#pills-' + item.tab_id" type="button" role="tab"
                    :aria-controls="'pills-' + item.tab_id" @click="activeTabIndex = i">{{ item.tab_title }}
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div v-for="(tab_item, index) in industry_data" :key="index" class="tab-pane fade"
                  :class="index === activeTabIndex ? 'show active' : ''" :id="'pills-' + tab_item.tab_id" role="tabpanel"
                  :aria-labelledby="'pills-' + tab_item.tab_id + '-tab'">
                  <div class="tp-industry-tab-content">
                    <div class="tp-industry-tab-content-inner d-flex mb-30">
                      <div class="tp-industry-tab-thumb p-relative">
                        <div class="tp-industry-area p-relative">
                          <div class="container">
                            <div class="row">
                              <div v-for="(member, i) in tab_item.content" :key="i" class="col-lg-3 col-sm-4">
                                <div class="tp-team-wrapper p-relative mb-30">
                                  <div class="tp-team-wrapper-thumb">
                                    <router-link to="/team-details"><img :src="member.img" alt="Team Member"></router-link>
                                    <div class="tp-team-social-info">
                                      <SocailLinks />
                                      <!-- Add your social links here -->
                                    </div>
                                  </div>
                                  <div class="tp-team-wrapper-content d-flex justify-content-between">
                                    <div class="tp-team-wrapper-content-text">
                                      <h3 class="team-title"><router-link to="/team-details">{{ member.name }}</router-link></h3>
                                      <p>{{ member.job_title }}</p>
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>