<script setup>
// import shape_img from "@/assets/img/blog/shaep-2.png"; 
// // about
// import blog_img_4 from "@/assets/img/blog/img-7.jpg";
// import blog_img_5 from "@/assets/img/blog/img-8.jpg";
// import blog_img_6 from "@/assets/img/blog/img-9.jpg";
 
// import blog_user from "@/assets/img/blog/user.png";
// import { inject } from "vue";
// // blog data
// const blog_data = [   
//     // for about 
//     {
//         id: 4, 
//         cls: "",
//         img: blog_img_4,
//         user: blog_user,
//         user_name: "Jamil",
//         category: "Business",
//         date: "02 Apr 2023",
//         comments: "Comments (03)",
//         title: "Providing solutions for Industrial <br /> men, and restoration.",
//     },
//     {
//         id: 5, 
//         cls: "active",
//         img: blog_img_5,
//         user: blog_user,
//         user_name: "Rasalina",
//         category: "Business",
//         date: "02 Apr 2023",
//         comments: "Comments (23)",
//         title: "Everything melancholy uncommonly but solicitude.",
//     },
//     {
//         id: 6, 
//         cls: "",
//         img: blog_img_6,
//         user: blog_user,
//         user_name: "Pranta",
//         category: "Business",
//         date: "02 Apr 2023",
//         comments: "Comments (15)",
//         title: "Discovery incommode earnestly commanded mentions.",
//     },    
// ]
// const propValue = inject('addClass');
// const emit = defineEmits(["handleAddClass"]);

</script>


