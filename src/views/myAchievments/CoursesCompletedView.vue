<template lang="">
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
                    <p>Course Complete</p>
                </div>
            </div>
        </div>
        <div class="navbar-boder"></div>
    </header>
    <!-- Header end -->
    <!-- Complete course rating screen start -->
    <section id="complete-course-rating">
        <div class="container">
            <div class="complete-course-rating-wrap">
                <div class="complete-course-rating-top mt-32">
                    <img src="/assets/images/courses/course-completed-img.png" alt="cup-img">
                </div>
                <div class="complete-course-rating-bottom mt-24">
                    <h1 class="course-txt1">Course Completed!</h1>
                    <p class="course-txt2 mt-12">Please leave a review for your course</p>
                    <div class="course-rating-sec mt-24">
                        <div class="star-rating">
                            <input id="star-5" type="radio" name="rating" value="star-5" >
                            <label for="star-5" title="5 stars">
                                <i class="active fa fa-star"></i>
                            </label>
                            <input id="star-4" type="radio" name="rating" value="star-4">
                            <label for="star-4" title="4 stars">
                                <i class="active fa fa-star"></i>
                            </label>
                            <input id="star-3" type="radio" name="rating" value="star-3">
                            <label for="star-3" title="3 stars">
                                <i class="active fa fa-star"></i>
                            </label>
                            <input id="star-2" type="radio" name="rating" value="star-2">
                            <label for="star-2" title="2 stars">
                                <i class="active fa fa-star"></i>
                            </label>
                            <input id="star-1" type="radio" name="rating" value="star-1" checked>
                            <label for="star-1" title="1 star">
                                <i class="active fa fa-star"></i>
                            </label>
                        </div>
                    </div>
                    <div class="rating-para">
                        <p>The course & mentor are great! 🔥</p>
                    </div>
                    <div class="write-review-btn mt-32">
                        <a href="/reviewCourses">Write Review</a>
                    </div>
                    <div class="cancel-review-btn mt-16">
                        <a href="/home">Cancel</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Complete course rating screen end -->
</template>
<script>

</script>
<style lang="">
    
</style>