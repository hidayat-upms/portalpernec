<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import telco from "@/assets/img/services/service-details/telco.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import connection from "@/assets/img/services/service-details/connection.png"
import system from "@/assets/img/services/service-details/system.png"


if (typeof window !== 'undefined') {
  import('bootstrap/dist/js/bootstrap');
}

const service_details_content = {
  service_details_tab: reactive([
    {
    service: "IT Essentials",
    link:"/it-essentials"
    },
    {
    service: "IT Productivity Suites",
    link:"/about"
    },
    {
    service: "Digital Transformation & Enabler",
    link:"/about"
    },
    {
    service: "Cyber Security Solution",
    link:"/cyber-security"
    },
    {
    service: "Telecommunication Solutions",
    link:"/telecommunication"
    },
    {
    service: "Power & Utilities",
    link:"/about"
    },
    {
    service: "Public Safety",
    link:"/about"
    },
    {
    service: "Defence Tactical Solutions",
    link:"/about"
    },
    {
    service: "Deployment Operation Services",
    link:"/about"
    }
  ]),
  title: "Telecommunication",
  description: "Since our inception in 1973, telecommunications (Telco) has stood as a cornerstone of Pernec's business endeavors. Over the years, we have honed our expertise in every aspect of Telco operations, spanning from the foundational setup of infrastructure such as towers, to the intricate management of transmission, switching, and overall systems integration.Drawing upon our extensive knowledge in Information and Communication Technology (ICT), we've embarked on the transformative journey known as Telco 2.0. This groundbreaking convergence of ICT and Telco represents a pivotal shift in the industry landscape, facilitating a more seamless and value-driven exchange among both upstream and downstream stakeholders.",
  description_2: "Committed to driving innovation and excellence in telecommunications, Pernec empowers businesses to thrive in the digital era. With our proven track record and unwavering dedication to technological advancement, we are poised to support your Telco needs and propel your organization towards success.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {
    id: 1, img: connection, title: "Core & Access Network", sm_des: [
      "Network Management System",
      "Fiber Optics",
      "Endpoint Public Switched Telephone Network (PSTN)",
      "Multi Service Access Node (MSAN)",
      "Residential Gateway",
      "Wi-Fi"
    ]
  },
  {
    id: 2, img: system, title: "Telco Systems & Application", sm_des: [
      "Business Support System (BSS)",
      "Operational Support System (OSS)",
      "Service Performance Assurance Network Management System",
    ]
  }
])

// video popup
import VideoModal from "@/Components/common/VideoModal.vue";
import { useVideoModal } from "@/composables/useVideoModal.js";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';

</script>

<template>
  <section class="tp-service-details-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="tp-service-widget">
            <div class="tp-service-widget-item mb-40">
              <div class="tp-service-widget-tab">
                <ul>
                  <li v-for="(item, i) in service_details_tab" :key="i">
                    <router-link :class="i === 4 ? 'active' : ''" :to="item.link">
                      {{ item.service }}
                      <i class="fa-regular fa-arrow-right-long"></i></router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="tp-service-widget-item mb-40">
              <div class="tp-service-contact">
                <div class="tp-service-contact-form">
                  <ContactFormServiceDetails />
                  <p class="ajax-response"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="tp-service-details-wrapper">
            <div class="tp-service-details-thumb">
              <img :src="telco" alt="image-title-here">
            </div>
            <h3 class="tp-service-details-title">{{ title }}</h3>
            <p class="desc">{{ description }}</p>
            <p class="desc"> {{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-9 col-md-6">
                <div class="tp-business-box mb-30">
                  <div class="tp-business-box-title d-flex align-items-center">
                    <span v-if="index === 0"> <img :src="item.img"> </span>
                    <span v-if="index === 1"> <img :src="item.img"> </span>
                    <h4 class="tp-business-title">{{ item.title }}</h4>
                  </div>
                  <div class="tp-service-details-list">
                    <ul>
                      <li v-for="(feture, index) in item.sm_des" :key="index">
                        <span>
                          <RightSymble />
                        </span> {{ feture }}
                      </li>
                    </ul>
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

<style>
.desc{
  text-align: justify;
}
</style>