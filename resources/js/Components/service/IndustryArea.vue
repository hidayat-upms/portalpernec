<script setup>
import { inject, reactive } from "vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import SmallrightIcon from "@/svg/SmallrightIcon.vue";

import industry_icon_1 from "@/assets/img/industry/icon-1.svg";
import industry_icon_2 from "@/assets/img/industry/icon-2.svg";
import industry_icon_3 from "@/assets/img/industry/icon-3.svg";

import industry_img_1 from "@/assets/img/industry/img-1.jpg";
import industry_img_2 from "@/assets/img/industry/img-2.jpg";
import industry_img_3 from "@/assets/img/industry/img-3.jpg";


const industry_features = reactive([
  {
    id: 1,
    img: industry_icon_1,
    title: "Business",
  },
  {
    id: 2,
    img: industry_icon_2,
    title: "It Consultancy",
  },
  {
    id: 3,
    img: industry_icon_3,
    title: "Cloud Server",
  },
])

const industry_content = reactive({
  sub_title: 'feature <span class="title-pre-color">IT Solutions</span>',
  title: "It Industry & Our Strategy",
  industry_title: "Best It & Technology Agency <br> For Your Business",

  industry_data: [
    {
      id: 1,
      tab_id: "home",
      tab_title: "integrity",
      img: industry_img_1,
      progressbar: "65",
    },
    {
      id: 2,
      tab_id: "profile",
      tab_title: "obejectives",
      img: industry_img_2,
      progressbar: "80",
    },
    {
      id: 3,
      tab_id: "contact",
      tab_title: "excellence",
      img: industry_img_3,
      progressbar: "90",
    }
  ],
})

const { sub_title, title, industry_title, industry_data } = industry_content


if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap');
}

const propValue = inject('addClass');
const emit = defineEmits(["handleAddClass"]);

import VideoModal from "../common/VideoModal.vue";

import { useVideoModal } from '@/composables/useVideoModal';
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';


</script>

