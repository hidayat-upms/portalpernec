
<script setup>
import { provide, ref } from "vue";
import NavMenu from "./NavMenu.vue";
import HeaderLogo from "@/assets/img/logo/footer-logo.png";
import SearchIconHomeThree from "@/svg/SearchIconHomeThree.vue";

import HamburgerButton from "@/svg/HamburgerButton.vue";
import PhoneIcon from "@/assets/img//icon/call.svg";

import FooterLogo from "@/assets/img/logo/logo-lang.png";

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

//  props passing
const addClass = ref(true);
provide('addClass', addClass)

const handleAddClass = (value = true) => { 
	addClass.value = value ;
};


const activeClass = ref(false); 
// create a toggle function 
const toggleActive = () => { 
	activeClass.value = !activeClass.value; 
};
const activeClass2 = ref(false); 
// create a toggle function 
const toggleActiveCurrency = () => { 
	activeClass2.value = !activeClass2.value; 
};
 

</script>

<template>
  <header class="tp-header-3-area tp-header-3-transparent tp-header-height p-relative">
      <div class="tp-header-3-top tp-header-3-space d-none d-xl-block">
        <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-xl-10 col-xxl-8">
                  <div class="tp-header-3-top-info d-flex">
                    <div class="tp-header-3-top-call d-flex">
                        <span>Call</span>
                        <p>Consult With It Advisor? <a href="#">Click Now</a></p>
                    </div>
                    <ul>
                        <li>
                          <a href="https://www.google.com/maps/@36.0758266,-79.4558848,17z" target="_blank">
                            <span><i class="fa-sharp fa-solid fa-location-dot"></i></span>734 H, Bryan Burlington, NC 27215
                          </a>
                        </li>
                        <li>
                          <a href="mailto:technix@support.com"><span><i class="fa-solid fa-envelope"></i></span>technix@support.com</a>
                        </li>
                    </ul>
                  </div>
              </div>
              <div class="col-xl-2 col-xxl-4">
                  <div class="tp-header-3-top-right d-flex justify-content-end align-items-center">
                    <div class="header-social d-xxl-block d-none">
                        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                    <div class="tp-header-usd">
                        <span class="tp-header-usd-selected-usd tp-usd-toggle" @click="toggleActiveCurrency" id="tp-header-usd-toggle">USD</span>
                        <ul class="tp-header-usd-list tp-usd-list" :class="activeClass2? 'tp-usd-list-open' : ''">
                          <li>EUR</li>
                          <li>AFN</li>
                          <li>XCD</li>
                        </ul>
                    </div>
                    <div class="tp-header-3-lang-wrapper d-flex align-items-center">
                        <div class="tp-header-lang-img">
                          <img :src="FooterLogo" alt="image-title-here" />
                        </div>
                        <div class="tp-header-lang">
                          <span class="tp-header-lang-selected-lang tp-lang-toggle" @click="toggleActive" id="tp-header-lang-toggle">English</span>
                          <ul class="tp-header-lang-list tp-lang-list" :class="activeClass? 'tp-lang-list-open' : ''">
                              <li>Spanish</li>
                              <li>English</li>
                              <li>Canada</li>
                          </ul>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
      </div>
      <div id="header-sticky" class="tp-header-3-bottom header__sticky p-relative" :class="isSticky ?  'tp-header-sticky' : ''">
        <div class="tp-header-3-bottom-inner p-relative">
            <div class="container-fluid gx-0">
              <div class="row gx-0 align-items-center">
                  <div class="col-xl-2 col-6">
                    <div class="tp-header-2-main-left d-flex align-items-center justify-content-xl-center p-relative">
                    <div class="tp-header-3-logo">
                        <router-link to="/">
                          <img :src="HeaderLogo" alt="image-title-here" />
                        </router-link>
                    </div>
                    </div>
                  </div>
                  <div class="col-xl-8 d-none d-xl-block">
                    <div class="tp-main-menu-3-area d-flex align-items-center justify-content-center">
                        <div class="tp-main-menu menu-icon">
                          <nav id="tp-mobile-menu">
                            <NavMenu /> 
                          </nav>
                        </div>
                        <div class="tp-header-search search-open-btn d-none d-xl-block">
                          <a @click="setSearchOpen(true)" style="cursor: pointer"> 
                            <SearchIconHomeThree /> 
                            </a>
                        </div>
                    </div>
                  </div>
                  <div class="col-xl-2 col-6">
                    <div class="tp-header-3-right">
                        <div class="tp-header-3-main-right d-flex align-items-center justify-content-end">
                          <div class="tp-header-3-phone d-flex align-items-center">
                              <div class="tp-header-3-phone-icon">
                                <img :src="PhoneIcon" alt="image-title-here" />
                              </div>
                              <div class="tp-header-3-phone-content">
                                <span>Phone: <br> <a href="tel:01900678956"> +14842634813</a></span>
                              </div>
                          </div>
                          <div class="tp-header-3-hamburger-btn offcanvas-open-btn" @click="setSidebarOpen(true)">
                              <button class="hamburger-btn" >
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
      </div>
  </header>

  <SearchPopup v-if="searchOpen" @set-search-open="setSearchOpen" />
   <Sidebar v-if="sidebarOpen" @set-sidebar-open="setSidebarOpen" @handleAddClass="handleAddClass" />


</template>


