<script setup>
import SocailLinks from "../common/SocailLinks.vue";
import PlusCrosIicon from "../../svg/PlusCrosIicon.vue";
import { reactive } from 'vue';

import team_img_1 from '@/assets/img/breadcrumb/team/team1.png';
// import team_img_2  from '@/assets/img/breadcrumb/team/img-2.jpg';
// import team_img_2  from '@/assets/img/breadcrumb/team/img-3.jpg';
// import team_img_1  from '@/assets/img/breadcrumb/team/img-4.jpg';
// import team_img_1  from '@/assets/img/breadcrumb/team/img5.png';
// import team_img_1  from '@/assets/img/breadcrumb/team/img-6.jpg';

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
        link:'/bod1',
      },
      {
        img: team_img_1 ,
        name: 'Hizam Shah Azaime',
        job_title: 'position',
        link:'/bod2',
      },
      {
        img: team_img_1 ,
        name: 'Eiji Obana',
        job_title: 'position',
        link:'/bod3',
      },
    ],
  },
  {
    title: 'Pernec Integrated Network System',
    members: [
      {
        img: team_img_1 ,
        name: 'Datuk Zainun Aishah Ahmad',
        job_title: 'position',
        link:'/bod1',
      },
      {
        img: team_img_1,
        name: 'Tengku Datuk Dr. Mohd Azzman Shariffadeen Tengku Ibrahim',
        job_title: 'position',
        link:'/bod4',
      },
      {
        img: team_img_1 ,
        name: 'En Hizam Shah Azaime',
        job_title: 'position',
        link:'/bod2',
      },
      {
        img: team_img_1 ,
        name: 'Khalil Abdul Jabar',
        job_title: 'position',
        link:'/bod5',
      },
      {
        img: team_img_1 ,
        name: 'Takeshi Tsukamoto',
        job_title: 'position',
        link:'/bod6',
      },
      {
        img: team_img_1 ,
        name: 'Hideharu Suzuki',
        job_title: 'position',
        link:'/bod9',
      },
      {
        img: team_img_1 ,
        name: 'Takashi Sugimori',
        job_title: 'position',
        link:'/bod10',
      },
    ],
  },
  {
    title: 'Pernec Advance Technology',
    members: [
      {
        img: team_img_1 ,
        name: 'Lt. General Dato Sri Wan Normazlan bin Che Jaafar RMAF',
        job_title: 'position',
        link:'/bod7',
      },
      {
        img: team_img_1 ,
        name: 'Azizul Abdul Aziz',
        job_title: 'CEO',
        link:'/bod8',
      },
    ],
  },
  {
    title: 'Cyseca Solution',
    members: [
      {
        img: team_img_1 ,
        name: 'Shahrin bin Ali',
        job_title: 'position',
        link:'/bod11',
      },
      {
        img: team_img_1 ,
        name: 'Ainul Azam bin Ahmad Khamal',
        job_title: 'position',
        link:'/bod12',
      },
      {
        img: team_img_1 ,
        name: 'Azhar Abu  Bakar',
        job_title: 'position',
        link:'/bod13',
      },
    ],
  },
]);

const subTabsSenior = reactive([
  {
    title: 'Pernec Integrated Network System',
    members: [
      {
        img: team_img_1 ,
        name: 'Azizul Abdul Aziz',
        job_title: 'CEO',
        link:'/ms1',
      },
      {
        img: team_img_1,
        name: 'Ariff Fadzli Fadzi',
        job_title: 'CFO',
        link:'/ms2',
      },
      {
        img: team_img_1 ,
        name: 'Azmi Abdul Wahid',
        job_title: 'CMO',
        link:'/ms3',
      },
      {
        img: team_img_1 ,
        name: 'Wan Kamaruddin Wan Mustaffa',
        job_title: 'CPO',
        link:'/ms4',
      },
      {
        img: team_img_1 ,
        name: 'Abdul Latif Allah Pitchy',
        job_title: 'CIO',
        link:'/ms5',
      },
      {
        img: team_img_1,
        name: 'Adnan Zamri Abdullah',
        job_title: 'Head, Human Resources & Administration',
        link:'/ms6',
      },
      {
        img: team_img_1 ,
        name: 'Noralida Shamsudin',
        job_title: 'Company Secretary',
        link:'/ms7',
      },
    ],
  },
  {
    title: 'Cyseca Solution',
    members: [
      {
        img: team_img_1 ,
        name: 'Norazmi bin Mohd Yusoff',
        job_title: 'CEO',
        link:'/ms8',
      },
      {
        img: team_img_1 ,
        name: 'Hisham bin Pandak Hamzah',
        job_title: 'CCO',
        link:'/ms9',
      },
      {
        img: team_img_1,
        name: 'Azlan Mukhtar',
        job_title: 'Head Software Development',
        link:'/ms10',
      },
      {
        img: team_img_1,
        name: 'Nurul Azuma Makmor',
        job_title: 'Head Business Development',
        link:'/ms11',
      },
      {
        img: team_img_1,
        name: 'Junaidi Zainuddin',
        job_title: 'Head Business Support & Operation',
        link:'/ms12',
      },
      {
        img: team_img_1,
        name: 'Ahmad Nawawi Abdul Rahman',
        job_title: 'Head Managed Security Services',
        link:'/ms13',
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
                              <h3 class="team-title"><router-link :to="member.link">{{ member.name }}</router-link></h3>
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
                              <h3 class="team-title"><router-link :to="member.link">{{ member.name }}</router-link></h3>
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
