<template>
  <!-- Footer container wraps all the footer content -->
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Footer image section displaying the Medical Emergency Symbol -->
      <div class="footer-image">
        <img src="@/assets/MedicalEmergencySymbol.png" alt="Medical Emergency Symbol" />
      </div>
      
      <!-- About MigrantCare section links to other pages -->
      <div class="footer-section">
        <h3>About MigrantCare</h3>
        <ul>
          <li><router-link to="/askus">Ask Us</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contactus">Contact Us</router-link></li>
          <li><router-link to="/review">Give Feedback</router-link></li>
        </ul>
      </div>
      
      <!-- Services section listing the available services -->
      <div class="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li><router-link to="/service/language-learning">Language Learning</router-link></li>
          <li><router-link to="/service/career-resources">Career Resources</router-link></li>
          <li><router-link to="/service/health-info">Health Information</router-link></li>
          <li><router-link to="/service/cultural-integration">Cultural Integration</router-link></li>
        </ul>
      </div>
      
      <!-- Get in Touch section providing contact information -->
      <div class="footer-section">
        <h3>Get in Touch</h3>
        <p><strong>Email:</strong> bowen@migrantcare.org</p>
        <p><strong>Phone:</strong> (61) 0431 666 861</p>
        <p><strong>Address:</strong> Wellington Rd, Clayton VIC 3168</p>
        <p><strong>Opening hours:</strong> Monday to Sunday, 9am - 5pm</p>
      </div>
    </div>
    
    <!-- Footer bottom with copyright notice -->
    <div class="footer-bottom">
      <p>&copy; 2024 S2 FIT5032 Bowen MigrantCare. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AllFooter' // Name of the footer component
}
</script>

<style scoped>
/* Styles for the footer container */
.footer-container {
  background-color: #007bff;
  padding: 20px;
  color: white;
}

/* Layout styles for the footer content */
.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

/* Styling for the image in the footer */
.footer-image {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  margin-left: 130px;
}

.footer-image img {
  max-width: 100px;
  height: auto;
}

/* General styles for the footer sections */
.footer-section {
  flex-grow: 1;
  margin: 10px 0;
}

/* Styling for the section headings */
.footer-section h5 {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
}

/* Resetting default list styles and padding */
.footer-section ul {
  list-style-type: none;
  padding: 0;
}

/* Styling for the list items */
.footer-section ul li {
  margin-bottom: 8px;
}

/* Styling for the links within the list */
.footer-section ul li a {
  color: white;
  text-decoration: none;
}

/* Adding hover effect to links */
.footer-section ul li a:hover {
  text-decoration: underline;
}

/* Styling for the footer bottom section */
.footer-bottom {
  text-align: center;
  margin-top: 20px;
  border-top: 1px solid white;
  padding-top: 10px;
  font-size: 14px;
}
</style>
