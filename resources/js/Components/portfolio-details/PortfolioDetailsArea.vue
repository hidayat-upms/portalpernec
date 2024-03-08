


<script setup>
import ClockIcon from "../../svg/ClockIcon.vue";
import RightSymble from "../../svg/RightSymble.vue";
import EmailIconTwo from "../../svg/EmailIconTwo.vue";
import ContactIcon from "../../svg/ContactIcon.vue"; 

import SocailLinks from "../common/SocailLinks.vue";

import portfolio_thumb from "@/assets/img/portfolio/portfolio-details/img-1.jpg";

import portfolio_icon_1 from "@/assets/img/portfolio/portfolio-details/icon-1.png";
import portfolio_icon_2 from "@/assets/img/portfolio/portfolio-details/icon-2.png";
import portfolio_icon_3 from "@/assets/img/portfolio/portfolio-details/icon-3.png";


const portfolio_detaisl_contact = {
  meta_content: [
    {
      id: 1,
      icon: portfolio_icon_1,
      meta_title: "Client name",
      title: "Leslie Alexander"
    },
    {
      id: 2,
      icon: portfolio_icon_2,
      meta_title: "Catagories",
      title: "Business , Development"
    },
    {
      id: 3,
      icon: portfolio_icon_3,
      meta_title: "Project Name",
      title: "Design , Development"
    },
  ],
  title_1: "DIGITAL MARKETING",
  description_1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.",
  description_2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulv inar dapibus leo. Ut enim ad minim veniam. when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br /> Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat. There are many variations of passages.",
  title_2: "This event will allow participants to:",
  list_title: [
    "Business's managers, leaders",
    "Downloadable lectures, code and design assets for all projects",
    "Anyone who is finding a chance to get the promotion",
  ],
}
const { meta_content, title_1, description_1, description_2, title_2, list_title } = portfolio_detaisl_contact

</script>

<template>
  <section class="tp-portfolio-details-area pt-120 pb-120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-portfolio-details-wrapper">
            <div class="tp-portfolio-details-thumb">
              <img :src="portfolio_thumb" alt="theme-pure">
            </div>
            <div class="tp-portfolio-details-meta d-flex flex-wrap justify-content-between">
              
                <div v-for="(item, i) in meta_content" :key="i" class="tp-portfolio-details-meta-left d-flex flex-wrap">
                  <div class="tp-portfolio-details-meta-item d-flex align-items-center">
                    <div class="tp-portfolio-details-meta-icon">
                      <img :src="item.icon" alt="image-title-here">
                    </div>
                    <div class="tp-portfolio-details-meta-content">
                      <h4 class="tp-portfolio-details-meta-title">{{item.meta_title}}</h4>
                      <p>{{item.title}}</p>
                    </div>
                  </div> 
                </div> 


              <div class="tp-portfolio-details-right">
                <div class="tp-portfolio-details-btn">
                  <router-link to="/portfolio">Need This Project?</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8">
          <div class="tp-portfolio-details-wrapper">
            <h3 class="tp-portfolio-details-title">{{ title_1 }}</h3>
            <p v-html="description_1"></p>
            <p v-html="description_2"></p>
            <div class="tp-portfolio-details-list mb-30">
              <h4 class="tp-portfolio-details-list-title">{{title_2}}</h4>
              <ul>
                <li v-for="(list, index) in list_title" :key="index"><span> <RightSymble /></span> {{list}} </li> 
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="tp-portfolio-details-info-box">
            <div class="tp-portfolio-details-info-address">
              <h4 class="tp-portfolio-details-info-title"><span>
                <ContactIcon />  
                </span>our address</h4>
              <p>Level 13, 2 Elizabeth St, Melbourne
                Victoria 3000, Australia</p>
            </div>
            <div class="tp-portfolio-details-info-mail">
              <h4 class="tp-portfolio-details-info-title">
                <span><ContactIcon /> </span>Contact way</h4>
              <div class="tp-portfolio-details-info-mail-content d-flex">
                <span>
                  <EmailIconTwo /> 
                </span>
                <div class="tp-portfolio-details-info-mail-text">
                  <p>deanna.curtis@example.com</p>
                  <p>(406) 555-0120</p>
                </div>
              </div>
            </div>
            <div class="tp-portfolio-details-info-open d-flex">
              <div class="tp-portfolio-details-info-open-icon">
                <span>
                  <ClockIcon /> 
                </span>
              </div>
              <div class="tp-portfolio-details-info-open-content">
                <h4 class="tp-portfolio-details-info-title">Opening Houres</h4>
                <p>Mon - Sat(8.00am - 6.00pm)</p>
                <p>Sunday - Closed</p>
              </div>
            </div>
            <div class="tp-portfolio-details-info-social">
              <SocailLinks /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
