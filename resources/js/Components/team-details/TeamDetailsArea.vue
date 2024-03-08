<script setup>
import team_shape_1 from "@/assets/img/team/details/shape-1.png";
import team_shape_2 from "@/assets/img/team/details/shape-2.png";
import team_member from "@/assets/img/team/details/img-1.jpg";
import flag from "@/assets/img/team/details/flag.png";
import RightSymble from "../../svg/RightSymble.vue";
import SocailLinks from "../common/SocailLinks.vue";


const team_details_contact = {
  name: "Cameron Williamson",
  job_title: "Senior Reporter / Themepure",
  member_info: "Bangladesh / Age : 32 years",
  description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised wo look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first  combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reas characteristic words etc.",
  list_title: "World best education site - (Computer engeenering)",
  lists: [
    "Research beyond the business plan",
    "Marketing options and rates",
    "The ability to turnaround consulting",
    "The ability to turnaround consulting",
  ]
}
const { name, job_title, member_info, description, list_title, lists } = team_details_contact


</script>

<template>
  <section class="tp-team-details-area p-relative pt-120 pb-90">
    <div class="tp-team-details-shape">
      <img class="shape-1" :src="team_shape_1" alt="image-title-here">
      <img class="shape-2" :src="team_shape_2" alt="image-title-here">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="tp-team-details-thumb p-relative text-center fadeLeft">
            <img :src="team_member" alt="image-title-here">
            <div class="social text-center">
              <socail-links /> 
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="tp-team-details-wrapper fadeRight">
            <div class="row">
              <div class="col-lg-6">
                <div class="tp-team-detials-designation-wrapper">
                  <div class="tp-team-details-designation-content">
                    <h4 class="tp-team-details-designation-title">{{ name }}</h4>
                    <p class="tp-team-details-designation">{{ job_title }}</p>
                    <div class="tp-team-details-meta d-flex">
                      <div class="tp-team-details-meta-thumb">
                        <img :src="flag" alt="image-title-here">
                      </div>
                      <p>{{ member_info }}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="tp-team-details-rating d-flex">
                  <span><i class="fa-solid fa-star-sharp"></i></span>
                  <span><i class="fa-solid fa-star-sharp"></i></span>
                  <span><i class="fa-solid fa-star-sharp"></i></span>
                  <span><i class="fa-solid fa-star-sharp"></i></span>
                  <span class="deactive"><i class="fa-solid fa-star-sharp"></i></span>
                  <p>(22)</p>
                </div>
              </div>
            </div>

            <div class="tp-team-details-info">
              <p>{{ description }}</p>
            </div>

            <div class="tp-team-details-list">
              <p class="list-title">{{ list_title }}</p>
              <ul>
                <li v-for="(item, i) in lists" :key="i">
                  <span>
                    <RightSymble /> 
                  </span>{{ item }}
                </li>
              </ul> 
            </div>
          </div>
        </div>
    </div>
  </div>
</section>
</template>


