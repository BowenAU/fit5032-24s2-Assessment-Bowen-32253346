<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">MigrantCare</router-link>
    </div>
    <ul class="navbar-menu">
      <li><router-link to="/">Home</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/login">Log in</router-link></li>
      <li v-if="!isAuthenticated"><router-link to="/signup">Sign Up</router-link></li>

      <li class="dropdown">
        <span>Our Services</span>
        <ul class="dropdown-menu">
          <li><router-link to="/service/language-learning">Language Learning</router-link></li>
          <li><router-link to="/service/career-resources">Career Resources</router-link></li>
          <li><router-link to="/service/health-info">Health Information</router-link></li>
          <li><router-link to="/service/cultural-integration">Cultural Integration</router-link></li>
        </ul>
      </li>

      <li><router-link to="/admin">Admin Panel View Page</router-link></li>
      <li><router-link to="/review">Review</router-link></li>
      <li><router-link to="/events">Events</router-link></li>
      <li><router-link to="/about">About us</router-link></li>
      <li><router-link to="/askus">Ask us</router-link></li>
      <li><router-link to="/contactus">Contact us</router-link></li>
    </ul>
    <div class="navbar-right">
      <input type="text" placeholder="Search" v-model="searchQuery" />
      <button @click="performSearch">Search</button>
      <div class="user-dropdown">
        <span>User</span>
        <ul class="user-dropdown-menu">
          <li>Profile</li>
          <li>Sign Out</li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false, // 假设用户未登录
      searchQuery: ""
    };
  },
  methods: {
    performSearch() {
      console.log("Search for:", this.searchQuery);
    }
  }
};
</script>

<style scoped>
/* 导航栏样式 */
.navbar {
  background-color: #0074cc; /* 蓝色背景，增强对比度 */
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 品牌样式 */
.navbar-brand a {
  color: white;
  font-size: 24px;
  text-decoration: none;
}

/* 导航菜单样式 */
.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-right: 20px;
}

.navbar-menu li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
}

.navbar-menu li a:hover {
  color: #ffcc33; /* 调整后的金色悬停文字，确保足够的对比度 */
}

/* 下拉菜单样式 */
.dropdown {
  position: relative;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #0074cc; /* 与导航栏一致的背景 */
  list-style: none;
  padding: 0;
  margin: 0;
  width: 200px; /* 增加固定宽度，确保子栏目对齐 */
}

.dropdown-menu li {
  padding: 10px 20px;
  text-align: left; /* 确保文字对齐 */
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li a {
  color: white;
  text-decoration: none;
}

.dropdown-menu li a:hover {
  color: #ffcc33;
}

/* 搜索和用户部分 */
.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right input {
  padding: 5px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.navbar-right button {
  padding: 5px 10px;
  background-color: #ffcc33; /* 调整为符合对比度要求的金色 */
  border: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
}

.navbar-right button:hover {
  background-color: #ff9933; /* 加深悬停时的颜色 */
}

/* 用户下拉菜单样式 */
.user-dropdown {
  position: relative;
  margin-left: 20px;
  color: white;
  cursor: pointer;
}

.user-dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #0074cc;
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-dropdown-menu li {
  padding: 10px 20px;
}

.user-dropdown:hover .user-dropdown-menu {
  display: block;
}

.user-dropdown-menu li:hover {
  background-color: #0056b3; /* 调整后的悬停颜色，增强对比度 */
}
</style>
