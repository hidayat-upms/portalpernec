
<template>
	<form id="contact-form" @submit.prevent>
		<div class="row tp-gx-10">
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input name="name" type="text" placeholder="Your Name*">
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input name="email" type="email" placeholder="Email Address*">
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input name="text" type="text" placeholder="Service Type">
				</div>
			</div>
			<div class="col-md-6">
				<div class="tp-contact-input">
					<input name="text" type="text" placeholder="Phone Number">
				</div>
			</div>
			<div class="col-md-12">
				<div class="tp-contact-input">
					<textarea name="message" placeholder="Enter Your Message here"></textarea>
				</div>
			</div>
			<div class="tp-contact-btn mt-10">
				<button type="submit" class="tp-btn">Send Message</button>
			</div>
		</div>
	</form>
</template>

<script setup>

</script>
 