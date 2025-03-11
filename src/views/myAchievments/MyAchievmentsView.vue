<template>
  <!-- Header -->
  <header id="top-navbar" class="top-navbar bg-white shadow-md py-3">
    <div class="container flex items-center justify-between px-4">
      <div class="back-btn">
        <a href="#offcanvasExample" data-bs-toggle="offcanvas">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M19 6.87301C19.3062 7.04981 19.5601 7.30464 19.7358 7.61153C19.9115 7.91843 20.0026 8.26641 20 8.62001V15.156C19.9999 15.5127 19.9045 15.8628 19.7235 16.1701C19.5426 16.4775 19.2828 16.7309 18.971 16.904L12.971 20.737C12.674 20.902 12.3398 20.9885 12 20.9885C11.6602 20.9885 11.326 20.902 11.029 20.737L5.029 16.904C4.71736 16.7309 4.45763 16.4777 4.27671 16.1706C4.0958 15.8634 4.00026 15.5135 4 15.157V8.62001C4.00008 8.26337 4.09553 7.91323 4.27646 7.60589C4.45739 7.29854 4.71721 7.04516 5.029 6.87201L11.029 3.30001C11.3348 3.12978 11.679 3.04044 12.029 3.04044C12.379 3.04044 12.7232 3.12978 13.029 3.30001L19.029 6.87301H19V6.87301Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </a>
      </div>
      <div class="top-navbar-title">
        <p class="text-xl font-bold">Achievements</p>
      </div>
    </div>
  </header>

  <!-- Total Points -->
  <section class="p-4 bg-gray-50">
    <div class="bg-white rounded-xl p-6 shadow-md flex items-center justify-between">
      <div>
        <h3 class="text-lg font-bold text-gray-800">Total Points</h3>
        <p class="text-gray-600 text-lg font-semibold">{{ totalPoints }} pts</p>
      </div>
      <img src="/assets/images/favicon/award.png" alt="Trophy" class="w-16 h-16" />
    </div>
  </section>

  <!-- Achievements -->
  <section class="p-5">
    <h3 class="text-lg font-semibold mb-3 text-gray-800">Achievements</h3>

    <div v-for="achievement in achievements" :key="achievement.id" 
      class="mb-4 p-6 bg-white rounded-xl shadow-md flex items-center space-x-4 hover:scale-105 transition-all duration-200">

      <img :src="achievement.icon" alt="icon" class="w-14 h-14 object-cover" />
      <div class="flex-grow">
        <h4 class="text-md font-bold text-gray-700">{{ achievement.title }}</h4>
        <p class="text-sm text-gray-500">{{ achievement.description }}</p>
        <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
          <div class="bg-blue-500 h-2 rounded-full transition-all duration-300" :style="{ width: achievement.progress + '%' }"></div>
        </div>
      </div>
      <span class="text-lg font-bold text-blue-600">{{ achievement.points }} pts</span>
    </div>
  </section>

  <MenuBottom />
</template>

<script setup>
import { ref } from "vue";
import MenuBottom from "@/components/MenuBottom.vue";

const totalPoints = ref(350);

// Dummy Achievements Data
const achievements = ref([
  {
    id: 1,
    title: "Course Completed",
    description: "Menyelesaikan 1 kursus dengan sukses.",
    points: 100,
    progress: 100,
    icon: "/assets/images/favicon/favorite.png",
  },
  {
    id: 2,
    title: "Daily Login Streak",
    description: "Login selama 7 hari berturut-turut.",
    points: 50,
    progress: 80,
    icon: "/assets/images/favicon/lock.png",
  },
  {
    id: 3,
    title: "Active Learner",
    description: "Bertanya ke mentor sebanyak 10 kali.",
    points: 70,
    progress: 40,
    icon: "/assets/images/favicon/lifestyle.png",
  },
  {
    id: 4,
    title: "Quiz Master",
    description: "Mendapatkan nilai 90+ di kuis.",
    points: 120,
    progress: 100,
    icon: "/assets/images/favicon/quiz.png",
  },
]);
</script>

<style scoped>
/* Pastikan background tidak tertimpa */
body {
  background-color: #f9f9f9 !important;
}

/* Pastikan header tidak tertimpa */
.top-navbar {
  background: #ffffff !important;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1) !important;
  padding: 10px !important;
}

/* Atur ukuran gambar agar tidak berubah */
img {
  max-width: 100% !important;
  height: auto !important;
}

/* Efek hover lebih lembut */
.hover\:scale-105:hover {
  transform: scale(1.05) !important;
  transition: transform 0.3s ease-in-out !important;
}

/* Animasi progress bar */
.bg-blue-500 {
  transition: width 0.3s ease-in-out !important;
}
</style>