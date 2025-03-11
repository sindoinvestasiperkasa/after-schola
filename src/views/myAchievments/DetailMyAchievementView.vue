<template>
    <!-- Header -->
    <header id="top-header">
        <div class="container">
            <div class="top-header-full">
                <div class="back-btn">
                    <a href="javascript:history.go(-1)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_330_7385" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                                <rect width="24" height="24" fill="black"/>
                            </mask>
                            <g mask="url(#mask0_330_7385)">
                                <path d="M15 18L9 12L15 6" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="header-title">
                    <p>Detail Achievement</p>
                </div>
            </div>
        </div>
        <div class="navbar-boder"></div>
    </header>
  
    <!-- Achievement Details -->
    <section class="section-container">
      <div class="achievement-detail-card">
        <img :src="achievement.icon" alt="icon" class="achievement-icon" />
        <div class="achievement-detail-info">
          <h2>{{ achievement.title }}</h2>
          <p class="achievement-description">{{ achievement.description }}</p>
          <p class="achievement-points">{{ achievement.points }} pts</p>
        </div>
      </div>
  
      <!-- Progress Bar -->
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" :style="{ width: achievement.progress + '%' }"></div>
        </div>
        <p>{{ achievement.progress }}% Completed</p>
      </div>
    </section>
  
    <MenuBottom />
  </template>
  
  <script setup>
  import { ref } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import MenuBottom from "@/components/MenuBottom.vue";
  
  const route = useRoute();
  const router = useRouter();
  
  // Data Achievement dari Parameter Route
  const achievement = ref({
    title: route.params.title || "Unknown Achievement",
    description: route.params.description || "No description available.",
    points: route.params.points || "0",
    progress: route.params.progress || "0",
    icon: route.params.icon || "/assets/images/favicon/award.png",
  });
  
  // Fungsi untuk kembali ke halaman sebelumnya
  const goBack = () => {
    router.push("/my-achievements");
  };
  </script>
  
  <style scoped>

  
  .top-navbar-full {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .top-navbar-title p {
    font-size: 18px;
    font-weight: bold;
  }
  
  /* Section Container */
  .section-container {
    padding: 20px;
    text-align: center;
  }
  
  /* Achievement Detail Card */
  .achievement-detail-card {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .achievement-icon {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 20px;
  }
  
  .achievement-detail-info h2 {
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  
  .achievement-description {
    font-size: 14px;
    color: #777;
    margin-top: 5px;
  }
  
  .achievement-points {
    font-size: 16px;
    font-weight: bold;
    color: #4a90e2;
    margin-top: 10px;
  }
  
  /* Progress Bar */
  .progress-container {
    margin-top: 20px;
    text-align: center;
  }
  
  .progress-bar {
    width: 100%;
    height: 8px;
    background: #e0e0e0;
    border-radius: 10px;
    margin: 10px 0;
  }
  
  .progress {
    height: 8px;
    background: #4a90e2;
    border-radius: 10px;
    transition: width 0.3s ease-in-out;
  }
  </style>
  