

<script setup>
import { reactive } from "vue";
const menu_data = reactive([
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon:
      '<svg width="11" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M6.04088 0L0.535156 4.125V11H4.26484V8.59381C4.26484 7.64165 5.05698 6.87506 6.04088 6.87506C7.02477 6.87506 7.81692 7.64165 7.81692 8.59381V11H11.5466V4.125L6. 04088 0Z" fill="#05DAC3"></path></svg>',
    title: "Home",
    link: "/",
    active: ""
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/service",
    active: "",
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Directors",
    link: "/team",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
]);
</script>

<template>
  <ul>
    <li
      v-for="(item, i) in menu_data"
      :key="i"
      :class="item?.has_dropdown ? 'has-dropdown' : ''">
      <router-link :to="item.link"> <span></span>{{ item.title }}</router-link>
      <ul v-if="item.has_dropdown" class="submenu">
        <li v-for="(sub_menu, index) in item?.sub_menus" :key="index">
          <router-link :to="sub_menu.link"
            ><span>{{ sub_menu.title }}</span></router-link
          >
        </li>
      </ul>
    </li>
  </ul>
</template>