<template>
   <!-- <section class="tp-blog-3-area p-relative fix" :class="propValue? 'pt-100 pb-90' : 'pt-120 pb-100'">
         <div class="tp-blog-3-shape">
            <img class="shape-1" :src="shape_img" alt="image-title-here">
            <img class="shape-2" :src="shape_img" alt="image-title-here">
         </div>
         <div class="container">
            <div class="row">
               <div class="col-xl-12">
                  <div class="tp-blog-3-title-wrapper text-center">
                     <span class="tp-section-title__pre">
                        blog <span class="title-pre-color">IT Solutions</span>
                        <svg width="123" height="8" viewBox="0 0 123 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M0.384401 7.82144C0.645399 4.52972 8.83029 8.38041 10.8974 7.67652C12.4321 7.1486 11.6386 7.03474 12.9749 6.19628C14.0816 4.61253 15.7519 3.89829 17.9756 4.06391C18.6125 4.48831 19.2284 4.93342 19.8444 5.38888C21.1076 6.09277 22.1621 6.51717 23.6028 6.13417C24.8973 5.79258 25.5237 4.79885 26.6095 4.18812C30.8481 1.80732 31.3701 2.90456 34.5855 4.58147C36.0993 5.36817 37.634 6.48612 39.461 6.08242C40.1604 5.92715 40.2127 5.67871 40.672 5.54415C42.1023 4.10531 43.9606 3.52564 46.2469 3.80512C47.0612 4.28129 47.8651 4.75745 48.669 5.25431C50.9866 6.22733 54.5049 6.23769 54.6615 3.08053C54.3065 3.22545 53.962 3.37037 53.6175 3.51529C55.622 5.75117 58.6078 6.59998 61.5205 5.5752C64.8091 4.41585 63.8277 3.02877 67.1685 4.35374C68.6614 4.94377 70.2587 5.14045 71.856 4.96447C73.6412 4.7678 75.1028 3.27721 76.6271 3.07018C79.0491 2.73894 81.3354 4.89201 84.2482 4.15707C85.3235 3.88793 86.9417 2.27313 87.7978 2.21102C88.6329 2.14891 89.9484 3.68091 90.8358 4.14672C93.3936 5.51309 96.5882 5.75117 99.3234 4.7471C101.902 3.80512 100.858 3.60845 103.124 4.30199C104.366 4.67464 105.253 5.34747 106.652 5.45099C109.628 5.65801 112.175 4.26058 113.678 1.77626C113.25 1.77626 112.822 1.77626 112.384 1.77626C114.722 5.49239 119.587 6.10312 122.771 3.05983C123.471 2.39734 122.406 1.34151 121.707 2.00399C119.316 4.29164 115.516 3.95004 113.678 1.03097C113.386 0.554807 112.687 0.544455 112.384 1.03097C110.223 4.62288 105.159 4.84026 102.549 1.7038C102.278 1.38291 101.777 1.46572 101.495 1.7038C97.6113 4.99553 91.8171 4.46761 88.6747 0.368483C88.4242 0.0372403 87.85 -0.190489 87.5159 0.223564C84.9685 3.37037 80.7717 3.86723 77.6606 1.10343C77.3787 0.854995 76.9507 0.823941 76.6584 1.10343C73.422 4.26058 68.6823 4.52972 65.1432 1.63134C64.83 1.37256 64.3706 1.38291 64.1409 1.75556C61.9799 5.40958 57.2297 5.74082 54.4631 2.65613C54.0873 2.24207 53.44 2.59402 53.4191 3.09088C53.2103 7.04509 45.6727 1.72451 43.8979 1.92118C40.4841 2.30418 40.2127 5.74082 35.7026 3.82583C33.4894 2.88386 31.8085 0.989563 29.1777 1.39326C26.9226 1.74521 25.9622 3.86723 23.9682 4.63323C20.4603 5.9789 19.2702 2.13856 16.2531 2.33524C11.2941 2.66648 14.1442 7.41774 6.43955 5.75117C4.22629 5.27501 -0.221114 3.93969 0.00856432 7.82144C0.0190042 8.05952 0.363521 8.05952 0.384401 7.82144Z" fill="currentColor"></path>
                        </svg>
                     </span>
                     <h3 class="tp-section-title">Best Digital <span class="title-color">Technology</span> <br> Agency For People</h3>
                  </div>
               </div>

               <div v-for="(item, i) in blog_data"  :key="i" class="col-xl-4 col-md-6">
                  <div class="tp-blog-3-wrapper mb-30">
                     <div class="tp-blog-3-thumb">
                        <router-link to="/blog-details">
                          <img :src="item.img" alt="image-title">
                        </router-link>
                        <div class="tp-blog-3-user">
                           <img :src="item.user" alt="image-title-here">
                           <p>By:Rasalina</p>
                        </div>
                     </div>
                     <div class="tp-blog-3-content">
                        <div class="tp-blog-date">
                           <span><i class="fa-light fa-calendar-days"></i>{{ item.date }}</span>
                           <span>-</span>
                           <span><i class="fa-sharp fa-solid fa-comments"></i>{{ item.comments }}</span>
                        </div>
                        <h3 class="tp-blog-3-title"><router-link to="/blog-details">  <span v-html="item.title"></span>
                        </router-link></h3>
                     </div>
                     <div class="tp-blog-3-btn d-flex justify-content-between">
                        <div class="read-more p-relative">
                           <router-link to="/blog-details">Read More <span><svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M16.1658 4.7457L4.64685 14.7646C4.31796 15.0507 3.88211 15.0938 3.67396 14.8608C3.46581 14.6278 3.5638 14.2066 3.89268 13.9205L15.4116 3.90159C15.7405 3.61553 16.1764 3.57245 16.3845 3.80542C16.5927 4.0384 16.4947 4.45964 16.1658 4.7457Z" fill="currentColor"/>
                                 <path d="M16.7227 9.69055C16.5861 9.80933 16.4034 9.87621 16.2062 9.86208C15.8118 9.83504 15.5102 9.49748 15.5324 9.10795L15.7964 4.49597L11.1258 4.17577C10.7314 4.14873 10.4297 3.81104 10.452 3.42164C10.4744 3.03214 10.8121 2.7384 11.2065 2.76543L16.5904 3.13466C16.9848 3.16169 17.2864 3.49926 17.2641 3.88865L16.9599 9.20509C16.9494 9.40129 16.8593 9.57176 16.7227 9.69055Z" fill="currentColor"/>
                                 </svg></span>
                           </router-link>
                        </div>
                        <div class="fvrt">
                           <span><i class="fa-light fa-heart"></i></span>
                        </div>
                     </div>
                  </div>
               </div> 

            </div>
         </div>
      </section> -->
</template>

 