
<script setup> 

import AboutTitleUnderLineIcon from "@/svg/AboutTitleUnderLineIcon.vue";
import EmailIcon from "@/svg/EmailIcon.vue";


// shape import here
import cta_shape_1 from "@/assets/img/cta/img.png";
import cta_shape_2 from "@/assets/img/cta/img-2.png";
import cta_shape_3 from "@/assets/img/cta/bg.png";

import cta_shape from "@/assets/img/cta/bg-shape.png";

 
const cta_contact = { 
 phone: "+1 0208 446 4695",
 email: "themepure.co.uk",
 sub_title_1: 'feature <span class="title-pre-color">IT Solutions</span>',
 title: "We're Ready to <span class='title-color'>Growth</span> IT Business"
} 
const {phone, email, sub_title_1, title} = cta_contact

</script>

<template>
  <section class="tp-cta-2-area p-relative pt-200 pb-90" :style="{ backgroundImage: `url(${cta_shape})` }">
    <div class="tp-cta-2-shape">
        <img class="shape-1" :src="cta_shape_1" alt="image-title-here">
        <img class="shape-3" :src="cta_shape_3" alt="image-title-here">
    </div>
    <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-4 col-lg-6">
              <div class="tp-cta-2-content text-center">
                <div class="tp-cta-2-content-icon">
                    <span>
                      <EmailIcon />
                      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M64.766 50.5061L60.9908 39.5192C62.8106 35.7992 63.7722 31.6621 63.7787 27.4994C63.7899 20.2614 60.9896 13.4177 55.8934 8.22912C50.7962 3.03952 44.004 0.11819 36.7676 0.00355138C29.264 -0.115023 22.211 2.73914 16.9086 8.04148C11.7956 13.1543 8.95975 19.8946 8.86999 27.0974C3.83071 30.8916 0.856317 36.807 0.866092 43.1253C0.870789 46.0821 1.53628 49.0212 2.79731 51.6789L0.196921 59.2464C-0.250082 60.5473 0.0764421 61.9597 1.04916 62.9325C1.73369 63.6171 2.6362 63.9816 3.56436 63.9816C3.95487 63.9816 4.34995 63.9171 4.73525 63.7847L12.3028 61.1843C14.9606 62.4453 17.8997 63.1108 20.8564 63.1155C20.8671 63.1155 20.8772 63.1155 20.8879 63.1155C27.3003 63.1153 33.2608 60.0642 37.0411 54.9014C40.975 54.7978 44.8672 53.8455 48.386 52.1241L59.3731 55.8995C59.8308 56.0568 60.3003 56.1335 60.7643 56.1335C61.8673 56.1335 62.9398 55.7003 63.7535 54.8865C64.9092 53.7306 65.2972 52.0522 64.766 50.5061ZM20.8877 59.2465C20.8794 59.2465 20.8706 59.2465 20.8624 59.2465C18.2454 59.2426 15.6465 58.5974 13.3473 57.3809C12.8745 57.1309 12.3194 57.0876 11.8139 57.2613L4.05414 59.9277L6.72055 52.1681C6.89422 51.6624 6.85105 51.1074 6.60096 50.6347C5.38449 48.3354 4.73931 45.7366 4.73525 43.1195C4.72878 38.9098 6.36635 34.9198 9.23003 31.9321C10.1654 37.6343 12.8831 42.8889 17.0957 47.0266C21.2771 51.1337 26.5333 53.7486 32.2045 54.6035C29.21 57.5551 25.1733 59.2465 20.8877 59.2465ZM61.0174 52.1507C60.9073 52.2607 60.7768 52.2907 60.63 52.2402L48.868 48.1985C48.6638 48.1283 48.4513 48.0935 48.2395 48.0935C47.9273 48.0935 47.6163 48.169 47.3348 48.3181C43.9765 50.0947 40.1816 51.0369 36.3601 51.0428C36.3475 51.0428 36.3361 51.0428 36.3235 51.0428C23.5186 51.0428 12.9418 40.641 12.7389 27.8391C12.6367 21.3918 15.0892 15.3324 19.6444 10.7772C24.1996 6.22198 30.26 3.77039 36.7064 3.87195C49.5206 4.0752 59.9295 14.6716 59.9097 27.4933C59.9037 31.3148 58.9616 35.1099 57.1851 38.4679C56.935 38.9405 56.8919 39.4956 57.0656 40.0012L61.1071 51.7632C61.1575 51.9105 61.1273 52.0409 61.0174 52.1507Z" fill="currentColor"/>
                      </svg>                                 
                    </span>
                </div>
                <div class="tp-cta-2-content-inner">
                    <h3 class="cta-title"><a :href="'tel:' + phone">{{ phone }}</a></h3>
                    <a :href="'mailto:' + email">{{ email }}</a>
                </div>
              </div>
          </div>
          <div class="col-xl-6 col-lg-6">
              <div class="tp-cta-2-title-wrapper">
                <span class="tp-section-title__pre">
                  <span v-html="sub_title_1"></span> 
                    <AboutTitleUnderLineIcon /> 
                </span>
                <h3 class="tp-section-title"> <span v-html="title"></span> </h3>
                <div class="tp-cta-2-btn">
                    <router-link class="tp-btn" to="/contact">Get a Free Quatre</router-link>
                </div>
              </div>
          </div>
          <div class="col-xl-2 "></div>
        </div>
    </div>
  </section>
</template>

