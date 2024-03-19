<script setup>
import { reactive } from "vue";
import ContactFormServiceDetails from "../forms/ContactFormServiceDetails.vue";
import service_thumb_1 from "@/assets/img/services/service-details/img-1.jpg";
import service_thumb_2 from "@/assets/img/services/service-details/img-2.jpg";
import RightSymble from "../../svg/RightSymble.vue";



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
  ]),
  title: "Digital Marketing",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi? perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.",
  title_2: "Why Marketing Important ?",
  description_2: "Lorem ipsum dolor sit amet, consectetur adipisici sed do eiusmod tempor incididunt ut labore et",
  feture_list: [
    "Research beyond the business plan",
    "Marketing options and rates",
    "The ability to turnaround consulting",
  ],
  description_3: "Need something changed or is there something not quite working the way you envisaged? Is your van a little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",

}
const { service_details_tab, title, description, title_2, description_2, feture_list, description_3, accordion_data } = service_details_content


// video popup
import VideoModal from "../common/VideoModal.vue";
import {useVideoModal} from "@/composables/useVideoModal.js";
const {playVideo } = useVideoModal();
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
              <img :src="service_thumb_1" alt="image-title-here">
            </div>
            <h3 class="tp-service-details-title">{{ title }}</h3>
            <p>{{ description }}</p>
            <div class="row">
              <div class="col-lg-6">
                <div class="tp-service-details-thumb p-relative">
                  <img :src="service_thumb_2" alt="image-title-here">
                  <div class="tp-video-play text-center">
                    <a class="popup-video effect-1 effect-2"
                    @click.prevent="playVideo(videoUrl)"
                      ><i
                        class="fa-sharp fa-solid fa-play"></i></a>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="tp-service-details-list">
                  <h3 class="tp-service-details-title">{{ title_2 }}</h3>
                  <p>{{ description_2 }} </p>
                  <ul>
                    <li v-for="(feture, index) in feture_list" :key="index">
                      <span>
                        <RightSymble />
                      </span> {{ feture }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p>{{ description_3 }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <video-modal ref="video_modal" :video-url="videoUrl" />
</template>


