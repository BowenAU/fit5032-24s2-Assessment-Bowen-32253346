<template>
  <main class="events-container">
    <!-- Page Header -->
    <h1>Upcoming Events</h1>
    <p>Stay updated with the latest events in the health and migrant communities. Don't miss out on any important events!</p>

    <!-- Events Section -->
    <section class="events-list">
      <h2>Events You Shouldn't Miss</h2>
      <div class="event-card" v-for="event in events" :key="event.id">
        <h3>{{ event.name }}</h3>
        <p>{{ event.description }}</p>
        <p><strong>Date:</strong> {{ event.date }}</p>
        <p><strong>Location:</strong> {{ event.location }}</p>
        <a :href="event.link" target="_blank" class="event-link">Learn More</a>
      </div>
    </section>

    <!-- Email Subscription Section -->
    <section class="subscribe-section">
      <h2>Stay Informed</h2>
      <p>Enter your details below to receive event notifications directly to your email.</p>

      <div class="form-group">
        <label for="email">Email:</label>
        <input placeholder="Enter your email" type="email" class="form-control" id="email" v-model="email" />
      </div>

      <div class="form-group">
        <label for="name">Name:</label>
        <input placeholder="Enter your name" type="text" class="form-control" id="name" v-model="name" />
      </div>

      <button @click="sendEmail" class="btn btn-primary me-2" :disabled="!email || !name">
        Send Email
      </button>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const email = ref('')
const name = ref('')

const events = ref([
  {
    id: 1,
    name: 'Health & Well-being Workshop',
    description: 'Learn about health services and how to access them as a migrant.',
    date: '12th November 2024',
    location: 'Melbourne Community Hall',
    link: 'https://www.eventlink.com/health-wellbeing'
  },
  {
    id: 2,
    name: 'Cultural Exchange Festival',
    description: 'Join the community in celebrating cultural diversity and building connections.',
    date: '20th December 2024',
    location: 'Sydney City Square',
    link: 'https://www.eventlink.com/cultural-festival'
  },
  {
    id: 3,
    name: 'Job Fair for Migrants',
    description: 'Connect with employers and discover job opportunities in the health sector.',
    date: '5th January 2025',
    location: 'Brisbane Exhibition Center',
    link: 'https://www.eventlink.com/job-fair'
  }
])

const sendEmail = async () => {
  try {
    emailjs.init('woIvKzjWPZjbeCrVo')
    await emailjs.send('service_Bowen5032', 'template_emqvjc3', {
      to_name: name.value,
      from_name: 'FIT5032_Bowen',
      message: 'Hello',
      to_email: email.value
    })
    alert('Email sent successfully!')
  } catch (error) {
    console.log(error)
    alert('Failed to send email. Please try again later.')
  }
}
</script>

<style scoped>
/* Container */
.events-container {
  padding: 40px;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  color: #333;
}

/* Page Header */
h1 {
  font-size: 2.5em;
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
}

p {
  text-align: center;
  margin-bottom: 40px;
}

/* Events Section */
.events-list {
  margin-bottom: 40px;
}

.events-list h2 {
  font-size: 2em;
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
}

.event-card {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.event-card h3 {
  color: #007bff;
}

.event-link {
  color: #007bff;
  text-decoration: none;
}

.event-link:hover {
  text-decoration: underline;
}

/* Email Subscription Section */
.subscribe-section {
  text-align: center;
}

.subscribe-section h2 {
  font-size: 2em;
  color: #007bff;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  text-align: left;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}

button:hover:enabled {
  background-color: #0056b3;
}

/* Responsive Design */
@media (max-width: 768px) {
  .events-list .event-card {
    width: 100%;
  }

  .form-group {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