<template>
  <section class="tp-industry-area p-relative" :class="propValue ? 'pb-90' : 'pt-100'">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-industry-title-wrapper text-center">
            <span class="tp-section-title__pre">
              <span v-html="sub_title"></span>
              <TitleUnderIcon />
            </span>
            <h3 class="tp-section-title"> {{ title }}
              <span class="title-center-shape">
                <AboutLineIcon />
              </span>
            </h3>
          </div>
        </div>
        <div class="col-xl-6 col-lg-12">
          <div class="tp-industry-wrapper mb-30 fadeLeft">
            <div class="tp-industry-content">
              <h3 class="tp-industry-content-title"><span v-html="industry_title"></span></h3>
              <div class="tp-industry-thumb-wrapper d-flex">
                <div v-for="(item, i) in industry_features" :key="i" class="tp-industry-thumb text-center">
                  <img :src="item.img" alt="image-title-here">
                  <h4 class="tp-industry-title">{{ item.title }}</h4>
                </div>
              </div>
              <div class="tp-industry-btn">
                <span class="icon">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_215_1160)">
                      <path
                        d="M21.25 6.09391H15.4167V5.67725C15.4142 3.60714 13.7368 1.92969 11.6667 1.92725H3.75C1.67989 1.92969 0.00244141 3.60714 0 5.67725L0 10.6772C0.00244141 12.7474 1.67989 14.4248 3.75 14.4272H4.16667V17.7606C4.16667 17.929 4.26819 18.081 4.42383 18.1455C4.57947 18.21 4.75871 18.1742 4.87793 18.0552L8.50586 14.4272H9.58333V14.8439C9.58577 16.914 11.2632 18.5915 13.3333 18.5939H15.6608L20.1221 23.0552C20.2413 23.1742 20.4205 23.21 20.5762 23.1455C20.7318 23.081 20.8333 22.929 20.8333 22.7606V18.5939H21.25C23.3201 18.5915 24.9976 16.914 25 14.8439V9.84391C24.9976 7.7738 23.3201 6.09635 21.25 6.09391ZM8.33333 13.5939C8.22286 13.5939 8.11686 13.6379 8.03874 13.716L5 16.7547V14.0106C5 13.7805 4.81344 13.5939 4.58333 13.5939H3.75C2.13989 13.5921 0.835164 12.2874 0.833333 10.6772V5.67725C0.835164 4.06714 2.13989 2.76241 3.75 2.76058H11.6667C13.2768 2.76241 14.5815 4.06714 14.5833 5.67725V6.09391H13.3333C11.2632 6.09635 9.58577 7.7738 9.58333 9.84391V13.5939H8.33333ZM24.1667 14.8439C24.1648 16.454 22.8601 17.7587 21.25 17.7606H20.4167C20.1866 17.7606 20 17.9471 20 18.1772V21.7547L16.1279 17.8826C16.0498 17.8045 15.9438 17.7606 15.8333 17.7606H13.3333C11.7232 17.7587 10.4185 16.454 10.4167 14.8439V9.84391C10.4185 8.2338 11.7232 6.92908 13.3333 6.92725H21.25C22.8601 6.92908 24.1648 8.2338 24.1667 9.84391V14.8439Z"
                        fill="black"></path>
                      <path
                        d="M22.082 9.42725H12.4987C12.2686 9.42725 12.082 9.61381 12.082 9.84391C12.082 10.074 12.2686 10.2606 12.4987 10.2606H22.082C22.3121 10.2606 22.4987 10.074 22.4987 9.84391C22.4987 9.61381 22.3121 9.42725 22.082 9.42725Z"
                        fill="black"></path>
                      <path
                        d="M22.082 11.9268H12.4987C12.2686 11.9268 12.082 12.1133 12.082 12.3434C12.082 12.5735 12.2686 12.7601 12.4987 12.7601H22.082C22.3121 12.7601 22.4987 12.5735 22.4987 12.3434C22.4987 12.1133 22.3121 11.9268 22.082 11.9268Z"
                        fill="black"></path>
                      <path
                        d="M22.082 14.4272H12.4987C12.2686 14.4272 12.082 14.6138 12.082 14.8439C12.082 15.074 12.2686 15.2606 12.4987 15.2606H22.082C22.3121 15.2606 22.4987 15.074 22.4987 14.8439C22.4987 14.6138 22.3121 14.4272 22.082 14.4272Z"
                        fill="black"></path>
                      <path
                        d="M2.4987 6.09408H11.2487C11.4788 6.09408 11.6654 5.90751 11.6654 5.67741C11.6654 5.44731 11.4788 5.26074 11.2487 5.26074H2.4987C2.2686 5.26074 2.08203 5.44731 2.08203 5.67741C2.08203 5.90751 2.2686 6.09408 2.4987 6.09408Z"
                        fill="black"></path>
                      <path
                        d="M8.7487 7.76025H2.4987C2.2686 7.76025 2.08203 7.94682 2.08203 8.17692C2.08203 8.40702 2.2686 8.59359 2.4987 8.59359H8.7487C8.9788 8.59359 9.16536 8.40702 9.16536 8.17692C9.16536 7.94682 8.9788 7.76025 8.7487 7.76025Z"
                        fill="black"></path>
                      <path
                        d="M8.33203 10.2607H2.4987C2.2686 10.2607 2.08203 10.4473 2.08203 10.6774C2.08203 10.9075 2.2686 11.0941 2.4987 11.0941H8.33203C8.56214 11.0941 8.7487 10.9075 8.7487 10.6774C8.7487 10.4473 8.56214 10.2607 8.33203 10.2607Z"
                        fill="black"></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_215_1160">
                        <rect width="25" height="25" fill="currentColor"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span> <router-link to="/service-details">Consult With It Advisor? <span>Click Now</span></router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- "second choice" -->
        <div class="col-xl-6 col-lg-12">
          <div class="tp-industry-wrapper mb-30 fadeRight">
            <div class="tp-industry-tab">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

                <li v-for="(item, i) in industry_data" :key="i" class="nav-item" role="presentation">
                  <button class="nav-link" :class="{ active: i == 0 }" :id="'pills-' + item.tab_id + 'home-tab'"
                    data-bs-toggle="pill" :data-bs-target="'#pills-' + item.tab_id" type="button" role="tab"
                    :aria-controls="'pills-' + item.tab_id" :aria-selected="i == 0 ? true : false">{{ item.tab_title
                    }}</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">

                <div v-for="(tab_item, index) in industry_data" :key="index" class="tab-pane fade"
                  :class="index == 0 ? 'show active' : ''" :id="'pills-' + tab_item.tab_id" role="tabpanel"
                  :aria-labelledby="'pills-' + tab_item.tab_id + '-tab'">
                  <div class="tp-industry-tab-content">
                    <div class="tp-industry-tab-content-inner d-flex mb-30">
                      <div class="tp-industry-tab-thumb p-relative">
                        
                        <img :src="tab_item.img" alt="image-title-here" />
                        <button class="popup-video" @click.prevent="playVideo(videoUrl)">
                          <i class="fa-sharp fa-solid fa-play"></i>
                        </button>
                      </div>
                      <!-- <ul>
                        <li><span> <SmallrightIcon /> </span> Technology Growth</li>
                        <li><span> <SmallrightIcon /> </span> Customer Oriented Program</li>
                        <li><span> <SmallrightIcon /> </span> Dedicated Team member</li>
                        <li><span> <SmallrightIcon /></span> Customer Oriented Program</li>
                      </ul> -->
                    </div>
                    
                    <div class="tp-industry-progress-bar fix">
                      <div class="tp-industry__progresss">
                        <h4>Digital Strategy</h4>
                        <div class="progress">
                          <div class="progress-bar wow fadeInLeft" data-wow-duration="1s" data-wow-delay=".3s"
                            role="progressbar" aria-label="Example with label"
                            :style="{ width: `${tab_item.progressbar}%` }" aria-valuenow="25" aria-valuemin="0"
                            aria-valuemax="100">
                            <span>{{ tab_item.progressbar }}%</span>
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
  <video-modal ref="video_modal" :video-url="videoUrl" />
</template>
