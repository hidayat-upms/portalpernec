
<script setup>
import { reactive, ref } from "vue";

const menu_data = reactive([
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "",
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
    has_dropdown: true,
    title: "Services",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/service", title: "Service" },
      { link: "/service-details", title: "Services Details" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Pages",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/portfolio", title: "Portfolio" },
      { link: "/portfolio-details", title: "Portfolio Details" },
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
    ],
  },
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
]);

 
const navTitle = ref('');

const openMobileMenu = (item) => {
  if (navTitle.value === item) {
    navTitle.value = '';
  } else {
    navTitle.value = item;
  }
};

 
</script>


<template>
  <nav className="mean-nav">
    <ul>
      <li v-for="(item, i) in menu_data" :key="i"  :class="item.has_dropdown? 'has-dropdown':''" >

        <template v-if="item.has_dropdown">
          <router-link :to="item.link">{{ item.title }}</router-link>
          <ul className="submenu" :class="navTitle === item.title ? 'd-block' : 'd-none'">

            <li v-for="(sub_item, index) in item.sub_menus" :key="index">
              <router-link :to="sub_item.link">{{ sub_item.title }}</router-link>
            </li>

          </ul>
          <a class="mean-expand" :class="navTitle === item.title ? 'mean-clicked' : ''" style="cursor: pointer;" @click="openMobileMenu(item.title)">
            <i className="fa-regular fa-angle-down"></i>
          </a>
        </template>

        <template v-if="!item.has_dropdown">
          <router-link :to="item.link">{{ item.title }}</router-link>
        </template>

      </li>

    </ul>
  </nav>
</template>  

