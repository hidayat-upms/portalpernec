  
<script setup>
import { reactive, ref } from "vue";
import CommentsBoxForm from "../forms/CommentsBoxForm.vue";
import BlogCommon from "../blog-common/index.vue";

import RightSymbol from "../../svg/RightSymble.vue";
import SocailLinkTwo from "../common/SocailLinkTwo.vue";
import ReplyIcon from "../../svg/ReplyIcon.vue"
import thumb_1 from "@/assets/img/blog/details/blog-1.jpg";
import thumb_2 from "@/assets/img/blog/details/blog-2.jpg";
import thumb_3 from "@/assets/img/blog/details/blog-3.jpg";

import person_1 from "@/assets/img/blog/details/comment-1.jpg";
import person_2 from "@/assets/img/blog/details/comment-2.jpg";
import quate from "@/assets/img/blog/details/quate.jpg";


const comment_reply = reactive([
  {
    id: 1,
    img: person_1,
    children_cls: "",
    name: "Eleanor Fant",
    date: "July 14, 2023",
    comment: "There are many variations of passages of Lorem Ipsum available, but the leap into electronic type setting, remaining essentiallyuncha opularisedthe with the release of Letrasetsheets containingth leap electrtypesetting remainingmajority have. There are many variations of passages of Lorem Ipsum",
    reply_icon: true

  },
  {
    id: 1,
    img: person_2,
    children_cls: "children",
    name: "Eleanor Fant",
    date: "July 14, 2023",
    comment: "There are many variations of passages of Lorem Ipsum available, but the majority have. There are many variations of passages",
    reply_icon: false
  }
])

const postbox_list = reactive([
  {
    id: 1,
    active: "",
    title: "Lorem Ipsum generators on the tend to repeat.",
  },
  {
    id: 2,
    active: "active",
    title: "If you are going to use a passage..",
  },
  {
    id: 3,
    active: "",
    title: "series of manual and semi-manual activities.",
  },
  {
    id: 4,
    active: "",
    title: "Lorem Ipsum generators on the tend to repeat.",
  },
  {
    id: 5,
    active: "",
    title: "If you are going to use a passage.",
  },
])

const tags = reactive(["Business", "Design", "apps", "data"])

const single_post_details = {
  date: "02 Apr 2023",
  comments: "Comments (03)",
  upload_time: "3 min Read",
  title_1: "The whimsically named Egg Canvas brainchild",
  des_1: "he whimsically named Egg Canvas is the brainchild of Erica Choi, a design director and photo grapher based in York. Why the name “Egg Canvas Erica was inspired by her Korean childhood nickname, which means egg, while “canvas” medium with wh art is created. “Egg Canvas therefore, is her life—creating beautiful things each day a blank canvas.",
  des_2: "We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.",
  des_3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum rhon  cus, dolor eget viverra pretium, dolor tellus aliquet nunc, vitae ultricies erat elit eu lacus. Vestibulum non justo fun consectetur, cursus ante, tincidunt sapien. Nulla quis diam sit amet turpis interd enim. Vivamus fauc ex sed nibh egestas elementum. Mauris et bibendum",
  blockquote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results",
  writer: "Jamil Rayhan",
  title_2: "Let our investment management team",


  title_3: "“Amazing Beach Scenery & Relaxing Ocean Sounds”",
  des_4: "We have covered many special events such as fireworks, fairs, parades, races, walks, awards ceremonies, fashion shows, sporting events, and even a memorial service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. vestibulum rhoncus, dolor eget viverra pretium, dolor ellus aliquet nunc,",




}

const { date, comments, upload_time, title_1, des_1, des_2, des_3, quate_icon, blockquote, writer, title_2, thumb_list, video_thumb, title_3, des_4 } = single_post_details

