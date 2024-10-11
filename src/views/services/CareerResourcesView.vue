<template>
    <div class="career-resources">
      <h1>Career Resources</h1>
      <p>
        Find helpful resources and tips to boost your career in the healthcare industry in Australia. Below are some useful websites, courses, and certification information to help you succeed.
      </p>
  
      <!-- Resource Section -->
      <section class="resources-section">
        <h2>Recommended Career Resources</h2>
        <div class="resource-cards">
          <div class="card" v-for="resource in resources" :key="resource.title">
            <i :class="resource.icon"></i>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <a :href="resource.link" target="_blank" class="resource-link">Learn More</a>
          </div>
        </div>
      </section>
  
      <!-- Tips Section -->
      <section class="tips-section">
        <h2>Job Search Tips</h2>
        <div class="tips-cards">
          <div class="card" v-for="tip in tips" :key="tip.title">
            <i class="fas fa-lightbulb"></i>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Course Recommendation Section -->
      <section class="courses-section">
        <h2>Recommended Courses</h2>
        <div class="course-cards">
          <div class="card" v-for="course in courses" :key="course.title">
            <i class="fas fa-book"></i>
            <h3>{{ course.title }}</h3>
            <p>{{ course.description }}</p>
            <a :href="course.link" target="_blank" class="resource-link">Explore Courses</a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CareerResourcesView',
    data() {
      return {
        resources: [
          {
            title: 'Healthcare Job Portal',
            description: 'A leading job board for healthcare professionals in Australia.',
            link: 'https://www.seek.com.au/healthcare-jobs',
            icon: 'fas fa-briefcase-medical',
          },
          {
            title: 'LinkedIn Learning',
            description: 'Upskill yourself with healthcare-related courses and certifications.',
            link: 'https://www.linkedin.com/learning/',
            icon: 'fas fa-graduation-cap',
          },
          {
            title: 'AHPRA',
            description: 'Ensure you meet certification requirements for healthcare jobs.',
            link: 'https://www.ahpra.gov.au/',
            icon: 'fas fa-certificate',
          },
        ],
        tips: [
          {
            title: 'Tailor Your Resume',
            description: 'Customize your resume to highlight relevant skills and experience in healthcare.',
          },
          {
            title: 'Network in Healthcare Communities',
            description: 'Join professional networks and attend industry events to expand your connections.',
          },
          {
            title: 'Prepare for Interviews',
            description: 'Research common interview questions in the healthcare industry and practice your responses.',
          },
        ],
        courses: [
          {
            title: 'Medical Terminology Course',
            description: 'Learn medical terminology to improve communication in healthcare settings.',
            link: 'https://www.coursera.org/courses?query=medical%20terminology',
          },
          {
            title: 'Patient Care Technician Certification',
            description: 'Become a certified patient care technician to improve your employability in clinical settings.',
            link: 'https://www.pctcertification.com/',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .career-resources {
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
  
  .resource-cards, .tips-cards, .course-cards {
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
    transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  
  .resource-link {
    color: #007bff;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
  
  .resource-link:hover {
    text-decoration: underline;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .resource-cards, .tips-cards, .course-cards {
      flex-direction: column;
      align-items: center;
    }
  
    .card {
      width: 90%;
    }
  }
  </style>
  