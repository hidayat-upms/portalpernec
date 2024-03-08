
<script setup>
import shape_1 from "@/assets/img/cta/home-3/shape-1.png";
import call_icon from "@/assets/img//icon/call.svg";

const cta_data = {
  title: "We're Ready to Growth <br> IT Business",
  phone: "+1 0208 446 4695",
  about: "About Our Agency",
};

const { title, phone, about } = cta_data;
</script>

<template>
  <section
    class="tp-cta-3-area pb-120"
    style="background-image: url(/assets/img/services/home-3/service-bg.png)"
  >
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="tp-cta-3-wrapper p-relative">
            <div class="tp-cta-3-shape">
              <img :src="shape_1" alt="image-title-here" />
            </div>
            <div class="row">
              <div class="col-lg-5">
                <div class="tp-cta-3-title-wrapper p-relative">
                  <h3 class="tp-cta-3-title" v-html="title"></h3>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tp-cta-3-content-wrapper d-flex flex-wrap justify-content-start justify-content-lg-end">
                  <div class="tp-cta-3-phone d-flex align-items-center">
                    <div class="tp-cta-3-phone-icon">
                      <img :src="call_icon" alt="image-title-here" />
                    </div>
                    <div class="tp-cta-3-phone-content">
                      <span>Phone: <br />
                        <router-link :to="'tel:' + phone">{{phone }}</router-link></span>
                    </div>
                  </div>
                  <div class="tp-cta-3-btn">
                    <router-link class="tp-btn-3" to="/about">{{about}}</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

