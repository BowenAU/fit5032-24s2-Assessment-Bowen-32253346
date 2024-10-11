<script setup>
import { role, username } from '../router/index'
import { ref } from 'vue'
import Rating from 'primevue/rating'

// separate rating values are created for each news and course
const healthNews = ref([
  {
    title: 'How to Access Healthcare Services in Australia',
    link: '/health-services',
    rating: ref(null)
  },
  {
    title: 'Overcoming Language Barriers in the Health Industry for Chinese Immigrants',
    link: '/language-barriers',
    rating: ref(null)
  },
  {
    title: 'Latest Job Opportunities in the Health Industry',
    link: '/job-opportunities',
    rating: ref(null)
  }
])

const recommendedCourses = ref([
  {
    name: 'Basic Medical English',
    description: 'Learn basic medical terminology and conversation skills',
    link: '/courses/medical-english',
    rating: ref(null)
  },
  {
    name: 'Introduction to Australia’s Health Industry',
    description: 'Understand the Australian healthcare system and industry trends',
    link: '/courses/health-industry-intro',
    rating: ref(null)
  }
])
</script>

<template>
  <main class="container">
    <!-- Welcome message -->
    <section class="welcome-section">
      <h1>Welcome, {{ username }}!</h1>
      <p>Your current role is: {{ role }}</p>
    </section>

    <!-- Health News -->
    <div class="container text-center">
      <div class="row">
        <div class="col-md-6">
          <section class="news-section">
            <h2>Latest Health-Related News</h2>
            <ul>
              <li v-for="news in healthNews" :key="news.title">
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <a :href="news.link">{{ news.title }}</a>
                    </div>
                    <div class="col-6">
                      <Rating v-model="news.rating" />
                      The rate is {{ value }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>

        <!-- Recommended Courses -->
        <div class="col-md-6">
          <section class="courses-section">
            <h2>Recommended Courses</h2>
            <ul>
              <li v-for="course in recommendedCourses" :key="course.name">
                <div class="container text-center">
                  <div class="row align-items-center">
                    <div class="col-6">
                      <a :href="course.link">
                        <p>{{ course.name }}</p>
                        <p>{{ course.description }}</p>
                      </a>
                    </div>
                    <div class="col-6">
                      <Rating v-model="course.rating" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.welcome-section {
  margin-bottom: 20px;
  text-align: center;
}

.news-section,
.courses-section {
  margin-bottom: 20px;
}

.news-section h2,
.courses-section h2 {
  margin-bottom: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}

a {
  text-decoration: none;
  color: #1e90ff;
}

a:hover {
  text-decoration: underline;
}

/* text and rating component are centered vertically */
.row.align-items-center {
  display: flex;
  align-items: center;
}

.col-6 {
  display: flex;
  align-items: center;
}
</style>
