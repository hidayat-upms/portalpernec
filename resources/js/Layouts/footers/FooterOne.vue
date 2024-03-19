

<script setup>
// import bg_img_1 from "@/assets/img/footer/footer-bg.jpg";
// import bg_img_2 from "@/assets/img/footer/footer-top-bg.png";
// import headphone from "@/assets/img/footer/headphone.png";
// import footer_log from "@/assets/img/logo/footer-logo.png";
// import user from "@/assets/img/footer/user.png";
 
// import SocailLinks from "@/Components/common/SocailLinks.vue";
// import FooterCopyright from "@/Components/common/FooterCopyright.vue";
// import EmailAeroplan from "@/svg/EmailAeroplan.vue";


// const footer_content = { 
//     contact_us: " Contact us at <span>@themepure.com </span>",
//     mail: "@themepure.gmail.com",
//     contact_text: "PERFECT SOLUTION From  It Advisor",
//     phone: "92 666 888 0000",
//     info: "The world's first and largest digital market for crypto collectibles and non-fungible (NFTs). Buy",
//     map: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
//     address: "86 Road Broklyn Street, 600 <br /> New York, USA",
//     mail_2: "needhelp@company.com", 
//     service_links: [
//         "Parking permission",
//         "Fire Service Noc",
//         "Report a Parking Violation",
//         "Residential Parking",
//         "Vendor Registration",
//         "City Board Applications",
//     ]
// }
// const {contact_us, mail, contact_text, phone, info, map, address, mail_2, service_links} = footer_content

</script>


<template>
	<!-- <footer class="tp-footer-area p-relative">
		<div class="tp-footer-bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
		<div class="tp-footer-top-shape" :style="{ backgroundImage: `url(${bg_img_2})`}"></div>
		<div class="container container-large">
			<div class="row">
				<div class="col-lg-12">
					<div class="tp-footer-top-area">
						<div class="row align-items-center">
							<div class="col-lg-6">
								<div class="tp-footer-top-contact">
									<a :href="'mailto:' + mail" v-html="contact_us"> </a>
								</div>
							</div>
							<div class="col-lg-6">
								<div class="tp-footer-top-right d-flex justify-content-start justify-content-lg-end">
									<div class="tp-footer-top-right-headphone">
										<img :src="headphone" alt="image-title-here">
									</div>
									<div class="tp-footer-top-right-content">
										<p>{{ contact_text }}</p>
										<a :href="'tel:' + phone">{{ phone }}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tp-footer-main-area">
				<div class="row">
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-col-1">
							<div class="tp-footer-logo">
								<router-link to="/"> 
									<img :src="footer_log" alt="image-title-here">
								</router-link>
							</div>
							<div class="tp-footer-widget-content">
								<div class="tp-footer-info">
									<p>{{ info }}</p>
									<div class="tp-footer-main-location">
										<a :href="map"> <i class="fa-sharp fa-light fa-location-dot"></i> <span v-html="address"></span> </a>
									</div>
									<div class="tp-footer-main-mail">
										<a :href="'mailto:'+ mail_2"><i class="fa-light fa-message-dots"></i>{{ mail_2 }} <br>{{ phone }}</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-col-2">
							<h3 class="tp-footer-widget-title">Services Req</h3>
							<div class="tp-footer-widget-content">
								<ul>
									<li v-for="(item, i) in service_links" :key="i"> 
										<a href="#">{{ item }}</a>										
									</li>		 
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-col-3">
							<h3 class="tp-footer-widget-title">Contact Info</h3>
							<div class="tp-footer-widget-content">
								<div class="tp-footer-author d-flex">
									<div class="tp-footer-author-thumb">
										<img :src="user" alt="image-title-here">
									</div>
									<div class="tp-footer-author-content">
										<span>Chat With Expert <br> Active Now</span>
									</div>
								</div>
								<ul>
									<li><a href="#">Parking permission</a></li>
									<li><a href="#">Fire Service Noc</a></li>
									<li><a href="#">Report a Parking Violation</a></li> 
								</ul>
							</div>
						</div>
					</div>
					<div class="col-xl-3 col-lg-5 col-md-6">
						<div class="tp-footer-widget tp-footer-col-4">
							<h3 class="tp-footer-widget-title">Newsletter</h3>
							<div class="tp-footer-from">
								<div class="tp-footer-text-email p-relative">
									<input type="text" placeholder="Enter Email Address">
									<span>
										<EmailAeroplan />										
									</span>
								</div>

								<div class="tp-footer-form-check">
									<input class="form-check-input" id="flexCheckChecked" type="checkbox">
									<label class="form-check-label" for="flexCheckChecked"> I agree to all your terms and policies</label>
								</div>
								 
								<div class="tp-footer-widget-social">  
									<SocailLinks /> 
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tp-footer-copyright-area p-relative">
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner">
							<p><FooterCopyright /></p> 
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner text-lg-end">
							<a href="#">Terms and conditions</a>
							<a class="ml-50" href="#"> Privacy policy</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer> -->
</template>


