<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- 图片添加到左侧空白区域 -->
      <div class="footer-image">
        <img src="@/assets/MedicalEmergencySymbol.png" alt="Medical Emergency Symbol" />
      </div>
      
      <div class="footer-section">
        <h3>About MigrantCare</h3>
        <ul>
          <li><router-link to="/askus">Ask Us</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contactus">Contact Us</router-link></li>
          <li><router-link to="/review">Give Feedback</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Our Services</h3>
        <ul>
          <li><router-link to="/service/language-learning">Language Learning</router-link></li>
          <li><router-link to="/service/career-resources">Career Resources</router-link></li>
          <li><router-link to="/service/health-info">Health Information</router-link></li>
          <li><router-link to="/service/cultural-integration">Cultural Integration</router-link></li>
        </ul>
      </div>
      
      <div class="footer-section">
        <h3>Get in Touch</h3>
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
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-image {
  display: flex;
  justify-content: flex-start;   /* 使图片靠左对齐 */
  align-items: center;           /* 垂直居中 */
  flex: 1;                       /* 占据左侧空白区域 */
  margin-left: 130px;             /* 增加左外边距，控制图片向右移动的距离 */
}

.footer-image img {
  max-width: 100px; /* 设置图片最大宽度 */
  height: auto;
}

.footer-section {
  flex-grow: 1;                    /* 让内容部分占据剩余的空间 */
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
  font-size: 14px;
  /* 提高文字的可读性 */
}
</style>
