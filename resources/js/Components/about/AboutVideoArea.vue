
<script setup> 
import { inject } from "vue";
const {playVideo } = useVideoModal();
import video_thumb from "@/assets/img/others/video-img.jpg";
import VideoModal from "../common/VideoModal.vue";
import {useVideoModal} from "@/composables/useVideoModal";
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';


const propValue = inject('addClass');
const emit = defineEmits(["handleAddClass"]);

</script>
<template>
  <div class="tp-video-area" :class="propValue? 'pt-105' : 'pt-50'">
    <div class="container-fluid gx-0">
      <div class="row gx-0">
        <div class="col-xl-12">
          <div class="tp-video-breadcrumb p-relative">
            <img :src="video_thumb" alt="image-title-here" />
            <div class="tp-video-play text-center">
              <a class="popup-video" @click.prevent="playVideo(videoUrl)"
                ><i class="fa-sharp fa-solid fa-play"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  <video-modal ref="video_modal" :video-url="videoUrl" />
 
</template>


