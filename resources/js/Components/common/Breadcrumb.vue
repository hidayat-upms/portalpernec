
<script setup>
import bg1 from "@/assets/img/breadcrumb/breadcrumb-bg-1.jpg";
import line1 from "@/assets/img/breadcrumb/titile.svg";
const breadcrumb_content = {
  bg_img: bg1, 
  title_img: line1,
}
const { bg_img,  title_img } = breadcrumb_content
 
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
  <section className="breadcrumb__area breadcrumb-style pt-190 pb-210 p-relative z-index-1"
    :style="{ 'background-image': 'url(' + bg_img + ')' }">
    <div className="breadcrumb__bg-overlay m-img"></div>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="breadcrumb__content text-center">
            <h3 className="breadcrumb__title">
              {{ title }}
              <img :src="title_img" />
            </h3>
            <div className="breadcrumb__list breadcrumb__list-translate">
              <span> <router-link to="/">Home</router-link> </span>
              <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
              <span>pages</span>
              <span className="dvdr"> <i className="fa-regular fa-angle-right"></i> </span>
              <span>{{ page_title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



