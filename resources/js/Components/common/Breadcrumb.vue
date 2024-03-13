
<script setup>
const breadcrumb_content = {
  bg_img: require("@/assets/img/breadcrumb/breadcrumb-bg-1.jpg"), 
  title_img: require("@/assets/img/breadcrumb/titile.svg"),
}

defineProps({
  title: {
    type: String,  
    default: "technix title",
  },
  page_title: {
    type: String,
    default: "technix page title",
  }, 
})
</script>

<template>
  <section class="breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1"
    :style="{ 'background-image': 'url(' + bg_img + ')' }">
    <div class="breadcrumb__bg-overlay m-img"></div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-10">
          <div class="breadcrumb__content text-center">
            <h3 class="breadcrumb__title">
              {{ title }}
              <img :src="title_img" alt="Title Image" />
            </h3>
            <div class="breadcrumb__list breadcrumb__list-translate">
              <span> <router-link to="/">Home</router-link> </span>
              <span class="dvdr"><i class="fa-regular fa-angle-right"></i></span>
              <span>pages</span>
              <span class="dvdr"> <i class="fa-regular fa-angle-right"></i> </span>
              <span>{{ page_title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


