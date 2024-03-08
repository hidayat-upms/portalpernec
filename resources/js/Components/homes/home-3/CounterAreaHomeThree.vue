<script setup>
import { reactive } from "vue";
import CountUp from 'vue-countup-v3';

import cunter_img from "@/assets/img/others/bg.png";

const counter_content = reactive([
    {id: 1, count: 560, title: "Total Services", symbol: "",},
    {id: 2, count: 100, title: "Client Satisfiction", symbol: "%",},
    {id: 3, count: 3, title: "Monthly Revinew", symbol: "m+",},
    {id: 4, count: 30, title: "Years Experince", symbol: "+",},
])

  
</script>



<template>
  <section class="tp-counter-3-area p-relative ">
      <div class="tp-counter-3-bg">

          <img class="shape-1" :src="cunter_img" alt="image-title-here">

      </div>
      <div class="container">
          <div class="row"> 
            <div v-for="(item, i) in counter_content" :key="i" class="col-lg-3 col-md-6 col-sm-6">
                <div class="tp-counter-3-wrapper text-center" :class="i === 3? '' : 'tp-counter-3-border'">
                  <h3 class="counter-title"> 
                    <span data-purecounter-duration="4" class="purecounter">
                      <count-up :end-val="item.count" class="d-inline"></count-up>{{item.symbol}}
                    </span>
                  </h3> 
                  <span class="counter-subtitle">{{ item.title }}</span>
                </div>
            </div>

          </div>
      </div>
    </section>
</template>


 