<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "@/Components/forms/ContactFormServiceDetails.vue";
import itessentials from "@/assets/img/services/service-details/itessentials.jpg";
import RightSymble from "@/svg/RightSymble.vue";
import hosting from "@/assets/img/services/service-details/hosting.png"
import networking from "@/assets/img/services/service-details/networking.png"


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
    link:"/ict-productivity-suites"
    },
    {
    service: "Digital Transformation & Enabler",
    link:"/digital-transformation-enabler"
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
    link:"/power-and-utilities"
    },
    {
    service: "Public Safety",
    link:"/public-safety"
    },
    {
    service: "Defence Tactical Solutions",
    link:"/defence-tactical-solutions"
    },
    {
    service: "Deployment Operation Services",
    link:"/deployment-operation-services"
    }
  ]),
  title: "Cyber Security Solutions",
  description: "Amidst today's constantly evolving business landscape, the expansion of your ecosystem, be it through legacy on-premise systems or cloud infrastructure, exposes your business to heightened risks of cyber threats. PERNEC fully acknowledges the critical importance of shielding your business from these potential dangers. Our comprehensive portfolio is designed to bolster your resilience against cyber threats. From security health-checks to robust IT security systems, we offer a range of solutions tailored to your specific needs. Our in-house endpoint application control ensures that your business users can operate with confidence and safety, knowing that their digital environment is protected",
  description_2: "At PERNEC, we deliver security solutions that work. With our in-house product development, along with a curated selection of security products and services, we provide the peace of mind that comes from knowing your business is fortified against cyber threats. Trust us to safeguard your digital assets and keep your operations secure.",
}
const { service_details_tab, title, description, description_2 } = service_details_content

const business_data = reactive([
  {

    id: 1, img: hosting, title: "Server and Storage", sm_des: [
      "Storage",
      "Database",
      "Endpoint Devices"
    ]
  },
  {

    id: 2, img: networking, title: "Networking", sm_des: [
      "Wired and Wireless Network",
      "Structured Cabling",
      "Server"
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
                    <router-link :class="i === 0 ? 'active' : ''" :to="item.link">
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
              <img :src="itessentials" alt="image-title-here">
            </div>
            <h3 class="tp-service-details-title">{{ title }}</h3>
            <p class="desc">{{ description }}</p>
            <p class="desc">{{ description_2 }}</p>
            <div class="row">
              <div v-for="(item, index) in business_data" :key="index" class="col-lg-5 col-md-6">
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
.desc {
  text-align: justify;
}
</style>