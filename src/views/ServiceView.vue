<template>
  <div class="services-container">
    <h1 class="title">Our Services</h1>
    <p class="description">
      Explore the various services we offer to assist you in language learning, career resources, health information, and cultural integration.
    </p>
    
    <div class="services-grid">
      <div class="service-card" @click="goToService('language-learning')">
        <img src="../assets/LanguageLearningImage.jpeg" alt="Language Learning" class="service-image" />
        <h3 class="service-title">Language Learning</h3>
        <p class="service-description">Enhance your language skills to better adapt and thrive in a new environment.</p>
      </div>

      <div class="service-card" @click="goToService('career-resources')">
        <img src="../assets/CareerResourcesImage.jpeg" alt="Career Resources" class="service-image" />
        <h3 class="service-title">Career Resources</h3>
        <p class="service-description">Access valuable tools and information to advance your career path.</p>
      </div>

      <div class="service-card" @click="goToService('health-info')">
        <img src="../assets/HealthInfoImage.png" alt="Health Information" class="service-image" />
        <h3 class="service-title">Health Information</h3>
        <p class="service-description">Stay informed about the healthcare system and available services for you.</p>
      </div>

      <div class="service-card" @click="goToService('cultural-integration')">
        <img src="../assets/CulturalIntegrationImage.jpeg" alt="Cultural Integration" class="service-image" />
        <h3 class="service-title">Cultural Integration</h3>
        <p class="service-description">Learn more about blending in with the local culture while preserving your own.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OurServicesView',
  methods: {
    goToService(service) {
      this.$router.push(`/service/${service}`);
    }
  }
}
</script>

<style scoped>
.services-container {
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2em;
  margin-bottom: 40px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-items: center;
}

.service-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.service-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}

.service-title {
  margin: 15px 0 10px;
  font-size: 1.5em;
}

.service-description {
  font-size: 1em;
  color: #555;
}
</style>
