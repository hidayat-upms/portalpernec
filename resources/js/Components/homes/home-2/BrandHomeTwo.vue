
<script setup>
import brand_img_1 from "@/assets/img/brand/home-2/client1.svg";
import brand_img_2 from "@/assets/img/brand/home-2/client2.svg";
import brand_img_3 from "@/assets/img/brand/home-2/client3.svg";
import brand_img_4 from "@/assets/img/brand/home-2/client4.svg";
import brand_img_5 from "@/assets/img/brand/home-2/client5.svg";
import shape_bg from "@/assets/img/brand/home-2/shape-bg.png";

</script>


  <template>
  <div class="tp-brand-2-area p-relative pt-120 pb-80">
    <div class="tp-brand-2-bg" :style="{ backgroundImage: `url(${shape_bg})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="tp-brand-2-item">
            <img class="shape-1" :src="brand_img_1" alt="image-title-here" />
            <img class="shape-2" :src="brand_img_2" alt="image-title-here" />
            <img class="shape-3" :src="brand_img_3" alt="image-title-here" />
            <img class="shape-4" :src="brand_img_4" alt="image-title-here" />
            <img class="shape-5" :src="brand_img_5" alt="image-title-here" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>





<style scoped>
.marquee-container {
  width: 100%; /* Set the width to the container's full width */
  overflow: hidden; /* Hide the overflowing content */
}

.tp-brand-2-item {
  display: inline-block; /* Display items inline */
  white-space: nowrap; /* Prevent items from wrapping */
  animation: marquee 20s linear infinite; /* Animation for the marquee effect */
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>


