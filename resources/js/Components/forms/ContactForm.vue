
<template>
	<form id="contact-form" @submit.prevent="submitForm">
	  <div class="row tp-gx-10">
		<div class="col-md-6">
		  <div class="tp-contact-input">
			<input v-model="formData.name" type="text" placeholder="Your Name*">
		  </div>
		</div>
		<div class="col-md-6">
		  <div class="tp-contact-input">
			<input v-model="formData.email" type="email" placeholder="Email Address*">
		  </div>
		</div>
		<div class="col-md-6">
		  <div class="tp-contact-input">
			<select v-model="formData.service_type" required class="custom-dropdown">
				<option value="">Select Service Type</option>
				<option value="IT">IT Essentials</option>
				<option value="ICT">ICT Productivity</option>
				<option value="DTE">Digital Transformation Enabler</option>
				<option value="CSS">Cyber Security Solution</option>
				<option value="Tele">Telecommunication</option>
				<option value="PS">Public Safety</option>
				<option value="P&U">Power & Utilities</option>
				<option value="DTS">Defence Tactical Solutions</option>
				<option value="DOS">Deployment Operation Services</option>
			</select>
		  </div>
		</div>
		<div class="col-md-6">
		  <div class="tp-contact-input">
			<input v-model="formData.phone_number" type="text" placeholder="Phone Number" pattern="[0-9]*">
		  </div>
		</div>
		<div class="col-md-12">
		  <div class="tp-contact-input">
			<textarea v-model="formData.message" placeholder="Enter Your Message here"></textarea>
		  </div>
		</div>
		<div class="tp-contact-btn mt-10">
		  <button type="submit" class="tp-btn">Send Message</button>
		</div>
	  </div>
	</form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const formData = ref({
	name: '',
	email: '',
	service_type: '',
	phone_number: '',
	message: ''
  });
  
  const submitForm = async () => {
	try {
	  const response = await fetch('https://api.web3forms.com/submit', {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({
		  apikey: 'cba1687f-8553-4a44-a1e3-59e4ea410ef7',
		  ...formData.value
		})
	  });
  
	  const data = await response.json();
	  if (data.success) {
		// Reset form fields
		formData.value = {
		  name: '',
		  email: '',
		  service_type: '',
		  phone_number: '',
		  message: ''
		};
		alert('Form submitted successfully!');
	  } else {
		alert('Form submission failed. Please try again later.');
	  }
	} catch (error) {
	  console.error('Error submitting form:', error);
	  alert('An error occurred while submitting the form. Please try again later.');
	}
  };
  </script>
  
<style scoped>
/* Add custom styles for the dropdown button */
.custom-dropdown {
  width: 100%; /* Set width to fill the container */
  height: 61px; /* Adjust height as needed */
  padding: 8px; /* Add padding to align with other fields */
  font-size: 16px; /* Adjust font size */
  border: 1px solid #ccc; /* Add border for visual clarity */
  border-radius: 4px; /* Add border radius for rounded corners */
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}
</style>