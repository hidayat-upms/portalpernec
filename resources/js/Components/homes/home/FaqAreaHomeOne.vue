
<script setup>

import { reactive } from "vue";
import AboutLineIcon from "@/svg/AboutLineIcon.vue";
import TitleUnderIcon from "@/svg/TitleUnderIcon.vue";
import shape_1 from "@/assets/img/support/shape-img.png";
import shape_2 from "@/assets/img/support/shape-bg.png";

const answer_question_data = reactive([
  {
    id: 1,
    question: "Can you provide of all IT Managenment services?",
    answer:
      "A Gdser has its own IP address, which is made public instead. While a rather seemingly insignificant change, the G.xber IP address can be used for a number of vital busines to everything from security to customer experience. IP address can be used",
    accordion_id: "One",
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 2,
    question: "How many hours we get as part of a managed agreement?",
    answer:
      "A Gdser has its own IP address, which is made public instead. While a rather seemingly insignificant change, the G.xber IP address can be used for a number of vital busines to everything from security to customer experience. IP address can be used",
    accordion_id: "Two",
    collapsed: "",
    aria_expanded: true,
    show: true,
    active: "tp-faq-active",
  },
  {
    id: 3,
    question: "Why does my network website design need regular maintening?",
    answer:
      "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...",
    accordion_id: "Three",
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 4,
    question: "How many hours we get as part of a managed agreement?",
    answer:
      "A startup or start-up is started by individual founders or entrepreneurs to search for a repeatable and scalable business model. A startup or start-up is started by individual founders...",
    accordion_id: "Four",
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
]);

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}
</script>


<template>
  <section class="tp-support-area tp-support-bg p-relative pb-110">
    <div class="container container-large">
      <div class="tp-support-shape">
        <img class="shape-1" :src="shape_1" alt="image-title-here" />
        <img class="shape-2" :src="shape_2" alt="image-title-here" />
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-8 col-xl-10">
          <div class="tp-support-title-wrapper text-center">
            <span class="tp-section-title__pre">
              best IT <span class="title-pre-color">Support</span>
							<TitleUnderIcon /> 
            </span>
            <h3 class="tp-section-title">
              Frequently Ask <span class="title-color">Question?</span>
              <span class="title-center-shape">
								<AboutLineIcon /> 
              </span>
            </h3>
          </div>

          <div class="tp-support-faq faq-style-1">
            <div class="tp-faq-tab-content tp-accordion">
              <div class="accordion" id="general_accordion">
                <div
                  v-for="(item, i) in answer_question_data"
                  :key="i"
                  class="accordion-item">
                  <h2
                    class="accordion-header"
                    :id="'heading' + item.accordion_id">
                    <button
                      class="accordion-button"
                      :class="item.collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="'#collapse' + item.accordion_id"
                      :aria-expanded="item.aria_expanded"
                      :aria-controls="'collapse' + item.accordion_id">
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    :id="'collapse' + item.accordion_id"
                    class="accordion-collapse collapse"
                    :class="item.show ? 'show' : ''"
                    :aria-labelledby="'heading' + item.accordion_id"
                    data-bs-parent="#general_accordion">
                    <div class="accordion-body">
                      <p>{{ item.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

