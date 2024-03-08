<script setup>
import { reactive } from "vue";

const tags_data = reactive([
  { id: 1, tag: "symphony", link: "https://www.symphony-mobile.com/" },
  { id: 2, tag: "nokia", link: "https://www.nokia.com/" },
  { id: 3, tag: "tech", link: "https://www.tecno-mobile.com/" },
  { id: 4, tag: "Samsung", link: "https://www.samsung.com/bd/" },
  { id: 5, tag: "Alcatel", link: "https://www.alcatelmobile.com/" },
  { id: 6, tag: "mous", link: "https://www.mous.co/" },
  { id: 7, tag: "landing", link: "https://landing.space/" },
  { id: 8, tag: "Oppos", link: "https://www.oppo.com/bd/smartphones/" },
])
</script>

<template>
  <div class="sidebar__widget mb-30">
    <h3 class="sidebar__widget-title">Tags</h3>
    <div class="sidebar__widget-content">
      <div class="tagcloud">
        <a v-for="(item, i) in tags_data" :key="i" :href="item.link" target="_blank">{{ item.tag }}</a>
      </div>
    </div>
  </div>
</template>

