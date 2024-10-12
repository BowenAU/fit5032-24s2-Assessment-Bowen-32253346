<script setup>
import { ref } from 'vue'
import Rating from 'primevue/rating'

// Google search link generator
const generateGoogleSearchLink = (query) => {
  const baseUrl = 'https://www.google.com/search?q=';
  return `${baseUrl}${encodeURIComponent(query)}`;
}

// Health news and recommended courses (without images)
const healthNews = ref([
  {
    title: 'How to Access Healthcare Services in Australia',
    rating: ref(null)
  },
  {
    title: 'Overcoming Language Barriers in the Health Industry for Chinese Immigrants',
    rating: ref(null)
  },
  {
    title: 'Latest Job Opportunities in the Health Industry',
    rating: ref(null)
  },
  {
    title: 'Navigating Australia’s Health Insurance System',
    rating: ref(null)
  },
  {
    title: 'The Importance of Mental Health Support for Migrants',
    rating: ref(null)
  },
  {
    title: 'How Migrant Communities Contribute to Australia’s Healthcare Workforce',
    rating: ref(null)
  }
])

const recommendedCourses = ref([
  {
    name: 'Basic Medical English',
    description: 'Learn basic medical terminology and conversation skills',
    rating: ref(null)
  },
  {
    name: 'Introduction to Australia’s Health Industry',
    description: 'Understand the Australian healthcare system and industry trends',
    rating: ref(null)
  },
  {
    name: 'First Aid Training for Non-Native Speakers',
    description: 'Gain the skills to provide first aid and understand emergency procedures',
    rating: ref(null)
  },
  {
    name: 'Medical Ethics and Laws in Australia',
    description: 'Explore the legal and ethical standards in Australian healthcare',
    rating: ref(null)
  },
  {
    name: 'Health Literacy for Immigrants',
    description: 'Enhance your understanding of health information and services',
    rating: ref(null)
  }
])
</script>

<template>
  <main class="content-container">
    <!-- Health News Section -->
    <section class="card-section">
      <h2>Latest Health-Related News</h2>
      <div class="card-grid">
        <div class="card" v-for="news in healthNews" :key="news.title">
          <div class="card-content">
            <a :href="generateGoogleSearchLink(news.title)" target="_blank" rel="noopener noreferrer">
              <h3>{{ news.title }}</h3>
            </a>
            <Rating v-model="news.rating" aria-label="Rate this news" class="rating-stars" />
          </div>
        </div>
      </div>
    </section>

    <!-- Recommended Courses Section -->
    <section class="card-section">
      <h2>Recommended Courses</h2>
      <div class="card-grid">
        <div class="card" v-for="course in recommendedCourses" :key="course.name">
          <div class="card-content">
            <a :href="generateGoogleSearchLink(course.name)" target="_blank" rel="noopener noreferrer">
              <h3>{{ course.name }}</h3>
              <p>{{ course.description }}</p>
            </a>
            <Rating v-model="course.rating" aria-label="Rate this course" class="rating-stars" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* General Layout */
.content-container {
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

/* Card Sections */
.card-section {
  margin-bottom: 40px;
}

.card-section h2 {
  text-align: center;
  color: #007bff;
  font-size: 2.5em;
  margin-bottom: 30px;
}

/* Cards Grid Layout */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 280px;
  margin-bottom: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Card Content */
.card-content h3 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 15px;
}

.card-content a {
  text-decoration: none;
  color: #007bff;
}

.card-content a:hover {
  text-decoration: underline;
}

/* Rating Stars */
.rating-stars {
  margin-top: 15px;
  justify-content: center;
}

/* Responsive Design */
@media (max-width: 768px) {
  .card-grid {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
