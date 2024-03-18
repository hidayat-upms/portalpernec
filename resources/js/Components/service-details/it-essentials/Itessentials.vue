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
    "Consumer Product",
    "Marketing Analysis",
    "Speed Optimization",
    "Email Marketing",
    "Marketing Analysis",
    "Media Marketing",
    "Media Marketing",
  ]),
  title: "IT Essentials",
  description: "In today's dynamic digital landscape, your business's success heavily relies on the robustness of its IT infrastructure. A resilient and forward-thinking infrastructure not only facilitates rapid adaptation to change but also drives innovation and supports the integration of new business models.With over two decades of experience in ICT System Integration, we collaborate closely with you to deploy a customized IT infrastructure tailored to your specific needs. Specializing in the development of cloud-ready infrastructures, our team ensures seamless alignment with your growth objectives.",
  title_2: "Our IT Essentials include:",
  description_2: "Our ICT Essentials comprise comprehensive offerings tailored to meet your business needs. This includes Server and Storage Solutions, encompassing server, storage, database, and endpoint devices, as well as Networking services, which deliver wired and wireless network solutions alongside structured cabling services",
  description_3: "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",

}
const { service_details_tab, title, description, title_2, description_2, feture_list, description_3, accordion_data } = service_details_content

const business_data = reactive([
  { id: 1, img: hosting, title: "Server and Storage", sm_des: [
    "Storage and Database",
    "Endpoint Devices"
  ]
},
  { id: 2, img: networking, title: "Networking", sm_des: [
    "Wired and Wireless Network",
    "Structured Cabling",
    "Server"
  ]},
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
                    <router-link :class="i === 0 ? 'active' : ''" to="/service-details">
                      {{ item }}
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
            <p>{{ description }}</p>
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
            <p>{{ description_3 }}</p>
          </div>
        </div>
  </section>

  <video-modal ref="video_modal" :video-url="videoUrl" />
</template>
