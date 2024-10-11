<template>
    <div class="cultural-integration">
      <h1>Cultural Integration</h1>
      <p>
        Adjusting to a new culture can be challenging. Here are some tips and resources to help you smoothly integrate into Australian society and participate in local communities.
      </p>
  
      <!-- Tips Section -->
      <section class="tips-section">
        <h2>Cultural Adaptation Tips</h2>
        <div class="tip-cards">
          <div class="card" v-for="tip in tips" :key="tip.title">
            <i class="fas fa-handshake"></i>
            <h3>{{ tip.title }}</h3>
            <p>{{ tip.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Community Events Section -->
      <section class="events-section">
        <h2>Upcoming Community Events</h2>
        <div class="event-cards">
          <div class="card" v-for="event in events" :key="event.title">
            <i class="fas fa-calendar-alt"></i>
            <h3>{{ event.title }}</h3>
            <p>{{ event.description }}</p>
            <a :href="event.link" target="_blank" class="event-link">Learn More</a>
          </div>
        </div>
      </section>
  
      <!-- Resources Section -->
      <section class="resources-section">
        <h2>Useful Resources for Cultural Integration</h2>
        <div class="resource-cards">
          <div class="card" v-for="resource in resources" :key="resource.title">
            <i class="fas fa-globe"></i>
            <h3>{{ resource.title }}</h3>
            <p>{{ resource.description }}</p>
            <a :href="resource.link" target="_blank" class="resource-link">Visit Resource</a>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CulturalIntegrationView',
    data() {
      return {
        tips: [
          {
            title: 'Learn Local Etiquette',
            description: 'Understanding local customs and etiquette helps build better relationships with Australians.',
          },
          {
            title: 'Get Involved in the Community',
            description: 'Join community groups or attend events to make friends and learn more about Australian culture.',
          },
          {
            title: 'Improve Your English',
            description: 'Taking English classes or practicing with locals will help you communicate more effectively.',
          },
        ],
        events: [
          {
            title: 'Local Market Day',
            description: 'Explore the local markets, enjoy fresh food, and meet local vendors in your community.',
            link: 'https://www.localmarket.com.au',
          },
          {
            title: 'Cultural Exchange Meetup',
            description: 'Join this meetup to meet people from different cultures and share your experiences.',
            link: 'https://www.meetup.com/cultural-exchange',
          },
          {
            title: 'Volunteer Opportunities',
            description: 'Get involved by volunteering at local community centers or charity events.',
            link: 'https://www.volunteeringaustralia.org',
          },
        ],
        resources: [
          {
            title: 'Australian Government Settlement Services',
            description: 'Provides services to help new migrants settle in Australia.',
            link: 'https://www.homeaffairs.gov.au/settling-in-australia',
          },
          {
            title: 'Language Support Services',
            description: 'Access language support services to improve your communication skills.',
            link: 'https://www.languagesupport.org.au',
          },
          {
            title: 'Cultural Awareness Workshops',
            description: 'Attend workshops that offer insights into Australian culture and values.',
            link: 'https://www.culturalawareness.org.au',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .cultural-integration {
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
  
  .tip-cards, .event-cards, .resource-cards {
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
  
  .event-link, .resource-link {
    color: #007bff;
    text-decoration: none;
    margin-top: 10px;
    display: inline-block;
  }
  
  .event-link:hover, .resource-link:hover {
    text-decoration: underline;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .tip-cards, .event-cards, .resource-cards {
      flex-direction: column;
      align-items: center;
    }
  
    .card {
      width: 90%;
    }
  }
  </style>
  