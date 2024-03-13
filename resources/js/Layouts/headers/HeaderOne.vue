<script setup>
import { ref, provide } from "vue";
import NavMenu from "./NavMenu.vue";
import HomeIcon from "@/svg/HomeIcon.vue";
import header_logo from "@/assets/img/logo/logo.png";
import SearchPopup from "@/Components/common/SearchPopup.vue";
import Sidebar from "@/Components/common/Sidebar.vue";
import HamburgerButton from "@/svg/HamburgerButton.vue";
import LongLogo from "@/assets/img/logo/logo-lang.png";
import HeaderHamburger from "@/assets/img/icon/header-hamburger-shape.png"


 
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


const activeClass = ref(false); 
// create a toggle function 
const toggleActive = () => { 
	activeClass.value = !activeClass.value; 
};
 


</script>

<template>
	<header class="tp-header-area tp-header-height p-relative">
		<!-- <div class="tp-header-top tp-header-space d-none d-xl-block">
			<div class="container-fluid">
				<div class="row align-items-center">
					<div class="col-xxl-6 col-xl-8">
						<div class="tp-header-top-info">
							<ul>
								<li>
									<a href="https://www.google.com/maps/@36.0758266,-79.4558848,17z" target="_blank"><span><i
												class="fa-sharp fa-solid fa-location-dot"></i></span>734 H, Bryan Burlington, NC 27215</a>
								</li>
								<li>
									<a href="mailto:technix@support.com"><span><i class="fa-solid fa-envelope"></i></span>technix@support.com</a>
								</li>
								<li>
									<div class="tp-header-lang-wrapper d-flex align-items-center">
										<div class="tp-header-lang-img">
											<img :src="LongLogo" alt="image-title-here">
										</div>
										<div class="tp-header-lang">
											<span class="tp-header-lang-selected-lang tp-lang-toggle" @click="toggleActive"  id="tp-header-lang-toggle">English</span>
											<ul class="tp-header-lang-list tp-lang-list" :class="activeClass? 'tp-lang-list-open' : ''">
												<li>Spanish</li>
												<li>English</li>
												<li>Canada</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="col-xxl-6 col-xl-4">
						<div class="tp-header-top-right d-flex justify-content-end align-items-center">
							<div class="header-call">
								<a href="tel:01310-069824"><i class="fa-solid fa-phone"></i> +14842634813</a>
							</div>
							<div class="header-social d-xxl-block d-none">
								<a href="#"><i class="fa-brands fa-facebook"></i> Facebook</a>
								<a href="#"><i class="fa-brands fa-twitter"></i> Skype</a>
								<a href="#"><i class="fa-brands fa-linkedin"></i> Linkedin</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div> -->
		<div id="header-sticky" class="tp-header-bottom header__sticky p-relative" :class="isSticky ?  'tp-header-sticky' : ''" >
			<div class="tp-header-bottom-space p-relative">
				<div class="container-fluid gx-0">
					<div class="row gx-0 align-items-center">
						<div class="col-xxl-3 col-xl-3">
							<div class="tp-header-main-left d-flex align-items-center p-relative">
								<div @click="setSidebarOpen(true)" class="tp-header-hamburger-btn offcanvas-open-btn" :style="{ 'background-image': HeaderHamburger}">
									<button class="hamburger-btn" >
										<span>
											<HamburgerButton /> 
										</span>
									</button>
								</div>
								
								<div class="tp-header-logo">
									<router-link to="/">
										<img :src="header_logo" alt="image-title-here">
									</router-link>
								</div>
							</div>
						</div>
						<div class="col-xxl-6 col-xl-6 d-none d-xl-block">
							<div class="tp-main-menu-area counter d-flex align-items-center">
								<div class="tp-main-menu menu-icon">
									<span className="header-icon">
										<HomeIcon />
									</span>
									<nav id="tp-mobile-menu">
										<NavMenu />
									</nav>
								</div>
							</div>
						</div>
						<div class="col-xxl-3 col-xl-3">
							<div class="tp-header-main-right d-flex align-items-center justify-content-xl-end">
								<div class="tp-header-search search-open-btn d-none d-xxl-block">
									<button @click="setSearchOpen(true)"> <i class="fa-regular fa-magnifying-glass"></i></button> 				 	
								</div>
								<div class="tp-header-btn d-none d-xl-block pl-40">
									<router-link class="tp-btn" to="/contact">Get Started Today</router-link>
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


