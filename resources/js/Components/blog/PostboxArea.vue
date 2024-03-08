<script setup>
import { reactive } from "vue";
import BlogCommon from "../blog-common/index.vue"

import post_img_1 from "@/assets/img/blog/blog-img-1.jpg";
import post_img_2 from "@/assets/img/blog/blog-img-2.jpg";
import post_img_3 from "@/assets/img/blog/blog-img-3.jpg";

const post_data = reactive([
    {
        id: 1,
        thumb: post_img_1,
        catagory: "Business",
        date: "02 Apr 2021",
        comments: "03",
        upload_time: "3 min Read",
        title: "The whimsically named Egg Canvas brainch",
        description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",        
    },
    {
        id: 2,
        thumb: post_img_2,
        catagory: "Business",
        date: "02 Apr 2021",
        comments: "05",
        upload_time: "10 min Read",
        title: "How to Clean Your Home Faster More Efficiently",
        description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",       
    },
    {
        id: 3,
        thumb: post_img_3,
        catagory: "Business",
        date: "02 Apr 2021",
        comments: "03",
        upload_time: "23 min Read",
        title: "Four Ways a Workplace Makes Employees Happy",
        description: "There are many variations of passages of Lorem Ipsum available, but majority have suffered teration in some form, by injected humour, or randomised words which don't look even slight believable. If you are going to use a passage of Lorem Ipsum.",       
    },
])

</script>

<template>
  <section class="postbox__area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-xxl-8 col-xl-8 col-lg-8">
          <div class="postbox__wrapper">

            <article v-for="(item,i) in post_data" :key="i" class="postbox__item format-image mb-50 transition-3">
              <div class="postbox__thumb w-img">
                <router-link to="/blog-details">
                  <img :src="item.thumb" alt="image-title">
                </router-link>
                <div class="postbox__tag">
                  <p>{{item.catagory}}</p>
                </div>
              </div>
              <div class="postbox__content">
                <div class="postbox__meta">
                  <span><i class="fa-light fa-calendar-days"></i>{{ item.date }}</span>
                  <span><router-link to="#"><i class="fal fa-comments"></i> Comments ({{item.comments}})</router-link></span>
                  <span><router-link to="#"><i class="fa-regular fa-clock"></i> {{item.upload_time}}</router-link></span>
                </div>
                <h3 class="postbox__title">
                  <router-link to="/blog-details">{{item.title}}</router-link>
                </h3>
                <div class="postbox__text">
                  <p>{{item.description}}</p>
                </div>
                <div class="postbox__read-more">
                  <router-link to="/blog-details" class="tp-btn">read more</router-link>
                </div>
              </div>
            </article> 

            <div class="basic-pagination text-center">
              <nav>
                <ul>
                  <li>
                    <router-link to="/blog">
                      <i class="fa-regular fa-angles-left"></i>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/blog">1</router-link>
                  </li>
                  <li>
                    <span class="current">2</span>
                  </li>
                  <li>
                    <router-link to="/blog">3</router-link>
                  </li>
                  <li>
                    <router-link to="/blog">
                      <i class="fa-regular fa-angles-right"></i>
                    </router-link>
                  </li>
                </ul>
              </nav>
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
</section></template>

