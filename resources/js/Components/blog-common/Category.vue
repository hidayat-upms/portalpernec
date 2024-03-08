<script setup>
import { reactive } from 'vue';

const category_data = reactive([
  { id: 1, category: "Cleaning", items: "03" },
  { id: 2, category: "Consultant", items: "05" },
  { id: 3, category: "Creative", items: "08" },
  { id: 4, category: "Technology", items: "06" },
])

</script>

<template>
  <div class="sidebar__widget mb-30">
    <h3 class="sidebar__widget-title">Category</h3>
    <div class="sidebar__widget-content">
      <ul>
        <li v-for="(item, i) in category_data" :key="i">
        <router-link to="/blog">{{ item.category }}<span>{{ item.items}}</span></router-link></li>
      </ul>
    </div>
  </div>
</template>

