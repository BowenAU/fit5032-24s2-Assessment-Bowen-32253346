<template>
    <div class="health-info">
      <h1>Health Information</h1>
      <p>
        This section provides useful health-related information to help you understand the healthcare system in Australia, common health concerns, and how to seek medical help when needed.
      </p>
  
      <!-- Common Health Issues Section -->
      <section class="health-issues-section">
        <h2>Common Health Issues in Australia</h2>
        <div class="issue-cards">
          <div class="card" v-for="issue in healthIssues" :key="issue.title">
            <i class="fas fa-stethoscope"></i>
            <h3>{{ issue.title }}</h3>
            <p>{{ issue.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Healthcare System Guide Section -->
      <section class="healthcare-guide-section">
        <h2>Guide to the Australian Healthcare System</h2>
        <div class="guide-content">
          <h3>Finding a General Practitioner (GP)</h3>
          <p>
            General Practitioners (GPs) are your first point of contact for health issues. You can find a GP in your area through the HealthDirect website or by asking for recommendations in your community.
          </p>
  
          <h3>Medicare and Private Health Insurance</h3>
          <p>
            Medicare is Australia’s public healthcare system, providing essential medical services for free or at a reduced cost. You can also opt for private health insurance for additional coverage.
          </p>
  
          <h3>Emergency Healthcare</h3>
          <p>
            In case of a medical emergency, call 000 for an ambulance, or go to the nearest emergency department. Always have your Medicare card or private health insurance details with you.
          </p>
        </div>
      </section>
  
      <!-- Emergency Contacts Section -->
      <section class="emergency-contacts-section">
        <h2>Emergency Medical Contacts</h2>
        <div class="contacts-cards">
          <div class="card" v-for="contact in emergencyContacts" :key="contact.title">
            <i class="fas fa-phone"></i>
            <h3>{{ contact.title }}</h3>
            <p>{{ contact.description }}</p>
            <p><strong>Phone:</strong> {{ contact.phone }}</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HealthInfoView',
    data() {
      return {
        healthIssues: [
          {
            title: 'Flu and Colds',
            description: 'The flu and common colds are frequent health issues in Australia, especially during the winter. Annual flu vaccinations are recommended.',
          },
          {
            title: 'Sunburn and Skin Cancer',
            description: 'Australia has one of the highest rates of skin cancer in the world. Always wear sunscreen and protective clothing when outdoors.',
          },
          {
            title: 'Mental Health',
            description: 'Mental health is important, and many services are available to help. Consult a GP or call Lifeline at 13 11 14 for mental health support.',
          },
        ],
        emergencyContacts: [
          {
            title: 'Ambulance Service',
            description: 'In case of a life-threatening emergency, call for an ambulance immediately.',
            phone: '000',
          },
          {
            title: 'HealthDirect',
            description: 'For non-urgent medical advice, you can call HealthDirect, a free 24-hour service.',
            phone: '1800 022 222',
          },
          {
            title: 'Poisons Information',
            description: 'If you suspect poisoning, call the Poisons Information Centre immediately for advice.',
            phone: '13 11 26',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .health-info {
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
  
  .issue-cards, .contacts-cards {
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
  
  .guide-content {
    margin-top: 30px;
    padding: 20px;
    background-color: #e9f5ff;
    border-radius: 8px;
  }
  
  .guide-content h3 {
    font-size: 1.8em;
    color: #333;
    margin-bottom: 10px;
  }
  
  .guide-content p {
    font-size: 1.1em;
    margin-bottom: 20px;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .issue-cards, .contacts-cards {
      flex-direction: column;
      align-items: center;
    }
  
    .card {
      width: 90%;
    }
  }
  </style>
  