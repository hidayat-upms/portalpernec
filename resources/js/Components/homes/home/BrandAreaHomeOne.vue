
<script setup> 
import { reactive, ref } from "vue";
import brand_shape from "@/assets/img/brand/shape-1.png";
import brand_img from "@/assets/img/brand/img-1.png";
import img2 from "@/assets/img/brand/img-2.png"
import img3 from "@/assets/img/brand/img-3.png"
import img4 from "@/assets/img/brand/img-4.png"
import img5 from "@/assets/img/brand/img-5.png"
import img6 from "@/assets/img/brand/img-6.png"
import img7 from "@/assets/img/brand/img-7.png" 
import img8 from "@/assets/img/brand/img-8.png"
import img9 from "@/assets/img/brand/img-9.png"
import shape3 from "@/assets/img/brand/shape-3.png"

// shape data 
const shape_img = reactive([
    { id: "shape-1 mousemove__image", img:img2 },
    { id: "shape-2 mousemove__image", img:img3 },
    { id: "shape-3 mousemove__image", img:img4 },
    { id: "shape-4 mousemove__image", img:img5 },
    { id: "shape-5 mousemove__image", img:img6 },
    { id: "shape-6 mousemove__image", img:img7 },
    { id: "shape-7 mousemove__image", img:img8 },
    { id: "shape-8 mousemove__image", img:img9},
    { id: "shape-9", img:shape3 },
])

const mouseRef = ref(null);
const handleMouseMove = (e) => {
  const r = mouseRef.value.getBoundingClientRect();
  mouseRef.value.style.setProperty(
    '--x',
    e.clientX - (r.left + Math.floor(r.width / 2))
  );
  mouseRef.value.style.setProperty(
    '--y',
    e.clientY - (r.top + Math.floor(r.height / 2))
  );
};

const handleMouseLeave = () => {
  mouseRef.value.style.setProperty('--x', 1);
  mouseRef.value.style.setProperty('--y', 1);
};

</script>

<template> 
    <div 
    id="mousemove" 
    ref="mouseRef" 
    @mousemove="handleMouseMove" 
    @mouseleave="handleMouseLeave" 
    class="tp-brand-area pt-160 p-relative">
    <div class="container container-large">
      <div class="tp-brand-shape">
        <img class="bg-shape" :src="brand_shape" alt="image-title-here" />
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-brand-wrapper">
            <div class="tp-brand-shape">
              <img
                v-for="(item, i) in shape_img"
                :key="i"
                :class="item.id"
                :src="item.img"
                alt="theme-pure"
              />
            </div>
            <div class="tp-brand-thumb text-center fadeUp">
              <img :src="brand_img" alt="image-title-here" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

