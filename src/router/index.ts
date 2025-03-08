import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/onboarding",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/HomeView.vue"),
  },
  {
    path: "/onboarding",
    name: "On Boarding",
    component: () => import("@/views/OnBoardingPage.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/views/RegisterPage.vue"),
  },
  {
    path: "/hub",
    name: "Hub",
    component: () => import("@/views/hub/HubView.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    component: () => import("@/views/hub/ChatView.vue"),
  },
  {
    path: "/myAchievments",
    name: "My Achievments",
    component: () => import("@/views/myAchievments/MyAchievmentsView.vue"),
  },
  {
    path: "/myCourse",
    name: "My Course",
    component: () => import("@/views/myCourse/MyCourseView.vue"),
  },
  {
    path: "/selectCourse",
    name: "Select Course",
    component: () => import("@/views/myCourse/SelectCourseView.vue"),
  },
  {
    path: "/singleCourse",
    name: "Single Course",
    component: () => import("@/views/myCourse/MySingleCourseView.vue"),
  },
  {
    path: "/onGoingCourse",
    name: "On Going Course",
    component: () => import("@/views/myCourse/OnGoingCoursesView.vue"),
  },
  {
    path: "/completedCourse",
    name: "Completed Course",
    component: () => import("@/views/myCourse/CompleteCoursesView.vue"),
  },
  {
    path: "/catalog",
    name: "Categories",
    component: () => import("@/views/home/categories/CategoriesView.vue"),
  },
  {
    path: "/detailCatalog",
    name: "Detail Categories",
    component: () => import("@/views/home/categories/DetailCategoriesView.vue"),
  },
  {
    path: "/trandingCatalog",
    name: "Tranding Courses Categories",
    component: () => import("@/views/home/categories/TrandingCatalogView.vue"),
  },
  {
    path: "/newReleaseCatalog",
    name: "New Release Courses",
    component: () => import("@/views/home/categories/NewReleaseView.vue"),
  },
  {
    path: "/mentorCourses",
    name: "Mentors",
    component: () => import("@/views/mentor/MentorCoursesView.vue"),
  },
  {
    path: "/filterMentors",
    name: "Filter Mentors",
    component: () => import("@/views/mentor/FilterMentorsCoursesView.vue"),
  },
  {
    path: "/checkout",
    name: "Checkout Course",
    component: () => import("@/views/checkout/CheckoutCourseView.vue"),
  },
  {
    path: "/addPaymentMethod",
    name: "Add Payment Method",
    component: () => import("@/views/checkout/AddPaymentMethod.vue"),
  },
  {
    path: "/addCoupon",
    name: "Add Coupon",
    component: () => import("@/views/checkout/AddCouponView.vue"),
  },
  {
    path: "/statusPayment",
    name: "Status Payment",
    component: () => import("@/views/checkout/StatusPaymentView.vue"),
  },
  {
    path: "/coursesRating",
    name: "Rating Courses",
    component: () => import("@/views/myAchievments/CoursesCompletedView.vue"),
  },
  {
    path: "/reviewCourses",
    name: "Review Courses",
    component: () => import("@/views/review/ReviewCoursesView.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/profile/ProfileView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;