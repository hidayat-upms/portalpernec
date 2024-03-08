
<script setup>
import { reactive, ref } from 'vue';
import { Carousel, Slide, } from 'vue3-carousel'; 
 

const slider_data = reactive([
  { id: 1, title: "Backup <span>Services</span>" },
  { id: 2, title: "Backup <span>Services</span>" },
  { id: 3, title: "Machine <span>Learning</span>" },
  { id: 4, title: "Programming <span>Learning</span>" },
  { id: 5, title: "website <span>Learning</span>" },
  { id: 6, title: "Graphics <span>Learning</span>" },
	// UPDATE 
	{ id: 7, title: "Backup <span>Services</span>" },
  { id: 8, title: "Backup <span>Services</span>" },
  { id: 9, title: "Machine <span>Learning</span>" },
  { id: 10, title: "Programming <span>Learning</span>" },
  { id: 11, title: "website <span>Learning</span>" },
  { id: 12, title: "Graphics <span>Learning</span>" },
])

 
import 'vue3-carousel/dist/carousel.css';

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
});

 

</script>

<template>
	<section class="tp-text-slider-area fix pt-100 pb-100">
		<div class="container-fluid gx-0">
			<div class="row gx-0">
				<div class="col-lg-12">
					<div class="tp-text-slider">
						<div class="tp-text-active"> 				  	

							<carousel items-to-show="3" :autoplay="10" :infinite='true' :transition="3000" 
							 :breakpoints="{
								0: {
									itemsToShow: 1,
								},
								576: {
									itemsToShow: 1,
								},
								768: {
									itemsToShow: 2,
								},
								992: {
									itemsToShow: 2,
								},
								1200: {
									itemsToShow: 3,
								}
							 }"
							 >
								<slide v-for="(item, i) in slider_data" :key="i" class="tp-text-item">
									<div class="tp-text-slider-wrapper">
										<div class="tp-text-slider-item d-flex align-items-center">
											<img src="@/assets/img/icon/icon-1.png" alt="image-title-here">
											<h3 class="text-title d-flex justify-content-center align-items-center" v-html="item.title"></h3> 
										</div>
									</div>
								</slide>
							</carousel>

						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>



