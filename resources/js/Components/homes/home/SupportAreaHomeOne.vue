
<script setup>
import { reactive } from "vue";
import CountUp from "vue-countup-v3";
import brand_shape from "@/assets/img/brand/shape-2.png";
// support data
const support_content = [
  {
    id: 1,
    count: 9,
    symbol: "hr",
    cls: "fadeLeft",
    title: "Quick Result",
    info: "Average time to resolve <br /> cyber attack.",
  },
  {
    id: 2,
    count: 7,
    symbol: "hr",
    cls: "",
    title: "Quick Reply",
    info: "Average time to resolve <br /> cyber attack.",
  },
  {
    id: 3,
    count: 94,
    symbol: "%",
    cls: "fadeRight",
    title: "Quick Response",
    info: "Calling answered within <br /> 15 seconds.",
  },
];
 


</script>

<template>
  <section class="tp-support-feature-area pb-100">
    <div class="container container-large">
      <div class="row">
        <div class="col-lg-4" v-for="(item, i) in support_content" :key="i">
          <div class="tp-support-feature-item fadeleft d-flex p-relative"
            :class="item.cls">
            <div class="tp-support-feature-counter">
              <div class="tp-support-feature-thumb">
                <img :src="brand_shape" :alt="item.title" />
              </div>
              <h3 class="support-feature-title">
                <span
                  data-purecounter-duration="4"
                  data-purecounter-end="8"
                  class="purecounter">
                  <count-up :end-val="item.count" class="d-inline"></count-up></span>{{ item.symbol }}
              </h3>
            </div>
            <div class="tp-support-feature-content">
              <h4 class="tp-support-feature-content-title">{{item.title}}</h4>
              <p v-html="item.info"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