// video popup
import VideoModal from "../common/VideoModal.vue";
import {useVideoModal} from '@/composables/useVideoModal';
const {playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';


</script>

<template>
  <section class="postbox__area pt-120 pb-100">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="postbox__wrapper">
            <article class="postbox__item format-image mb-50 transition-3">
              <div class="postbox__thumb m-img">
                <img :src="thumb_1" alt="image-title-here">
              </div>
              <div class="postbox__content">
                <div class="postbox__meta">
                  <span><i class="fa-light fa-calendar-days"></i> {{ date }}</span>
                  <span><a href="#"><i class="fal fa-comments"></i>{{ comments }}</a></span>
                  <span><a href="#"><i class="fa-regular fa-clock"></i>{{ upload_time }}</a></span>
                </div>
                <h3 class="postbox__title">{{ title_1 }}</h3>
                <div class="postbox__text">
                  <p>{{ des_1 }}</p>
                  <p>{{ des_2 }}</p>
                  <p>{{ des_3 }}</p>

                  <div class="postbox__blockquote p-relative">
                    <div class="postbox__blockquote-shape">
                      <img :src="quate" alt="image-title-here">
                    </div>
                    <blockquote>
                      <p>{{ blockquote }}</p>
                      <cite>{{ writer }}</cite>
                    </blockquote>
                  </div>

                  <div class="postbox__list">
                    <h3 class="postbox__list-title">{{ title_2 }}</h3>
                    <div class="row">
                      <div class="col-xl-7 col-lg-12">
                        <div class="postbox__list-content">
                          <ul>
                            <li v-for="(item, i) in postbox_list" :key="i">
                              <span :class="item.active">
                                <RightSymbol />
                              </span> {{ item.title }}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-xl-5 col-lg-12">
                        <div class="posbox__list-img">
                          <img :src="thumb_2" alt="image-title-here">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="postbox__thumb m-img p-relative">
                    <img :src="thumb_3" alt="image-title-here">
                    <div class="tp-video-play play-btn text-center">
                      <a class="popup-video" @click.prevent="playVideo(videoUrl)"><i class="fa-sharp fa-solid fa-play"></i></a>
                    </div>
                    <span class="postbox-details-desc-thumb-caption">{{ title_3 }}</span>
                  </div>

                  <p>{{ des_4 }}</p>

                  <div class="postbox__details-share-wrapper">
                    <div class="row">
                      <div class="col-lg-7">
                        <div class="postbox__details-tag tagcloud">
                          <span>Tag:</span>
                          <a v-for="(tag, tag_index) in tags" :key="tag_index" href="#">{{ tag }}</a>
                        </div>
                      </div>
                      <div class="col-lg-5">
                        <div class="postbox__details-share text-lg-end">
                          <span>Share:</span>
                          <SocailLinkTwo />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div class="postbox__comment mb-50">
              <h3 class="postbox__comment-title">(04) Comment</h3>
              <ul>
                <li v-for="(comment_rep, comment_index) in comment_reply" :key="comment_index"
                  :class="comment_rep?.children_cls">
                  <div class="postbox__comment-box p-relative">
                    <div class="postbox__comment-info d-flex">
                      <div class="postbox__comment-avater mr-20">
                        <img :src="comment_rep.img" alt="image-title-here">
                      </div>
                      <div class="postbox__comment-name">
                        <h5>{{ comment_rep.name }}</h5>
                        <span class="post-meta">{{ comment_rep.date }}</span>
                      </div>
                    </div>
                    <div class="postbox__comment-text ml-65">
                      <p>{{ comment_rep.comment }}</p> 
                        <div v-if="comment_rep.reply_icon" className="postbox__comment-reply">
                          <span>
                            <ReplyIcon /> 
                          </span>
                        </div> 
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="postbox__comment-form">
              <h3 class="postbox__comment-form-title">Write a comment</h3>
              <CommentsBoxForm /> 
            </div>
          </div>
        </div>


        <div class="col-xxl-4 col-xl-4 col-lg-4">
          <div class="sidebar__wrapper">
            <BlogCommon />
          </div>
        </div>


      </div>
    </div>
     
  </section>
  <video-modal ref="video_modal" :video-url="videoUrl" />

</template>

