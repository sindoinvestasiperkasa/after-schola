<template lang="">
    <div>
        <HeaderComponent />

        <section id="ongoing-section">
			<div class="container">
				<h1 class="d-none">Course</h1>
				<div class="ongoing-section-wrap mt-32">
					<ul class="nav nav-pills ongoing-courses-tab" id="pills-tab" role="tablist">
						<li class="nav-item" role="presentation">
							<button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Ongoing</button>
						</li>
						<li class="nav-item" role="presentation">
							<button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Completed</button>
						</li>
					</ul>
					<div class="tab-content" id="pills-tabContent">
						<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
							<div class="ongoing-section-details mt-16">
								<div class="ongoing-section-details-wrap category-redirect">
									<div class="ongoing-first">
										<img src="/assets/images/courses/ongoing-1.png" alt="course-img">
									</div>
									<div class="ongoing-second">
										<div class="ongoing-second-wrap">
											<div class="ongoing-details">
												<h2 class="ongoing-txt1">Fighter Girl Character in Blender Tutorial</h2>
												<div class="mt-16">
													<span class="ongoing-img"><img src="/assets/images/checkout-screen/time-icon.svg" alt="time-icon" ></span>
													<span class="ongoing-txt2">3h 30m</span>
												</div>
											</div>
											<div class="ongoing-progressbar">
												<div class="circle_percent" data-percent="80">
													<div class="circle_inner">
														<div class="round_per purple"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="ongoing-section-details-wrap category-redirect mt-16">
									<div class="ongoing-first">
										<img src="/assets/images/courses/ongoing-2.png" alt="course-img">
									</div>
									<div class="ongoing-second">
										<div class="ongoing-second-wrap">
											<div class="ongoing-details">
												<h2 class="ongoing-txt1">Responsive Design with Grids. A Guide...</h2>
												<div class="mt-16">
													<span class="ongoing-img"><img src="/assets/images/checkout-screen/time-icon.svg" alt="time-icon" ></span>
													<span class="ongoing-txt2">1h 30m</span>
												</div>
											</div>
											<div class="ongoing-progressbar">
												<div class="circle_percent green-progressbar" data-percent="56">
													<div class="circle_inner">
														<div class="round_per green"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="ongoing-section-details-wrap category-redirect mt-16">
									<div class="ongoing-first">
										<img src="/assets/images/courses/ongoing-3.png" alt="course-img">
									</div>
									<div class="ongoing-second">
										<div class="ongoing-second-wrap">
											<div class="ongoing-details">
												<h2 class="ongoing-txt1">Learn Figma - UI/UX Design Essential...</h2>
												<div class="mt-16">
													<span class="ongoing-img"><img src="/assets/images/checkout-screen/time-icon.svg" alt="time-icon" ></span>
													<span class="ongoing-txt2">3h 30m</span>
												</div>
											</div>
											<div class="ongoing-progressbar">
												<div class="circle_percent pink-progressbar" data-percent="49">
													<div class="circle_inner">
														<div class="round_per pink"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
							<div class="Completed-section-details mt-16">
								<div class="ongoing-section-details-wrap complete-course">
									<div class="ongoing-first">
										<img src="/assets/images/courses/completed1.png" alt="course-img">
									</div>
									<div class="ongoing-second">
										<div class="ongoing-second-wrap">
											<div class="ongoing-details">
												<h2 class="ongoing-txt1">The Complete 2023 Web Development...</h2>
												<div class="mt-16">
													<span class="ongoing-img"><img src="/assets/images/checkout-screen/time-icon.svg" alt="time-icon" ></span>
													<span class="ongoing-txt2">2h 30m</span>
												</div>
											</div>
											<div class="ongoing-progressbar">
												<div class="circle_percent black-progressbar" data-percent="100">
													<div class="circle_inner">
														<div class="round_per black"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="ongoing-section-details-wrap mt-16 complete-course">
									<div class="ongoing-first">
										<img src="/assets/images/courses/completed2.png" alt="course-img">
									</div>
									<div class="ongoing-second">
										<div class="ongoing-second-wrap">
											<div class="ongoing-details">
												<h2 class="ongoing-txt1">Become a UX Designer | Learn the...</h2>
												<div class="mt-16">
													<span class="ongoing-img"><img src="/assets/images/checkout-screen/time-icon.svg" alt="time-icon" ></span>
													<span class="ongoing-txt2">1h 30m</span>
												</div>
											</div>
											<div class="ongoing-progressbar">
												<div class="circle_percent black-progressbar" data-percent="100">
													<div class="circle_inner">
														<div class="round_per black"></div>
													</div>
												</div>
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

        <MenuBottom />
    </div>
</template>
<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue';
import MenuBottom from '@/components/MenuBottom.vue';
</script>
<style lang="">
    
</style>