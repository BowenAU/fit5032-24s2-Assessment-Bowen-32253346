<template>
  <section class="about-us">
    <div class="about-header">
      <h1>About Us</h1>
      <p>
        We are a nonprofit organization dedicated to helping Chinese immigrants in Australia with
        their health and career development. We provide medical-related English learning resources
        and career guidance to help the Chinese community overcome language barriers and employment
        challenges.
      </p>
    </div>

    <div class="about-vision">
      <h2>Our Vision</h2>
      <p>
        To create a supportive community for Chinese immigrants, helping them adapt to Australian
        society and offering opportunities in the health industry.
      </p>
    </div>

    <div class="about-team">
      <h2>Our Team</h2>
      <div class="team-member" v-for="member in team" :key="member.id">
        <img :src="getImagePath(member.image)" :alt="member.name" class="member-photo" />
        <div class="member-info">
          <h3>{{ member.name }} - {{ member.position }}</h3>
          <p>{{ member.description }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'AboutUs',
  data() {
    return {
      team: [
        {
          id: 1,
          name: 'Mr. Wang',
          position: 'Founder & CEO',
          description:
            'With over 15 years of cross-cultural communication and nonprofit management experience, dedicated to helping immigrant communities.',
          image: 'Mr_Wang.webp'
        },
        {
          id: 2,
          name: 'Ms. Chen',
          position: 'Director of Education',
          description:
            'An expert in English education, specializing in tailored language courses for medical professionals.',
          image: 'Ms_Chen.webp'
        },
        {
          id: 3,
          name: 'Ms. Lee',
          position: 'Head of Technology',
          description:
            'Responsible for developing and maintaining our website and application, ensuring efficient platform performance.',
          image: 'Ms_Lee.webp'
        }
      ]
    }
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`../assets/${imageName}`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
.about-us {
  padding: 60px 20px;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(135deg, #e0f7fa, #b2ebf2);
}

.about-header {
  text-align: center;
  margin-bottom: 50px;
}

.about-header h1 {
  font-size: 3.5em;
  color: #00796b;
}

.about-header p {
  font-size: 1.3em;
  color: #004d40;
  margin: 0 auto;
  max-width: 700px;
}

.about-vision {
  text-align: center;
  margin: 60px 0;
}

.about-vision h2 {
  font-size: 2.5em;
  color: #00796b;
}

.about-vision p {
  font-size: 1.2em;
  color: #004d40;
  margin: 0 auto;
  max-width: 650px;
}

.about-team {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 50px 0;
}

.team-member {
  width: 280px;
  text-align: center;
  margin-bottom: 40px;
}

.member-photo {
  border-radius: 50%;
  width: 160px;
  height: 160px;
  object-fit: cover;
  margin-bottom: 20px;
  border: 3px solid #004d40;
}

.member-info h3 {
  font-size: 1.6em;
  color: #00695c;
}

.member-info p {
  font-size: 1.1em;
  color: #004d40;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2.8em;
  }

  .about-header p {
    font-size: 1.1em;
  }

  .about-vision h2 {
    font-size: 2.2em;
  }

  .about-vision p {
    font-size: 1em;
  }

  .team-member {
    width: 100%;
    padding: 20px;
  }
}
</style>
