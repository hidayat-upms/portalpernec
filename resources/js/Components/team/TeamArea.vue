<script setup>
import SocailLinks from "../common/SocailLinks.vue";
import PlusCrosIicon from "../../svg/PlusCrosIicon.vue";
import { reactive } from 'vue';

import team_img_1 from '@/assets/img/breadcrumb/team/img-1.jpg';
import team_img_2 from '@/assets/img/breadcrumb/team/img-2.jpg';
import team_img_3 from '@/assets/img/breadcrumb/team/img-3.jpg';
import team_img_4 from '@/assets/img/breadcrumb/team/img-4.jpg';
import team_img_5 from '@/assets/img/breadcrumb/team/img-5.jpg';
import team_img_6 from '@/assets/img/breadcrumb/team/img-6.jpg';

const tabs = reactive([
  {
    tab_id: 'boardOfDirectors',
    tab_title: 'Board of Directors',
  },
  {
    tab_id: 'seniorManagement',
    tab_title: 'Senior Management',
  },
]);

const subTabsBoard = reactive([
  {
    title: 'Pernec Corporation',
    members: [
      {
        img: team_img_1,
        name: 'Datuk Zainun Aishah Ahmad',
        job_title: 'position',
      },
      {
        img: team_img_2,
        name: 'Hizam Shah Azaime',
        job_title: 'position',
      },
      {
        img: team_img_3,
        name: 'Eiji Obana',
        job_title: 'position',
      },
    ],
  },
  {
    title: 'Pernec Integrated Network System',
    members: [
      {
        img: team_img_2,
        name: 'Datuk Zainun Aishah Ahmad',
        job_title: 'position',
      },
      {
        img: team_img_1,
        name: 'Tengku Datuk Dr. Mohd Azzman Shariffadeen Tengku Ibrahim',
        job_title: 'position',
      },
      {
        img: team_img_4,
        name: 'En Hizam Shah Azaime',
        job_title: 'position',
      },
      {
        img: team_img_6,
        name: 'Khalil Abdul Jabar',
        job_title: 'position',
      },
      {
        img: team_img_3,
        name: 'Takeshi Tsukamoto',
        job_title: 'position',
      },
      {
        img: team_img_4,
        name: 'Hideharu Suzuki',
        job_title: 'position',
      },
      {
        img: team_img_5,
        name: 'Takashi Sugimori',
        job_title: 'position',
      },
    ],
  },
  {
    title: 'Pernec Advance Technology',
    members: [
      {
        img: team_img_3,
        name: 'Lt. General Dato Sri Wan Normazlan bin Che Jaafar RMAF',
        job_title: 'position',
      },
      {
        img: team_img_2,
        name: 'Azizul Abdul Aziz',
        job_title: 'CEO',
      },
    ],
  },
  {
    title: 'Cyseca Solution',
    members: [
      {
        img: team_img_4,
        name: 'Shahrin bin Ali',
        job_title: 'position',
      },
      {
        img: team_img_5,
        name: 'Ainul Azam bin Ahmad Khamal',
        job_title: 'position',
      },
      {
        img: team_img_5,
        name: 'Azhar Abu  Bakar',
        job_title: 'position',
      },
    ],
  },
]);

