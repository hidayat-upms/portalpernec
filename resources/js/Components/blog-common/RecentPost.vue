<script setup>
import { reactive } from "vue";
import Calendar from "../../svg/Calendar.vue";

import thumb_1 from "@/assets/img/blog/details/side-1.jpg";
import thumb_2 from "@/assets/img/blog/details/side-2.jpg";
import thumb_3 from "@/assets/img/blog/details/side-3.jpg";

const recent_post_data = reactive([
  {
    id: 1,
    img: thumb_1,
    date: "July 21, 2023",
    title: "The Benefits of Hiring a Cleaning",
  },
  {
    id: 2,
    img: thumb_2,
    date: "July 21, 2023",
    title: "How Often Should You Schedule Professiona",
  },
  {
    id: 3,
    img: thumb_3,
    date: "July 21, 2023",
    title: "How to Keep Your Home Safe",
  },
])

</script>

<template>
  <div class="sidebar__widget mb-30">
    <h3 class="sidebar__widget-title">Recent Post</h3>
    <div class="sidebar__widget-content">
      <div class="sidebar__post rc__post">
        <div v-for="(item, i) in recent_post_data" :key="i" class="rc__post mb-30 d-flex align-items-center">
          <div class="rc__post-thumb mr-20">
            <router-link to="/blog-details"><img :src="item.img" alt="image-title-here"></router-link>
          </div>
          <div class="rc__post-content">
            <div class="rc__meta">
              <span>
                <Calendar /> {{ item.date }}
              </span>
            </div>
            <h3 class="rc__post-title">
              <router-link to="/blog-details">{{ item.title }}</router-link>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


