
<script setup>
import { reactive } from "vue";
import CountUp from 'vue-countup-v3'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import HeroUnderLine from "@/svg/HeroUnderLine.vue"; 

import qoute from "@/assets/img/hero/quot.png";
import shape_5 from "@/assets/img/hero/shape-5.png";

import slider_shape_1 from "@/assets/img/hero/shape-1.png";
import slider_shape_2 from "@/assets/img/hero/shape-2.png";
import slider_shape_3 from "@/assets/img/hero/shape-3.png";
import slider_shape_4 from "@/assets/img/hero/shape-4.png";
import slider_shape_5 from "@/assets/img/hero/shape-7.png"; 
// shape data 
const shape_data = reactive([
	{ id: 1, cls: "shape-1", img: slider_shape_1 },
	{ id: 2, cls: "shape-2", img: slider_shape_2 },
	{ id: 3, cls: "shape-3", img: slider_shape_3 },
	{ id: 4, cls: "shape-4", img: slider_shape_4 },
	{ id: 5, cls: "shape-7", img: slider_shape_5 },
])
// slider data 
const sliderData = reactive([
	{
		id: 1,
		bg_img: "@/assets/img/hero/hero-2.jpg",
		sub_title_1: "best",
		sub_title_2: "it solutions",
		hero_title_1: "platform of",
		hero_title_2: "Tech",
		hero_support: "support",
	},
	{
		id: 2,
		bg_img: "@/assets/img/hero/hero-1.jpg",
		sub_title_1: "best",
		sub_title_2: "it solutions",
		hero_title_1: "IT service & ",
		hero_title_2: "Tech",
		hero_support: "Bundles",
	},
	{
		id: 3,
		bg_img: "@/assets/img/hero/hero-3.jpg",
		sub_title_1: "best",
		sub_title_2: "it solutions",
		hero_title_1: "platform of",
		hero_title_2: "Tech",
		hero_support: "Solution",
	},
]);


 // video popup
import VideoModal from "../../common/VideoModal.vue";
import {useVideoModal} from '../../../composables/useVideoModal';
const {playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/ddvKoj_CWl8';



</script>



<template>
	<section class="tp-hero-area tp-hero-space pb-95">
		<div class="tp-hero-wrapper p-relative">
			<div class="hero-active-1 swiper-container">
				<swiper 
				:loop="true"  
				:slides-per-view="1" 
				:modules="[EffectFade, Navigation, Autoplay]" 
				effect="fade"   
				:autoplay="{
					delay: 4000,
					disableOnInteraction: false,
				}"
				:navigation="{nextEl: '.hero-button-next-1', prevEl:'.hero-button-prev-1'}" 
				>

				<swiper-slide v-for="(item, i) in sliderData" :key="i">
						<div class="tp-hero-inner-1">
							<div class="container">
								<div class="tp-hero-shape">
									<img v-for="(shape, index) in shape_data" :key="index" :class="shape.cls"
										:src="shape.img" alt="image-title-here">
								</div>
								<div class="tp-hero-1">
									<div class="tp-hero-bg tp-hero-overlay p-relative" :style="{ backgroundImage: `url('${item.bg_img}')` }"></div>
									<div class="row">
										<div class="col-lg-7">
											<div class="tp-hero-content p-relative">
												<div class="tp-hero-title-wrapper">
													<span class="tp-section-title__pre p-relative">
														{{ item.sub_title_1 }} <span class="title-pre-color">{{ item.sub_title_2 }}</span>
														<TitleUnderIcon /> 
													</span>
													<h3 class="tp-hero-title">{{ item.hero_title_1 }} <HeroUnderLine />															
														<span class="title-color">{{ item.hero_title_2 }}</span> <br> <span
															class="title-text-transparent">{{ item.hero_support }}</span>
													</h3>
													<div class="tp-hero-btn">
														<router-link class="tp-btn" to="/about">Learn More 
															<i class="fa-regular fa-arrow-right-long"></i>
															</router-link>
													</div>
												</div>
												<div class="tp-hero-shape-animation">
													<span></span>
												</div>
											</div>
										</div>
										<div class="col-lg-5">
											<div class="tp-hero-play-btn" style="cursor: pointer;">
												<button class="popup-video" @click.prevent="playVideo(videoUrl)">
													<i class="fa-sharp fa-solid fa-play"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				</swiper-slide>

					<div class="tp-hero-nav d-none d-xxl-block">
						<button type="button" class="hero-button-prev-1 tp-btn-hover-clear alt-color"><i
								class="fa-regular fa-arrow-left"></i>
							<b></b>
						</button>
						<button type="button" class="hero-button-next-1 tp-btn-hover-clear alt-color"><i
								class="fa-regular fa-arrow-right"></i>
							<b></b>
						</button>
					</div>

				</swiper>

			</div>
			 
			<div class="tp-hero-bottom">
				<div class="tp-hero-experince">
					<span class="year">
						<count-up end-val="13" duration="2.5" class="d-inline"></count-up>
						<br>
						<i class="experince">
							Years of Experince
						</i>
					</span>
				</div>
			</div>
			<div class="tp-hero-service" :style="{ backgroundImage: 'url(/assets/img/hero/shape-6.png)' }">
				<div class="tp-hero-service-shape">
					<img :src="shape_5" alt="image-title-here">
				</div>
				<p>Our company provides a full range of <span>services</span> for the cons <br>
					private houses and cottages since 19</p>
				<div class="tp-hero-service-quote">
					<img :src="qoute" alt="image-title-here">
				</div>
			</div>
		</div>
	</section>

	<video-modal ref="video_modal" :video-url="videoUrl" />


</template>
