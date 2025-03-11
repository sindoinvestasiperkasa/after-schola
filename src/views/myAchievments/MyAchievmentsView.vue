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
						<p>My Achievements</p>
					</div>
					<div class="skip-btn-goal">
					</div>
				</div>
			</div>
			<div class="navbar-boder"></div>
		</header>

  <!-- Total Points -->
  <section class="section-container">
    <div class="card">
      <div class="card-content">
        <h3>Total Points</h3>
        <p>{{ totalPoints }} pts</p>
      </div>
      <img src="/assets/images/favicon/award.png" alt="Trophy" class="achievement-icon" />
    </div>
  </section>

  <!-- Achievements -->
  <section class="section-container">
    <h3 class="section-title">Achievements</h3>
    <div 
    v-for="achievement in achievements" 
    :key="achievement.id" 
    class="achievement-card"
    @click="goToDetail(achievement)"
    >
      <img :src="achievement.icon" alt="icon" class="achievement-icon" />
      <div class="achievement-info">
        <div class="achievement-header">
          <h4>{{ achievement.title }}</h4>
          <span class="achievement-points">{{ achievement.points }} pts</span>
        </div>
        <p>{{ achievement.description }}</p>
        <div class="progress-bar">
          <div class="progress" :style="{ width: achievement.progress + '%' }"></div>
        </div>
      </div>
    </div>
  </section>

  <MenuBottom />
</template>

<script setup>

import { ref } from "vue";
import MenuBottom from "@/components/MenuBottom.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const totalPoints = ref(350);

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

const goToDetail = (achievement) => {
  router.push({
    path: `/achievement-detail/${achievement.title}`,
    query: {
      title: achievement.title,
      description: achievement.description,
      points: achievement.points,
      progress: achievement.progress,
      icon: achievement.icon
    }
  });
};

</script>

<style scoped>
/* Global Background */
body {
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

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
}

/* Card */
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-content h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.card-content p {
  font-size: 14px;
  color: #777;
  font-weight: bold;
}

/* Achievements */
.section-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.achievement-card {
  display: flex;
  align-items: center;
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;
}

.achievement-card:hover {
  transform: scale(1.03);
}

.achievement-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
}

.achievement-info {
  flex: 1;
  margin-left: 15px;
}

.achievement-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.achievement-header h4 {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 0;
}

.achievement-points {
  font-size: 14px;
  font-weight: bold;
  color: #4a90e2;
}

.achievement-info p {
  font-size: 12px;
  color: #777;
  margin: 5px 0;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 10px;
  margin-top: 5px;
}

.progress {
  height: 6px;
  background: #4a90e2;
  border-radius: 10px;
  transition: width 0.3s ease-in-out;
}
</style>