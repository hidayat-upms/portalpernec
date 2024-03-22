<script setup>
import FooterCopyright from "@/Components/common/FooterCopyright.vue";
import SocailLinkTwo from "@/Components/common/SocailLinkTwo.vue";

import FooterLogo from "@/assets/img/logo/PernecLogo.gif";

import footer from "@/assets/img/footer/footer-bg.jpg"

const footer_content = {
	footer_info: " The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy",
	google_map: "https://www.google.com/maps/search/86+Road+Broklyn+Street,+600+New+York,+USA/@40.6897806,-74.0278086,12z/data=!3m1!4b1",
	address: "86 Road Broklyn Street, 600 <br /> New York, USA",
	email: "needhelp@company.com",
	phone: "92 666 888 0000",
	service_title: "Services Required",
	links: [
		"Parking permission",
		"Fire Service Noc",
		"Report a Parking Violation",
		"Residential Parking",
		"Vendor Registration",
		"City Board Applications",
	],
	news_letter: "Subscribe to our newsletter",
	agree: "I agree to the terms and conditions",
	trams: "Terms & Conditions",
	policy: "Privacy Policy",
}
const { footer_info, google_map, address, email, phone, service_title, links, news_letter, agree, trams, policy } = footer_content


</script>

<template>
	<footer class="tp-footer-3-area p-relative">
		<div class="tp-footer-bg" :style="{ backgroundImage: `url(${footer})` }"></div>
		<div class="container">
			<div class="tp-footer-3-main-area">
				<div class="row">
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-1">
							<div class="tp-footer-logo">
								<router-link to="/"> <img :src="FooterLogo" alt="image-title-here"></router-link>
							</div>
							<div class="tp-footer-widget-content">
								<div class="tp-footer-info">
									<p class="p">{{ footer_info }}</p>
									<div class="tp-footer-main-location">
										<a :href="google_map" target="_blank">
											<i class="fa-sharp fa-light fa-location-dot"></i> <span
												v-html="address"></span><br> {{ phone }}
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-3">
							<h3 class="tp-footer-widget-title">{{ enquiry }}</h3>
							<div class="tp-footer-main-mail">
								<a href="marketing@pernec.com.my"><i class="fa-light fa-message-dots"></i>
									{{ email_p }}</a>
								<a href="marketing@cyseca.com.my"><i class="fa-light fa-message-dots"></i>
									{{ email_c }}</a>
							</div>
						</div>
					</div>
					<div class="col-lg-4 col-md-6">
						<div class="tp-footer-widget tp-footer-3-col-3">
							<h3 class="tp-footer-widget-title">{{ news_letter }}</h3>
							<div class="tp-footer-from">
								<div class="tp-footer-text-email p-relative">
									<input type="text" placeholder="Enter Email Address">
									<span>
										<svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path
												d="M3.49316 13.7164C3.63379 13.8458 3.84046 13.8759 4.01071 13.7908L11.4654 10.1149L5.90522 14.0488C5.77478 14.1412 5.70122 14.2939 5.71058 14.4538L5.90157 17.7137C5.93936 18.3587 6.06262 18.9045 6.25825 19.2917C6.59438 19.9576 7.06242 20.0322 7.31139 20.0176C7.61259 20 7.90192 19.8421 8.17074 19.5482L9.20637 18.4157L10.8851 19.4378C11.3043 19.6933 11.7985 19.8118 12.3141 19.7816C13.3786 19.7192 14.4435 19.0328 15.0945 17.9905L24.1844 3.42754C24.8108 2.42378 24.7071 1.81746 24.5101 1.48593C24.38 1.26641 24.0445 0.904988 23.2627 0.950786C23.0031 0.965999 22.7113 1.02528 22.3941 1.12637L1.78045 7.70011C0.860734 7.99324 0.267482 8.54997 0.108773 9.26713C-0.0494808 9.98477 0.254344 10.7393 0.964829 11.3921L3.49316 13.7164ZM1.01287 9.46688C1.09713 9.08504 1.46951 8.7707 2.06157 8.58208L22.6756 2.00782C23.23 1.83163 23.6608 1.86665 23.7149 1.95852C23.7648 2.04228 23.7632 2.35484 23.3995 2.93758L14.3102 17.5006C13.8156 18.2927 13.0301 18.8124 12.2603 18.8575C11.9286 18.877 11.6283 18.8065 11.3672 18.6474L9.36306 17.4269C9.27991 17.3767 9.18683 17.3548 9.09535 17.3601C8.97847 17.367 8.86461 17.4181 8.781 17.5097L7.48832 18.9234C7.33843 19.087 7.25818 19.0935 7.2577 19.094C7.1674 19.0715 6.88551 18.6754 6.82599 17.6595L6.65003 14.656L16.785 7.48526C16.9817 7.34623 17.0388 7.07823 16.9149 6.87079C16.7915 6.66195 16.5265 6.58619 16.3129 6.69237L3.88618 12.8204L1.59108 10.7106C1.13392 10.2906 0.928189 9.84874 1.01287 9.46688Z"
												fill="#05DAC3"></path>
										</svg>
									</span>
								</div>
								<div class="tp-footer-form-check">
									<input class="form-check-input" id="flexCheckChecked" type="checkbox">
									<label class="form-check-label" htmlFor="flexCheckChecked">
										{{ agree }}
									</label>
								</div>
								<div class="tp-footer-widget-social">
									<SocailLinkTwo /> 
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</div>
			<div class="tp-footer-copyright-area p-relative">
				<div class="row">
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner">
							<p>
								<FooterCopyright />
							</p>
						</div>
					</div>
					<div class="col-md-12 col-lg-6">
						<div class="tp-footer-copyright-inner text-lg-end">
							<a href="#">{{ terms }}</a>
							<a class="ml-50" to="#">{{ policy }}</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>
