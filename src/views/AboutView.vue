<template>
    <section class="about-us">
      <div class="about-header">
        <h1>About Us</h1>
        <p>
          We are a nonprofit organization dedicated to helping Chinese immigrants in Australia with their health and career development. We provide medical-related English learning resources and career guidance to help the Chinese community overcome language barriers and employment challenges.
        </p>
      </div>
      
      <div class="about-vision">
        <h2>Our Vision</h2>
        <p>
          To create a supportive community for Chinese immigrants, helping them adapt to Australian society and offering opportunities in the health industry.
        </p>
      </div>
  
      <div class="about-team">
        <h2>Our Team</h2>
        <div class="team-member" v-for="member in team" :key="member.id">
          <!-- Using relative path to include images -->
          <img :src="getImagePath(member.image)" :alt="member.name" class="member-photo" />
          <div class="member-info">
            <h3>{{ member.name }} - {{ member.position }}</h3>
            <p>{{ member.description }}</p>
          </div>
        </div>
      </div>
  
      <div class="contact-us">
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need further information, please contact us through the following methods:
          <br />Phone: (61) 0431 666 861
          <br />Email: <a href="mailto:info@ourcharity.org">Bowen@charity.org</a>
        </p>
        <button class="contact-button" @click="contactUs">Contact Us</button>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "AboutUs",
    data() {
      return {
        team: [
          {
            id: 1,
            name: "Mr. Wang",
            position: "Founder & CEO",
            description: "With over 15 years of cross-cultural communication and nonprofit management experience, dedicated to helping immigrant communities.",
            image: "Mr_Wang.webp", // Using relative path
          },
          {
            id: 2,
            name: "Ms. Chen",
            position: "Director of Education",
            description: "An expert in English education, specializing in tailored language courses for medical professionals.",
            image: "Ms_Chen.webp",
          },
          {
            id: 3,
            name: "Ms. Lee",
            position: "Head of Technology",
            description: "Responsible for developing and maintaining our website and application, ensuring efficient platform performance.",
            image: "Ms_Lee.webp",
          },
        ],
      };
    },
    methods: {
      getImagePath(imageName) {
        return new URL(`../assets/${imageName}`, import.meta.url).href;
      },
      contactUs() {
        alert("We will contact you soon!");
      },
    },
  };
  </script>
  
  <style scoped>
  .about-us {
    padding: 40px 20px;
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  }
  
  .about-header {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .about-header h1 {
    font-size: 3em;
    color: #333;
  }
  
  .about-header p {
    font-size: 1.2em;
    color: #555;
    margin: 0 auto;
    max-width: 600px;
  }
  
  .about-vision {
    text-align: center;
    margin: 50px 0;
  }
  
  .about-vision h2 {
    font-size: 2em;
    color: #444;
  }
  
  .about-vision p {
    font-size: 1.1em;
    color: #666;
    margin: 0 auto;
    max-width: 600px;
  }
  
  .about-team {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 40px 0;
  }
  
  .team-member {
    width: 300px;
    text-align: center;
    margin-bottom: 30px;
  }
  
  .member-photo {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-bottom: 15px;
  }
  
  .member-info h3 {
    font-size: 1.5em;
    color: #333;
  }
  
  .member-info p {
    font-size: 1em;
    color: #666;
  }
  
  .contact-us {
    text-align: center;
    margin: 40px 0;
  }
  
  .contact-us h2 {
    font-size: 2em;
    color: #444;
  }
  
  .contact-us p {
    font-size: 1.1em;
    color: #666;
  }
  
  .contact-button {
    background-color: #0066cc;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.2em;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s;
  }
  
  .contact-button:hover {
    background-color: #005bb5;
  }
  </style>
  