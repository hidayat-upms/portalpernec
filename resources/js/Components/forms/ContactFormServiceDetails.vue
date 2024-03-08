<script setup>

</script>


<template>
  <form id="contact-form" @submit.prevent>
    <div class="row tp-gx-10">
      <div class="col-md-6">
        <div class="tp-service-contact-input">
          <input name="name" type="text" placeholder="Fast Name">
        </div>
      </div>
      <div class="col-md-6">
        <div class="tp-service-contact-input">
          <input name="text" type="text" placeholder="Last Name">
        </div>
      </div>
      <div class="col-md-6">
        <div class="tp-service-contact-input">
          <input name="email" type="email" placeholder="Email">
        </div>
      </div>
      <div class="col-md-6">
        <div class="tp-service-contact-input">
          <input name="text" type="text" placeholder="Phone">
        </div>
      </div>
      <div class="col-md-12">
        <div class="tp-service-contact-input">
          <textarea name="message" placeholder="Enter Message"></textarea>
        </div>
      </div>
      <div class="tp-service-contact-btn mt-10">
        <button type="submit" class="tp-btn">Send Message</button>
      </div>
    </div>
  </form>
</template>

