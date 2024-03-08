
<script setup> 
import shape_1 from "@/assets/img/footer/shape-1.png";
import footer_logo from "@/assets/img/logo/footer-logo.png";
import SocailLinkTwo from "../../components/common/SocailLinkTwo.vue";

const footer_two_content = { 
    footer_widget: [
        "Parking permission",
        "Fire Service Noc",
        "Report a Parking Violation",
        "Residential Parking",
        "Vendor Registration",
    ],
    google_map: "https://www.google.com/maps/place/254+Lillian+Blvd,+Holbrook,+NY+11741,+USA/@40.7937446,-73.0774993,17z/data=!3m1!4b1!4m5!3m4!1s0x89e8483b469d706f:0xa6841f8aafc2ef19!8m2!3d40.7937446!4d-73.0753106",
    about_us: "The world's first and largest digital marketplace <br /> for crypto collectibles and non-fungible tokens (NFTs). Buy",
    address: " 254 Lillian Blvd, Holbrook",
    phone: "1-800-654-3210",
    email: "needhelp@company.com",
    footer_nav: [
        {title: "Home", link: "/"},
        {title: "Company", link: "/"},
        {title: "services", link: "/service"},
        {title: "Resources", link: "#"},
        {title: "Shop", link: "#"},
        {title: "contact", link: "/contact"},
    ],
    mobile: "+1-800-654-3210",

}
const {footer_widget, google_map, about_us, address, phone, email, footer_nav, mobile} = footer_two_content

 

</script>

<template>
  <footer class="tp-footer-2-area p-relative">
      <div class="tp-footer-overlay" style="background-image: url(assets/img/footer/footer-2-bg.png);">
         <div class="tp-footer-2-shape">
            <img :src="shape_1" alt="image-title-here">
         </div>
         <div class="container">
         <div class="tp-footer-2-main-area">
            <div class="row">
               <div class="col-xl-4 col-lg-5 col-md-6">
                  <div class="tp-footer-widget tp-footer-2-col-1">
                     <h3 class="tp-footer-widget-title">Newsletter</h3>
                     <div class="tp-footer-from">
                        <div class="tp-footer-text-email p-relative">
                           <input type="text" placeholder="Enter Email Address">
                           <span>
                              <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.49316 13.7164C3.63379 13.8458 3.84046 13.8759 4.01071 13.7908L11.4654 10.1149L5.90522 14.0488C5.77478 14.1412 5.70122 14.2939 5.71058 14.4538L5.90157 17.7137C5.93936 18.3587 6.06262 18.9045 6.25825 19.2917C6.59438 19.9576 7.06242 20.0322 7.31139 20.0176C7.61259 20 7.90192 19.8421 8.17074 19.5482L9.20637 18.4157L10.8851 19.4378C11.3043 19.6933 11.7985 19.8118 12.3141 19.7816C13.3786 19.7192 14.4435 19.0328 15.0945 17.9905L24.1844 3.42754C24.8108 2.42378 24.7071 1.81746 24.5101 1.48593C24.38 1.26641 24.0445 0.904988 23.2627 0.950786C23.0031 0.965999 22.7113 1.02528 22.3941 1.12637L1.78045 7.70011C0.860734 7.99324 0.267482 8.54997 0.108773 9.26713C-0.0494808 9.98477 0.254344 10.7393 0.964829 11.3921L3.49316 13.7164ZM1.01287 9.46688C1.09713 9.08504 1.46951 8.7707 2.06157 8.58208L22.6756 2.00782C23.23 1.83163 23.6608 1.86665 23.7149 1.95852C23.7648 2.04228 23.7632 2.35484 23.3995 2.93758L14.3102 17.5006C13.8156 18.2927 13.0301 18.8124 12.2603 18.8575C11.9286 18.877 11.6283 18.8065 11.3672 18.6474L9.36306 17.4269C9.27991 17.3767 9.18683 17.3548 9.09535 17.3601C8.97847 17.367 8.86461 17.4181 8.781 17.5097L7.48832 18.9234C7.33843 19.087 7.25818 19.0935 7.2577 19.094C7.1674 19.0715 6.88551 18.6754 6.82599 17.6595L6.65003 14.656L16.785 7.48526C16.9817 7.34623 17.0388 7.07823 16.9149 6.87079C16.7915 6.66195 16.5265 6.58619 16.3129 6.69237L3.88618 12.8204L1.59108 10.7106C1.13392 10.2906 0.928189 9.84874 1.01287 9.46688Z" fill="#05DAC3"/>
                                 </svg>
                           </span>
                        </div>
                        <div class="tp-footer-form-check">
                        <input class="form-check-input" id="flexCheckChecked" type="checkbox">
                        <label class="form-check-label" for="flexCheckChecked">
                           I agree to all your terms and policies
                        </label>
                     </div>
                     <div class="tp-footer-widget-social">
                        <socail-link-two /> 
                     </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-3 col-md-6">
                  <div class="tp-footer-widget tp-footer-2-col-2">
                     <h3 class="tp-footer-widget-title">Services Req</h3>
                     <div class="tp-footer-widget-content">
                        <ul>
                           <li v-for="(item, index) in footer_widget" :key="index"><a href="#">{{ item }}</a></li> 
                        </ul>
                     </div>
                  </div> 
               </div>
               <div class="col-xl-4 col-lg-4 col-md-6">
                  <div class="tp-footer-widget tp-footer-2-col-3">
                     <h3 class="tp-footer-widget-title">About Us</h3>
                     <div class="tp-footer-widget-content">
                        <div class="tp-footer-info">
                           <p v-html="about_us"></p>
                           <div class="tp-footer-main-location">
                              <a target="_blank" :href="google_map">
                                 <i class="fa-sharp fa-light fa-location-dot"></i>{{ address }}</a>
                           </div>
                           <div class="tp-footer-main-mail">
                              <a  :href="'mailto:' + email"><i class="fa-regular fa-phone"></i>{{ phone }}</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="tp-footer-2-menu-area p-relative">
            <div class="row align-items-center">
               <div class="col-lg-2 col-md-2">
                  <div class="tp-footer-2-logo">
                     <img :src="footer_logo" alt="">
                  </div>
               </div>
               <div class="col-lg-8 col-md-10">
                  <div class="tp-footer-2-menu">
                     <ul>
                        <li v-for="(menu, i) in footer_nav" :key="i"><router-link :to="menu.link">{{ menu.title }}</router-link></li>
                     </ul>
                  </div>
               </div>
               <div class="col-lg-2 col-md-6">
                  <div class="tp-footer-2-call d-flex justify-content-lg-end">
                  <div class="ddf">
                     <p>Phone:</p>
                     <span><a :href="'tel:' + mobile">{{ mobile }}</a></span>
                  </div>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </div>
   </footer>
</template>


