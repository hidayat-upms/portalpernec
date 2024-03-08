

<script setup>
import { reactive } from "vue";

const social_links = reactive([
  {
    link: "http://facebook.com", 
    icon: "fab fa-facebook-f",
  },
  {
    link: "http://twitter.com",
    icon: "fab fa-twitter",
  },
  {
    link: "https://www.instagram.com",
    icon: "fa-brands fa-instagram",
  },
  {
    link: "https://www.pinterest.com",
    icon: "fa-brands fa-pinterest",
  },
])

</script>


<template>
  <a v-for="(item, i) in social_links" :key="i" :href="item.link"  target="_blank">
    <i :class="item.icon"></i>
  </a>
</template>
