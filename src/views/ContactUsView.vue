<template>
  <div class="contact-us">
    <h1>Contact Us</h1>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <h2>Get in Touch</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="form.name" id="name" placeholder="Your Name" required />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="form.email" id="email" placeholder="Your Email" required />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" placeholder="Your Message" required></textarea>
        </div>

        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>

    <!-- Contact Information -->
    <section class="contact-info-section">
      <h2>Our Contact Information</h2>
      <p><strong>Email:</strong> bowen@migrantcare.org</p>
          <p><strong>Phone:</strong> (61) 0431 666 861</p>
          <p><strong>Address:</strong> Wellington Rd, Clayton VIC 3168</p> 
          <p><strong>Opening hours:</strong> Monday to Friday 8am - 12am</p> 
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <h2>Our Location</h2>

      <!-- Search Bar for Custom Start and End Locations -->
      <div class="search-bar">
        <input v-model="customStart" placeholder="Enter custom start location..." />
        <input v-model="customEnd" placeholder="Enter custom end location..." />
        <button @click="getCustomDirections">Show Custom Route</button>
      </div>

      <!-- Map Container -->
      <div id="map" class="map-container"></div>

      <!-- Directions Section -->
      <div class="directions-section">
        <h3>Get Directions from Current Location</h3>
        <button @click="getDirections">Show Route from Current Location</button>
      </div>
    </section>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      start: '', // 用户的当前位置
      end: [145.1346, -37.9119], // Monash 大学的坐标
      customStart: '', // 用户自定义的开始位置
      customEnd: '', // 用户自定义的结束位置
      map: null,
      marker: null
    }
  },
  methods: {
    submitForm() {
      alert(`Message sent! Name: ${this.form.name}, Email: ${this.form.email}`)
    },
    // 获取用户当前位置并显示路线
    async getDirections() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          this.start = [position.coords.longitude, position.coords.latitude] // 用户当前位置

          const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${this.start};${this.end}?geometries=geojson&access_token=${mapboxgl.accessToken}`
          const response = await axios.get(url)
          const data = response.data.routes[0].geometry

          this.displayRoute(data)
        })
      } else {
        alert('Geolocation is not supported by this browser.')
      }
    },
    // 根据自定义的起点和终点显示路线
    async getCustomDirections() {
      const startPoint = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.customStart}.json?access_token=${mapboxgl.accessToken}`)
      const endPoint = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${this.customEnd}.json?access_token=${mapboxgl.accessToken}`)

      const startCoordiantes = startPoint.data.features[0].center
      const endCoordiantes = endPoint.data.features[0].center

      const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startCoordiantes};${endCoordiantes}?geometries=geojson&access_token=${mapboxgl.accessToken}`
      const response = await axios.get(url)
      const data = response.data.routes[0].geometry

      this.displayRoute(data)
    },
    // 显示路线
    displayRoute(data) {
      if (this.map.getSource('route')) {
        this.map.getSource('route').setData({
          type: 'Feature',
          properties: {},
          geometry: data
        })
      } else {
        this.map.addLayer({
          id: 'route',
          type: 'line',
          source: {
            type: 'geojson',
            data: {
              type: 'Feature',
              properties: {},
              geometry: data
            }
          },
          layout: {
            'line-join': 'round',
            'line-cap': 'round'
          },
          paint: {
            'line-color': '#1db7dd',
            'line-width': 8
          }
        })
      }

      // 自动调整地图视图以显示整个路线
      const coordinates = data.coordinates
      const bounds = coordinates.reduce(
        function (bounds, coord) {
          return bounds.extend(coord)
        },
        new mapboxgl.LngLatBounds(coordinates[0], coordinates[0])
      )

      this.map.fitBounds(bounds, { padding: 50 })
    }
  },
  mounted() {
    // 使用提供的 Mapbox API token
    mapboxgl.accessToken =
      'pk.eyJ1IjoiYm93ZW5mb3I1MDMyIiwiYSI6ImNtMjFsNjJwbDB0aWgycnB3aHMybXozZWYifQ.q911974r6pJP1Q-N4crdhA'

    // 初始化地图
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [145.1346, -37.9119], // Monash 大学 Clayton 校区
      zoom: 12
    })

    // 添加 Monash 大学的标记
    new mapboxgl.Marker().setLngLat([145.1346, -37.9119]).addTo(this.map)
  }
}
</script>

<style scoped>
.contact-us {
  padding: 40px;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  font-size: 2.5em;
  margin-bottom: 20px;
}

.contact-form-section {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 1.2em;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1.1em;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  resize: vertical;
  height: 150px;
}

.submit-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1.2em;
  border-radius: 5px;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #0056b3;
}

.contact-info-section {
  text-align: center;
  margin-top: 40px;
}

.map-section {
  margin-top: 40px;
}

.map-container {
  width: 100%;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
}

.search-bar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-bar input {
  padding: 10px;
  width: 300px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.directions-section {
  margin-top: 20px;
  text-align: center;
}

.directions-section button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.directions-section button:hover {
  background-color: #0056b3;
}
</style>