<template>
  <body>
    <div class="site-content">
      <!-- Onboarding screen start -->
      <div
        id="carouselExampleIndicators"
        class="carousel slide onboarding-slider"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="carousel-item"
            :class="{ active: index === currentSlide }"
          >
            <div class="Onboarding-Screen-1">
              <div class="container">
                <div class="Onboarding-Screen-1-full">
                  <div
                    v-if="index !== slides.length - 1"
                    class="skip_btn_1 skip_btn-onboading pt-30"
                  >
                    <a href="login" @click="skipOnboarding">Skip</a>
                  </div>
                  <div class="onboarding-img mt-32">
                    <img :src="slide.image" alt="onboarding-img" />
                  </div>
                  <div class="boarding-title mt-32">
                    <h1 v-html="slide.title"></h1>
                  </div>
                  <div class="onboarding-next-btn skip_btn_1">
                    <a
                      v-if="index !== slides.length - 1"
                      href="javascript:void(0)"
                      @click="nextSlide"
                      >Next</a
                    >
                    <a v-else href="login">Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-indicators custom-slider-btn">
          <button
            v-for="(slide, index) in slides"
            :key="index"
            type="button"
            :data-bs-target="'#carouselExampleIndicators'"
            :data-bs-slide-to="index"
            class="custom-slider-dots"
            :class="{ active: index === currentSlide }"
            @click="goToSlide(index)"
          ></button>
        </div>
      </div>
      <!-- Onboarding Screen End -->
    </div>
  </body>
</template>

<script setup>
import { ref } from "vue";

const currentSlide = ref(0);
const slides = ref([
  {
    image: "/assets/images/onboarding-screen/onboarding-1.png",
    title: "We provide the best <br> learning courses & great <br> mentors!",
  },
  {
    image: "/assets/images/onboarding-screen/onboarding-2.png",
    title: "Learn anytime and anywhere easily and conveniently",
  },
  {
    image: "/assets/images/onboarding-screen/onboarding-3.png",
    title: "Let’s improve your skills together with Guruji right now!",
  },
]);

const nextSlide = () => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

const skipOnboarding = () => {
  window.location.href = "let-you-screen.html";
};
</script>

<style scoped></style>
