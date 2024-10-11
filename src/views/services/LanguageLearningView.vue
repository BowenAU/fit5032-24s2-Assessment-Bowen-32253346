<template>
  <div class="language-learning">
    <h1>Language Learning Resources</h1>
    <p>
      Enhance your English skills to succeed in the Australian healthcare industry. Below are tips,
      recommended courses, and useful resources to help you on your language learning journey.
    </p>

    <!-- Language Learning Tips Section -->
    <section class="learning-tips-section">
      <h2>Language Learning Tips</h2>
      <div class="tip-cards">
        <div class="card" v-for="tip in tips" :key="tip.title">
          <i class="fas fa-lightbulb"></i>
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.description }}</p>
        </div>
      </div>
    </section>

    <!-- Recommended Courses Section -->
    <section class="courses-section">
      <h2>Recommended English Courses</h2>
      <div class="course-cards">
        <div class="card" v-for="course in courses" :key="course.title">
          <i class="fas fa-chalkboard-teacher"></i>
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
          <a :href="course.link" target="_blank" class="course-link">Learn More</a>
        </div>
      </div>
    </section>

    <!-- Language Support Services Section -->
    <section class="support-services-section">
      <h2>Language Support Services</h2>
      <div class="service-cards">
        <div class="card" v-for="service in services" :key="service.title">
          <i class="fas fa-comments"></i>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <a :href="service.link" target="_blank" class="service-link">Access Service</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LanguageLearningView',
  data() {
    return {
      tips: [
        {
          title: 'Practice Medical Terminology',
          description:
            'Focus on learning medical-specific vocabulary that will be useful in healthcare settings.'
        },
        {
          title: 'Listen to English Podcasts',
          description:
            'Podcasts are a great way to immerse yourself in the language. Try listening to healthcare-related podcasts.'
        },
        {
          title: 'Join English Conversation Groups',
          description:
            'Many community centers offer English conversation groups where you can practice speaking in a safe environment.'
        }
      ],
      courses: [
        {
          title: 'English for Healthcare Professionals',
          description:
            'This course focuses on the specific vocabulary and communication skills needed in a healthcare setting.',
          link: 'https://www.coursera.org/courses?query=english%20for%20healthcare'
        },
        {
          title: 'IELTS Preparation',
          description:
            'Prepare for the IELTS exam, which is often required for healthcare professionals seeking to work in Australia.',
          link: 'https://www.ielts.org/about-ielts/ielts-for-migration/australia'
        },
        {
          title: 'Advanced English Grammar for Healthcare',
          description:
            'A course that sharpens your grammar skills specifically tailored for the healthcare environment.',
          link: 'https://www.edx.org/course/advanced-english-grammar'
        }
      ],
      services: [
        {
          title: 'Language Support Australia',
          description:
            'A service that provides free language support for migrants and non-native speakers in Australia.',
          link: 'https://www.languagesupport.org.au'
        },
        {
          title: 'Healthcare English Tutoring',
          description:
            'Private English tutoring service for healthcare professionals, focusing on workplace communication.',
          link: 'https://www.healthcaretutoring.com'
        },
        {
          title: 'Community Language Classes',
          description:
            'Many community centers offer free or low-cost English classes. Find a center near you.',
          link: 'https://www.communitylanguages.org.au'
        }
      ]
    }
  }
}
</script>

<style scoped>
.language-learning {
  padding: 40px;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;
}

h1 {
  font-size: 2.5em;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

p {
  font-size: 1.2em;
  margin-bottom: 40px;
  text-align: center;
}

h2 {
  font-size: 2em;
  color: #007bff;
  margin-bottom: 20px;
  text-align: center;
}

.tip-cards,
.course-cards,
.service-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.card i {
  font-size: 3em;
  color: #007bff;
  margin-bottom: 15px;
}

h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
}

.course-link,
.service-link {
  color: #007bff;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
}

.course-link:hover,
.service-link:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .tip-cards,
  .course-cards,
  .service-cards {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}
</style>
