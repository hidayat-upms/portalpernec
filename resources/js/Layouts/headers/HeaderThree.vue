
<script setup>
import { provide, ref } from "vue";
import NavMenu from "./NavMenu.vue";
import PernecLogo from "@/assets/img/logo/PernecLogo.gif";
import SearchIconHomeThree from "@/svg/SearchIconHomeThree.vue";
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
      <div id="header-sticky" class="tp-header-3-bottom header__sticky p-relative" :class="isSticky ?  'tp-header-sticky' : ''">
        <div class="tp-header-3-bottom-inner p-relative">
            <div class="container-fluid gx-0">
              <div class="row gx-0 align-items-center">
                  <div class="col-xl-2 col-6">
                    <div class="tp-header-2-main-left d-flex align-items-center justify-content-xl-center p-relative">
                    <div class="tp-header-3-logo">
                        <router-link to="/">
                          <img :src="PernecLogo" alt="image-title-here" />
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
                        <!-- <div class="tp-header-search search-open-btn d-none d-xl-block">
                          <a @click="setSearchOpen(true)" style="cursor: pointer"> 
                            <SearchIconHomeThree /> 
                            </a>
                        </div> -->
                    </div>
                  </div>
                  <div class="col-xl-2 col-6">
                    <div class="tp-header-3-right">
                        <div class="tp-header-3-main-right d-flex align-items-center justify-content-end">
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