const subTabsSenior = reactive([
  {
    title: 'Pernec Integrated Network System',
    members: [
      {
        img: team_img_2,
        name: 'Azizul Abdul Aziz',
        job_title: 'CEO',
      },
      {
        img: team_img_1,
        name: 'Ariff Fadzli Fadzi',
        job_title: 'CFO',
      },
      {
        img: team_img_3,
        name: 'Azmi Abdul Wahid',
        job_title: 'CMO',
      },
      {
        img: team_img_4,
        name: 'Wan Kamaruddin Wan Mustaffa',
        job_title: 'CPO',
      },
      {
        img: team_img_5,
        name: 'Abdul Latif Allah Pitchy',
        job_title: 'CIO',
      },
      {
        img: team_img_6,
        name: 'Adnan Zamri Abdullah',
        job_title: 'Head, Human Resources & Administration',
      },
      {
        img: team_img_3,
        name: 'Noralida Shamsudin',
        job_title: 'Company Secretary',
      },
    ],
  },
  {
    title: 'Cyseca Solution',
    members: [
      {
        img: team_img_4,
        name: 'Norazmi bin Mohd Yusoff',
        job_title: 'CEO',
      },
      {
        img: team_img_5,
        name: 'Hisham bin Pandak Hamzah',
        job_title: 'CCO',
      },
      {
        img: team_img_1,
        name: 'Azlan Mukhtar',
        job_title: 'Head Software Development',
      },
      {
        img: team_img_1,
        name: 'Nurul Azuma Makmor',
        job_title: 'Head Business Development',
      },
      {
        img: team_img_1,
        name: 'Junaidi Zainuddin',
        job_title: 'Head Business Support & Operation',
      },
      {
        img: team_img_1,
        name: 'Ahmad Nawawi Abdul Rahman',
        job_title: 'Head Managed Security Services',
      },
    ],
  },
]);

let activeTabIndex = 0; // Default to show the first tab


if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap');
}
</script>

<template>
  <section class="tp-team-breadcrumb-area pt-100 pb-90">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="meet-the-team-tabs">
            <!-- Tab navigation for Board of Directors and Senior Management -->
            <ul class="nav nav-tabs" id="teamTabs" role="tablist">
              <li class="nav-item" v-for="(item, index) in tabs" :key="index">
                <a class="nav-link" :class="{ active: activeTabIndex === index }" :id="item.tab_id + '-tab'"
                  data-bs-toggle="tab" :data-bs-target="'#' + item.tab_id" role="tab" aria-controls="home"
                  aria-selected="true" @click="activeTabIndex = index">{{ item.tab_title }}</a>
              </li>
            </ul>
            <!-- Tab content -->
            <div class="tab-content" id="teamTabsContent">
              <!-- Board of Directors Tab -->
              <div v-for="(item, index) in tabs" :key="index" :class="{ 'tab-pane': true, 'fade': index !== activeTabIndex, 'show active': index === activeTabIndex }"
                :id="item.tab_id" role="tabpanel" :aria-labelledby="item.tab_id + '-tab' ">
                <!-- Sub-categories for Board of Directors -->
                <div :class="propValue ? 'pb-90' : 'pt-50'"></div>
                <div v-if="item.tab_id === 'boardOfDirectors'" class="sub-categories ">
                  <div v-for="(subItem, subIndex) in subTabsBoard" :key="subIndex" class="sub-category">
                    <h3>{{ subItem.title }}</h3>
                    <div class="team-members row ">
                      <div v-for="(member, memberIndex) in subItem.members" :key="memberIndex" class="col-lg-3 col-sm-4 team-member">
                        <div class="tp-team-wrapper p-relative mb-30">
                          <div class="tp-team-wrapper-thumb">
                            <img :src="member.img" :alt="member.name" class="img-fluid" />
                            
                          </div>
                          <div class="tp-team-wrapper-content d-flex justify-content-between">
                            <div class="tp-team-wrapper-content-text">
                              <h3 class="team-title"><router-link to="/team-details">{{ member.name }}</router-link></h3>
                              <p>{{ member.job_title }}</p>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Sub-categories for Senior Management -->
                <div v-if="item.tab_id === 'seniorManagement'" class="sub-categories">
                  <div v-for="(subItem, subIndex) in subTabsSenior" :key="subIndex" class="sub-category">
                    <h3>{{ subItem.title }}</h3>
                    <div class="team-members row">
                      <div v-for="(member, memberIndex) in subItem.members" :key="memberIndex" class="col-lg-3 col-sm-4 team-member">
                        <div class="tp-team-wrapper p-relative mb-30">
                          <div class="tp-team-wrapper-thumb">
                            <img :src="member.img" :alt="member.name" class="img-fluid" />
                          </div>
                          <div class="tp-team-wrapper-content d-flex justify-content-between">
                            <div class="tp-team-wrapper-content-text">
                              <h3 class="team-title"><router-link to="/team-details">{{ member.name }}</router-link></h3>
                              <p>{{ member.job_title }}</p>
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
