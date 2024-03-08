
<script setup>
import { reactive } from "vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import LongRightArrow from "@/svg/LongRightArrow.vue";


const blog_data = reactive([
  {
    id: 1,
    img: "@/assets/img/blog/img-1.jpg",
    category: "Business",
    date: "02 Apr 2023",
    comments: 23,
    title: "Providing solutions for Industrial <br/> men restoration.",
  },
  {
    id: 2,
    img: "@/assets/img/blog/img-2.jpg",
    category: "Business",
    date: "02 Apr 2023",
    comments: 25,
    title: "Occaecat nisi cupidatat deserunt <br/> culpa sit..",
  },
  {
    id: 3,
    img: "@/assets/img/blog/img-3.jpg",
    category: "Business",
    date: "02 Apr 2023",
    comments: 33,
    title: "Do do tempor deserunt ullamco. <br/> Voluptate sunt..",
  },
]);




</script>



<template>
  <section class="tp-blog-area pt-80 pb-60">
    <div class="container container-large">
      <div class="row">
        <div class="col-lg-12">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="tp-blog-title-wrapper">
                <span class="tp-section-title__pre">
                  Upcoming <span class="title-pre-color">News</span>
									<TitleUnderIcon /> 
                </span>
                <h3 class="tp-section-title">
                  Recent Blog & News in <span class="title-color">Company</span>
                  <span class="title-right-shape">
										<AboutLineIcon /> 
                  </span>
                </h3>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                <p>
                  As the complexity of buildings to increase, the field of
                  architecture <br />
                  became multi-disciplinary with technological expertise.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div v-for="(item, i) in blog_data" :key="i" class="col-lg-4 col-md-6">
          <div class="tp-blog-wrapper mb-30">
            <div class="tp-blog-thumb">
              <router-link to="/blog-details"><img :src="item.img" alt="image-title-here" /></router-link>
              <div class="tp-blog-tag">
                <p>{{ item.category }}</p>
              </div>
            </div>
            <div class="tp-blog-content">
              <div class="tp-blog-details">
                <div class="tp-blog-date">
                  <span><i class="fa-light fa-calendar-days"></i> {{ item.date }}
                  </span>
                  <span>-</span>
                  <span ><i class="fa-sharp fa-solid fa-comments"></i> Comments ({{item.comments }})</span>
                </div>
              </div>
              <h3 class="tp-blog-title">
                <router-link to="/blog-details">
                  <span v-html="item.title"></span>
                </router-link>
              </h3>
              <div class="tp-blog-btn d-flex justify-content-between">
                <div class="read-more p-relative">
                  <router-link to="blog-details">Read MOre
                    <span> <LongRightArrow /> </span>
                  </router-link>
                </div>
                <div class="fvrt">
                  <span><i class="fa-light fa-heart"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
				
      </div>
    </div>
  </section>
</template>

