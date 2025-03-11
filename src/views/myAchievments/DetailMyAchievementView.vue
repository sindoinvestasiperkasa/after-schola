<template>
    <!-- Header -->
    <header id="top-navbar" class="top-navbar">
      <div class="container">
        <div class="top-navbar_full">
          <div class="back-btn">
            <a  href="#offcanvasExample" data-bs-toggle="offcanvas">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_230_107" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                        <rect width="24" height="24" fill="white"/>
                    </mask>
                    <g mask="url(#mask0_230_107)">
                        <path d="M19 6.87301C19.3062 7.04981 19.5601 7.30464 19.7358 7.61153C19.9115 7.91843 20.0026 8.26641 20 8.62001V15.156C19.9999 15.5127 19.9045 15.8628 19.7235 16.1701C19.5426 16.4775 19.2828 16.7309 18.971 16.904L12.971 20.737C12.674 20.902 12.3398 20.9885 12 20.9885C11.6602 20.9885 11.326 20.902 11.029 20.737L5.029 16.904C4.71736 16.7309 4.45763 16.4777 4.27671 16.1706C4.0958 15.8634 4.00026 15.5135 4 15.157V8.62001C4.00008 8.26337 4.09553 7.91323 4.27646 7.60589C4.45739 7.29854 4.71721 7.04516 5.029 6.87201L11.029 3.30001C11.3348 3.12978 11.679 3.04044 12.029 3.04044C12.379 3.04044 12.7232 3.12978 13.029 3.30001L19.029 6.87301H19V6.87301Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </a>
          </div>
          <div class="top-navbar-title">
                <p>Detail Achievements</p>
            </div>
            <div class="skip-btn-goal">
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
  