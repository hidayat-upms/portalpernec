
<script setup>
import { provide, ref } from "vue";
import header_logo from "@/assets/img/logo/home-2-logo.png";
import logo_shape from "@/assets/img/hero/hero-2/logo-shape.png";
import bg_img from "@/assets/img/hero/hero-2/header-bg.png"
import NavMenu from "./NavMenu.vue"; 

import HamburgerButton from "@/svg/HamburgerButton.vue";


import Sidebar from "../../Components/common/Sidebar.vue";
import SearchPopup from "../../Components/common/SearchPopup.vue";

const isSticky = ref(false)
const handleSticky = () => {
  if (window.scrollY > 80) {
    isSticky.value = true
  }
  else {
    isSticky.value = false
  }
}
window.addEventListener('scroll', handleSticky)



const searchOpen = ref(false);
provide('searchOpen', searchOpen)

const setSearchOpen = (value = true) => { 
	searchOpen.value = value ;
}; 

// slidebar open
const sidebarOpen = ref(false);
provide('sidebarOpen', sidebarOpen)
const setSidebarOpen = (value = true) => { 
	sidebarOpen.value = value ;
};



</script>

<template>
  <header class="tp-header-2-area tp-header-height p-relative">
      <div class="tp-header-2-top tp-header-2-space d-none d-xl-block">
         <div class="container-fluid">
            <div class="row align-items-center">
               <div class="col-xl-6">
                  <div class="tp-header-2-top-info">
                     <p><i class="fa-solid fa-clock"></i> Open Hours of City Govt. (Mon - Fri: <span>8.00</span> am - <span>6.00</span> pm)</p>
                  </div>
               </div>
               <div class="col-xl-6">
                  <div class="tp-header-2-top-right d-flex justify-content-end align-items-center">
                     <div class="header-date">
                        <p><i class="fa-regular fa-calendar-days"></i> Friday - Jul 27, 2023</p>
                     </div>
                     <div class="header-location">
                        <a href="https://www.google.com/maps/place/Taco+Bell/@33.9694034,-112.7228178,17z/data=!3m1!4b1!4m6!3m5!1s0x80d34e9ca49e9761:0x8b141f1593605d2a!8m2!3d33.9694034!4d-112.7206291!16s%2Fg%2F1tdwkssz"><i class="fa-sharp fa-solid fa-location-dot"></i> 684 West College St. Sun City, USA</a>
                     </div>
                     <div class="header-social d-xxl-block d-none">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="header-sticky" class="tp-header-2-bottom header__sticky p-relative" :class="isSticky ?  'tp-header-sticky' : ''">
         <div class="tp-header-2-bottom-inner p-relative" :style="{ backgroundImage: `url(${bg_img})` }">
            <div class="container-fluid gx-0">
               <div class="row gx-0 align-items-center">
                  <div class="col-xxl-2 col-xl-2 col-lg-10 col-md-6">
                  <div class="tp-header-2-main-left d-flex align-items-center justify-content-xl-center justify-content-xxl-end p-relative">
                     <div class="tp-header-2-logo">
                        <router-link to="/">
                           <img :src="header_logo" alt="header logo">
                        </router-link>
                        <img :src="logo_shape" class="logo-shape" alt="logo-shape">
                     </div>
                  </div>
                  </div>
                  <div class="col-xxl-6 col-xl-7 d-none d-xl-block">
                     <div class="tp-main-menu-2-area d-flex align-items-center">
                        <div class="tp-main-menu">
                           <nav id="tp-mobile-menu">
                              <NavMenu />                           
                           </nav>
                        </div>
                     </div>
                  </div>
                  <div class="col-xxl-4 col-xl-3 col-lg-2 col-md-6">
                     <div class="tp-header-2-right d-none d-xxl-block">
                        <div class="tp-header-2-main-right d-flex align-items-center justify-content-xxl-end">
                           <div class="tp-header-2-phone d-flex align-items-center">
                              <div class="tp-header-2-phone-icon">
                                 <i class="fa-solid fa-phone"></i>
                              </div>
                              <div class="tp-header-2-phone-content">
                                 <span>Phone: <br> <a href="tel:01900678956">+88 1900 6789 56</a></span>
                              </div>
                           </div>
                           <div class="tp-header-2-btn">
                              <router-link to="/contact">Get an Quatre <i class="fa-regular fa-angle-right"></i></router-link>
                           </div>
                           <div class="tp-header-search search-open-btn d-none d-xxl-block">
                              <a @click="setSearchOpen(true)"> <i class="fa-regular fa-magnifying-glass"></i></a>
                           </div>
                        </div>
                     </div>
                     <div class="tp-header-2-mobile-menu d-flex justify-content-end d-block d-xxl-none">
                        <div class="tp-header-2-hamburger-btn offcanvas-open-btn" style="background-image: url(/assets/img/icon/header-hamburger-shape.png)">
                           <button class="hamburger-btn" @click="setSidebarOpen(true)">
                              <span>
                                 <HamburgerButton />  
                              </span>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   <SearchPopup v-if="searchOpen" @set-search-open="setSearchOpen" />
   <Sidebar v-if="sidebarOpen" @set-sidebar-open="setSidebarOpen" />

</template>


 