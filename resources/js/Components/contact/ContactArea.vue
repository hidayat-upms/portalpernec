
<script setup>
import ContactForm from "../forms/ContactForm.vue";
import EmailContactIcon from "../../svg/EmailContactIcon.vue";
import PhoneContactIcon from "../../svg/PhoneContactIcon.vue";

const contact_area_content = {
	title: 'Contact <span class="title-color">With us</span>',
	info: 'Email, call, or complete the form to learn how Kion can <br> solve your cloud management and governance cha.',
	email_pernec: 'marketing@pernec.com.my',
	email_cyseca: 'marketing@cyseca.com.my',
	phone_tel: '603-42596000',
	phone_fax: '603-42596080',
	office_data: {
			id: 1, 
			title: 'Office Location',
			location: 'No. 21, Jalan Setiawangsa 8, Taman Setiawangsa, 54200, Kuala Lumpur',
		},
	contact_title: 'Contact Us',
	contact_info: 'Your email address will not be published. Required fields <br> are marked *',

}
const {title, info, email_pernec, email_cyseca, phone_tel, phone_fax, office_data, contact_title, contact_info} = contact_area_content



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
								<h3 class="tp-contact-item-title"><router-link :to="'mailto:'+ email_pernec">{{ email_pernec }}</router-link></h3>
							</div>
							<div class="tp-contact-content-phone d-flex align-items-center">
								<div class="tp-contact-content-phone-icon">
									<span>
										<PhoneContactIcon />
									</span>
								</div>
								<h3 class="tp-contact-item-title"><a href="'Tel:' + phone_tel">Tel: {{ phone_tel }}</a></h3>
							</div>
							<div class="tp-contact-location-wrapper d-flex">
								<div class="tp-contact-location">
									<h3 class="tp-contact-location-title">{{ office_data.title }} <i class="fa-regular fa-arrow-down"></i></h3>
									<p>{{ office_data.location }}</p>
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



