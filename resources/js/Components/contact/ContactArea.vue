
<script setup>
import ContactForm from "../forms/ContactForm.vue";
import EmailContactIcon from "../../svg/EmailContactIcon.vue";
import PhoneContactIcon from "../../svg/PhoneContactIcon.vue";

const contact_area_content = {
	title: 'Contact <span class="title-color">With us</span>',
	info: 'Email, call, or complete the form to learn how Kion can <br> solve your cloud management and governance cha.',
	email: 'marketing@pernec.com.my',
	phone: '+1 9266688000',
	office_data: [
		{
			id: 1, 
			title: 'Office Location',
			location: '4517 Washington Ave. Manch ester, Kentucky 39495',
		},
		{
			id: 2, 
			title: 'Office Location',
			location: '4520 Washington Ave. Manch ester, Kentucky 39420',
		},
	], 
	contact_title: 'Contact Us',
	contact_info: 'Your email address will not be published. Required fields <br> are marked *',

}
const {title, info, email, phone, office_data, contact_title, contact_info} = contact_area_content



</script>

<template>
	<section class="tp-contact-area pt-120 pb-90">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="tp-contact-wrapper">
						<div class="tp-contact-title-wrapper">
							<h3 class="tp-contact-title" v-html="title"></h3>
							<p v-html="info"></p>
						</div>
						<div class="tp-contact-content">
							<div class="tp-contact-content-mail d-flex align-items-center">
								<div class="tp-contact-content-mail-icon">
									<span>
										<EmailContactIcon /> 
									</span>
								</div>
								<h3 class="tp-contact-item-title"><router-link :to="'mailto:'+ email">{{ email}}</router-link></h3>
							</div>
							<div class="tp-contact-content-phone d-flex align-items-center">
								<div class="tp-contact-content-phone-icon">
									<span>
										<PhoneContactIcon />
									</span>
								</div>
								<h3 class="tp-contact-item-title"><a href="'tel:' + phone">{{ phone }}</a></h3>
							</div>
							<div class="tp-contact-location-wrapper d-flex">
								<div v-for="(item, i) in office_data" :key="i" class="tp-contact-location">
									<h3 class="tp-contact-location-title">{{ item.title }} <i class="fa-regular fa-arrow-down"></i></h3>
									<p>{{ item.location }}</p>
								</div> 
							</div>
						</div>
					</div>
				</div>
				<div class="col-lg-6">
					<div class="tp-contact-form">
						<h3 class="tp-contact-form-title">{{ contact_title }}</h3>
						<p v-html="contact_info"></p>
						<ContactForm />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>



