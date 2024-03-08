
<template>
  <section class="tp-portfolio-area pt-120 pb-60">
    <div class="container">
      <div class="row">
        <div v-for="(item, i) in portfolio_data" :key="i" class="col-xl-4 col-lg-6 col-md-6">
          <div class="tp-portfolio-item-wrapper">
            <div class="tp-portfolio-item-thumb">
              <img :src="item.img" :alt="item.title">
            </div>
            <div class="tp-portfolio-item-content">
              <span class="tp-portfolio-item-subtitle">{{ item.catagory }}</span>
              <h3 class="tp-portfolio-item-title"><router-link to="/portfolio-details">{{ item.title }}</router-link></h3>
              <div class="tp-portfolio-item-content-btn">
                <router-link to="/portfolio-details">View Projects <i class="fa-regular fa-arrow-right"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script  setup>
import { reactive } from "vue";
import portfolio_img_1 from "@/assets/img/portfolio/img-1.jpg";
import portfolio_img_2 from "@/assets/img/portfolio/img-2.jpg";
import portfolio_img_3 from "@/assets/img/portfolio/img-3.jpg";
import portfolio_img_4 from "@/assets/img/portfolio/img-4.jpg";
import portfolio_img_5 from "@/assets/img/portfolio/img-5.jpg";
import portfolio_img_6 from "@/assets/img/portfolio/img-6.jpg";

const portfolio_data = reactive([
  {
    id: 1,
    img: portfolio_img_1,
    catagory: "Marketing",
    title: "Business Growth",
  },
  {
    id: 2,
    img: portfolio_img_2,
    catagory: "XD Design",
    title: "SEO & Content Writing",
  },
  {
    id: 3,
    img: portfolio_img_3,
    catagory: "Business",
    title: "Web Development",
  },
  {
    id: 4,
    img: portfolio_img_4,
    catagory: "Figma Design",
    title: "Market Research",
  },
  {
    id: 5,
    img: portfolio_img_5,
    catagory: "Technology",
    title: "IT Specialist",
  },
  {
    id: 6,
    img: portfolio_img_6,
    catagory: "Business Consulting",
    title: "Business Analytics",
  },
])

</script>

