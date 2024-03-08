
<script setup>
import { ref, onMounted } from 'vue';
import CountUp from 'vue-countup-v3' 
import {Swiper, SwiperSlide} from 'swiper/vue'

import TitleUnderIcon from '@/svg/TitleUnderIcon.vue';
import AboutLineIcon from '@/svg/AboutLineIcon.vue';
import RightSymble from '@/svg/RightSymble.vue';

//  shapes 
import shape_1 from "@/assets/img/fun-fact/shape-1.png";
import shape_2 from "@/assets/img/fun-fact/shape-2.png";
import shape_3 from "@/assets/img/fun-fact/shape-3.png";
import shape_4 from "@/assets/img/fun-fact/shape-4.png";
import shadow_img from "@/assets/img/fun-fact/shadow.png";

import world_img from "@/assets/img/fun-fact/world.png";


// import img here 
import service_img_1 from "@/assets/img/services/services-1.jpg";
import service_img_2 from "@/assets/img/services/services-2.jpg";
import service_img_3 from "@/assets/img/services/services-3.jpg";
import service_img_4 from "@/assets/img/services/services-4.jpg";
// service data
const service_data = [
	{
		id: 1,
		alphabet: "P",
		title: "Product <br/> development",
		img: service_img_1,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 2,
		alphabet: "V",
		title: "Voice Over <br/> Internet Protocol",
		img: service_img_2,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 3,
		alphabet: "C",
		title: "Clouds <br/> Backup Services",
		img: service_img_3,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 4,
		alphabet: "M",
		title: "Mobile and <br/> Remote Networking",
		img: service_img_4,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 5,
		alphabet: "D",
		title: "Data Backup <br/> and Restoration",
		img: service_img_2,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	// update for swiper
	{
		id: 1,
		alphabet: "P",
		title: "Product <br/> development",
		img: service_img_1,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 2,
		alphabet: "V",
		title: "Voice Over <br/> Internet Protocol",
		img: service_img_2,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 3,
		alphabet: "C",
		title: "Clouds <br/> Backup Services",
		img: service_img_3,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 4,
		alphabet: "M",
		title: "Mobile and <br/> Remote Networking",
		img: service_img_4,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
	{
		id: 5,
		alphabet: "D",
		title: "Data Backup <br/> and Restoration",
		img: service_img_2,
		description: "As far as we might be concerned making an extraordinary As the complexity as",
	},
]
// counter data
const counter_content = [
	{
		id: 1,
		count: 10,
		info: "Experience",
		cls: "",
		cls_2: "purecounter",
		icon: "+",
	},
	{
		id: 2,
		count: 255,
		info: "square area",
		cls: "purecounter",
		cls_2: "",
		icon: "",
	},
	{
		id: 3,
		count: 310,
		info: "square area",
		cls: "purecounter",
		cls_2: "",
		icon: "",
	},
]

const reload = ref(null);

const setReloadClassName = () => {
	reload.value = document.getElementById('reload');
	if (reload.value !== null) {
		window.addEventListener('scroll', scrollRotate);
	}
};
const scrollRotate = () => {
	if (reload.value !== null) {
		reload.value.style.transform = `rotate(${window.pageYOffset / 2}deg)`;
	}
};

onMounted(() => {
	setReloadClassName();
});

</script>


<template>
	<div class="tp-service-funfact-box">
		<!-- service area start -->
		<section class="tp-service-area pt-85 pb-50">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12">
						<div class="tp-service-title-wrapper text-center">
							<span class="tp-section-title__pre">
								service <span class="title-pre-color">IT Solutions</span>
								<TitleUnderIcon />
							</span>
							<h3 class="tp-section-title">All Professional <i>IT Solutions</i> & Services
								<span class="title-center-shape">
									<AboutLineIcon />  
								</span>
							</h3>
						</div>
					</div>
					<div class="tp-service-slider-wrapper">
						<div class="service-active">

							<swiper 
									:loop="true"
									:slides-per-view="5" 
									:space-between="20" 
                  :breakpoints="{
                    '@0.00': {
                      slidesPerView: 1,
                    },
                    '@0.50': {
                      slidesPerView: 1,
                    },
                    '@0.75': {
                      slidesPerView: 1,
                    },
                    '@1.00': {
                      slidesPerView: 2,
                    },
                    '@1.50': {
                      slidesPerView: 3,
                    },
                    '@2.00': {
                      slidesPerView: 5,
                    },
                    '@2.25': {
                      slidesPerView: 5,
                    },
                  }">
								<swiper-slide v-for="(item, i) in service_data" :key="i" class="carousel__item tp-service-wrapper p-relative mb-55 mx-2">
									<div class="">
										<div class="tp-service-designation">
											<p>{{ item.alphabet }}</p>
										</div>
										<h3 class="service-title" v-html="item.title"></h3>
										<div class="tp-service-icon">
											<img :src="item.img" alt="image-title-here">
										</div>
										<p class="hide-text">{{ item.description }}</p>
										<div class="tp-service-btn">
											<router-link to="/service-details">
												Read Out More <i class="fa-solid fa-arrow-up-right"></i>
											</router-link>
										</div>
									</div>
								</swiper-slide>
							</swiper> 
						</div>

					</div>
				</div>
				<div class="row">
					<div class="col-lg-12">
						<div class="tp-service-all-btn text-center fadeUp">
							<router-link class="tp-btn" to="/service-details">View all Services</router-link>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- service area end -->


		<!-- fun fact area start -->
		<section class="tp-fun-fact-area pt-80 pb-65 p-relative">
			<div class="container container-1400">
				<div class="tp-fun-fact-shape">
					<img class="shape-1" :src="shape_1" alt="image-shape-here">
					<img class="shape-2" :src="shape_2" alt="image-shape-here">
					<img class="shape-3" :src="shape_3" alt="image-shape-here">
					<img class="shape-4" :src="shape_4" alt="image-shape-here">
					<img class="shadow" :src="shadow_img" alt="shadow_img">
				</div>
				<div class="row">
					<div class="col-lg-2 col-md-4">
						<div class="tp-fun-fact-wrapper-box">

							<div class="tp-fun-fact-wrapper" v-for="(count_item, index) in counter_content" :key="index">
								<h3 class="counter-title" :class="count_item.cls">
									<span data-purecounter-duration="4" data-purecounter-end="10" class="purecounter">
										<count-up :end-val="count_item.count" class="d-inline"></count-up> 
									</span>{{ count_item.icon }}
								</h3>
								<p>{{ count_item.info }}</p>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-8">
						<div class="tp-fun-fact-thumb p-relative">
							<img id="reload" :src="world_img" alt="scroll">
						</div>
					</div>
					<div class="col-lg-6 col-md-12">
						<div class="tp-fun-fact-content">
							<div class="tp-fun-fact-title-wrapper">
								<span class="tp-section-title__pre">
									service <span class="title-pre-color">IT Solutions</span>
										<TitleUnderIcon />
								</span>
								<h3 class="tp-section-title">Tech Change The World
									<span class="title-left-shape">
										<AboutLineIcon />
									</span>
								</h3>
								<p>Our company provides a full range of services for the construction of <br> private houses
									and cottages since 19
								</p>
								<ul>
									<li><span> <RightSymble /></span>series of manual and semi-manual activities.</li>
									<li><span> <RightSymble /></span>Construction is different from other industries.</li>
								</ul>
								<div class="tp-fun-fact-btn">
									<router-link class="tp-btn" to="/service-details">Tell us How Can We Help</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- fun fact area end -->
	</div>
</template>

