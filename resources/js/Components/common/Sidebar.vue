
<script setup>
import { inject } from "vue";
import FooterLogo from "@/assets/img/logo/PernecLogo.gif";
import MobileMenu from "@/Layouts/headers/MobileMenu.vue";

const propValue = inject('sidebarOpen');
const emit = defineEmits(["setSidebarOpen"]);

const handleClose = () => {
  emit("setSidebarOpen", false);
}

const propValue2 = inject('addClass'); 


</script>


<template>
  <div class="offcanvas__area" :class="`${propValue? 'offcanvas-opened' : ''} ${propValue2? 'home-3-pos' : ''}`">
    <div class="offcanvas__wrapper">
      <div class="offcanvas__close">
        <button class="offcanvas__close-btn offcanvas-close-btn" @click="handleClose(false)">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11 1L1 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M1 1L11 11"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="offcanvas__content">
        <div class="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
          <div class="offcanvas__logo logo">
            <router-link to="/" @click="handleClose(false)">
              <img :src="FooterLogo" alt="logo" />
            </router-link>
          </div>
        </div>
        <div class="mobile-menu fix d-lg-none">
        </div>
        <div class="tp-mobile-menu-pos mean-container d-lg-none">
          <MobileMenu />
          
        </div>
        <div class="offcanvas__popup">
          
        </div>
        <div class="offcanvas__contact">
          <h4 class="offcanvas__title">Contacts</h4>
          <div class="offcanvas__contact-content d-flex">
            <div class="offcanvas__contact-content-icon">
              <i class="fa-sharp fa-solid fa-location-dot"></i>
            </div>
            <div class="offcanvas__contact-content-content">
              <a>
                <img src="@/assets/img/portfolio/qr.png" alt="qr address" />
              </a>
            </div>
          </div>
          <div class="offcanvas__contact-content d-flex">
            <div class="offcanvas__contact-content-icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div class="offcanvas__contact-content-content">
              <a href="marketing@pernec.com.my"> marketing@pernec.com.my </a>
            </div>
          </div>
          <div class="offcanvas__contact-content d-flex">
            <div class="offcanvas__contact-content-icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div class="offcanvas__contact-content-content">
              <a href="tel:603 4259 6000"> 603 4259 6000</a>
            </div>
          </div>

          <div class="offcanvas__contact-content d-flex">
            <div class="offcanvas__contact-content-icon">
              <i class="fa fa-fax"></i>
            </div>
            <div class="offcanvas__contact-content-content">
              <a href="fax:603 4259 6080">603 4259 6080</a>
            </div>
          </div>

        </div>
        <div class="offcanvas__social">
          <a class="icon facebook" href="https://m.facebook.com/profile.php/?id=100057577714238"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a class="icon linkedin" href="https://www.linkedin.com/company/pernec-corporation-berhad/"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  </div>
  <div class="body-overlay" :class="`${propValue? 'opened' : ''}`" @click="handleClose(false)"></div>
</template>  
