<script setup>
import avatar from "@/assets/img/blog/user-2.jpg";
import SocailLinkTwo from '../common/SocailLinkTwo.vue';

const post_box_content = {
        user_name: "Rosalina D. Willaim",
        designation: "Blogger/Photographer",
        user_info: "he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam"
    }
    const {user_name, designation, user_info} = post_box_content


</script>

<template>
  <div class="sidebar__widget mb-40">
    <div class="sidebar__widget-content">
      <div class="sidebar__about">
        <div class="sidebar__thumb text-center">
          <img :src="avatar" alt="avatar-image">
        </div>
        <div class="sidebar__content text-center">
          <div class="sidebar__content-title">
            {{user_name}}
          </div>
          <span class="sidebar__content-designation">{{ designation }}</span>
          <p>{{ user_info }}</p>
          <div class="sidebar__content-social">
            <SocailLinkTwo /> 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

