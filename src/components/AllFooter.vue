<template>
    <footer class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <h5>About MigrantCare</h5>
          <ul>
            <li><router-link to="/review">Review</router-link></li>
            <li><router-link to="/askus">Ask Us</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contactus">Contact Us</router-link></li>
            
            
          </ul>
        </div>
        <div class="footer-section">
          <h5>Our Services</h5>
          <ul>
            <li><router-link to="/service/language-learning">Language Learning</router-link></li>
            <li><router-link to="/service/career-resources">Career Resources</router-link></li>
            <li><router-link to="/service/health-info">Health Information</router-link></li>
            <li><router-link to="/service/cultural-integration">Cultural Integration</router-link></li>
          </ul>
        </div>
        <div class="footer-section">
          <h5>Get in Touch</h5>
          <p><strong>Email:</strong> bowen@migrantcare.org</p>
          <p><strong>Phone:</strong> (61) 0431 666 861</p>
          <p><strong>Address:</strong> Wellington Rd, Clayton VIC 3168</p> 
            <p><strong>Opening hours:</strong> Monday to Friday 8am - 12am</p> 
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 S2 FIT5032 Bowen MigrantCare. All Rights Reserved.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'AllFooter'
  }
  </script>
  
  <style scoped>
  .footer-container {
    background-color: #007bff;
    padding: 20px;
    color: white;
    margin-top: 40px; /* 增加顶部外边距，确保与内容有足够的空间 */
  }
  
  .footer-content {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  
  .footer-section {
    margin: 10px 0;
  }
  
  .footer-section h5 {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li {
    margin-bottom: 8px;
  }
  
  .footer-section ul li a {
    color: white;
    text-decoration: none;
  }
  
  .footer-section ul li a:hover {
    text-decoration: underline;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    border-top: 1px solid white;
    padding-top: 10px;
    font-size: 14px; /* 提高文字的可读性 */
  }
  </style>
  