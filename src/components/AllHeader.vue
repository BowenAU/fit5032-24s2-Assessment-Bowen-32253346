<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/" tag="router-link"> MigrantCare </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/" tag="router-link">Home</b-nav-item>
          <b-nav-item v-if="!isAuthenticated" to="/login" tag="router-link">Log in</b-nav-item>
          <b-nav-item v-if="!isAuthenticated" to="/signup" tag="router-link">Sign Up</b-nav-item>

          <!-- Our Services with Sub-navigation -->
          <b-nav-item-dropdown text="Our Services" right>
            <router-link class="dropdown-item" to="/service/language-learning"
              >Language Learning</router-link
            >
            <router-link class="dropdown-item" to="/service/career-resources"
              >Career Resources</router-link
            >
            <router-link class="dropdown-item" to="/service/health-info"
              >Health Information</router-link
            >
            <router-link class="dropdown-item" to="/service/cultural-integration"
              >Cultural Integration</router-link
            >
          </b-nav-item-dropdown>

          <b-nav-item to="/admin" tag="router-link">Admin Panel View Page</b-nav-item>
          <b-nav-item to="/review" tag="router-link">Review</b-nav-item>
          <b-nav-item to="/events" tag="router-link">Events</b-nav-item>
          <b-nav-item to="/about" tag="router-link">About us</b-nav-item>
          <b-nav-item to="/askus" tag="router-link">Ask us</b-nav-item>
          <b-nav-item to="/findus" tag="router-link">Contact us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item>Profile</b-dropdown-item>
            <b-dropdown-item>Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAuthenticated: false // 假设用户未登录
    }
  }
}
</script>


<style scoped>
/* 确保下拉菜单项的背景色与导航栏一致 */
.dropdown-item {
  background-color: #007bff !important; /* 设置背景为蓝色 */
  color: white !important; /* 文字颜色为白色 */
  border: none !important; /* 移除边框 */
  box-shadow: none !important; /* 移除可能的阴影效果 */
  padding: 10px 20px; /* 调整内边距 */
  text-align: left;
}

/* 悬停时的颜色和背景颜色 */
.dropdown-item:hover {
  background-color: #0056b3 !important; /* 悬停时的深蓝色背景 */
  color: #ffc107 !important; /* 悬停时的文字颜色 */
}

/* 确保整个菜单的样式 */
.b-nav-item-dropdown .dropdown-menu {
  background-color: #007bff !important; /* 设置整个下拉菜单背景为蓝色 */
  border: none !important; /* 移除边框 */
  box-shadow: none !important; /* 移除阴影效果 */
}

/* 确保每个菜单项的布局为独立的块 */
.b-nav-item-dropdown .dropdown-item {
  margin: 0 !important; /* 移除间距 */
  padding: 10px 20px; /* 调整内边距 */
  text-align: left;
}

/* 导航栏项目间的间距 */
.b-nav-item {
  margin-right: 50px;
}

/* 导航栏背景色 */
.b-navbar {
  background-color: #007bff !important;
  border-bottom: 2px solid #0056b3; /* 添加底部边框，增强视觉效果 */
}

/* 调整导航项文字颜色 */
.b-nav-item a {
  color: white !important;
  padding: 15px 20px; /* 增加内边距，使导航项看起来更舒展 */
  text-decoration: none; /* 移除下划线 */
}

/* 悬停时导航项的文字颜色 */
.b-nav-item a:hover {
  color: #ffc107 !important; /* 悬停时变为金黄色 */
}

/* 在导航栏中间添加间隔，确保项目布局更加均匀 */
.b-navbar-nav {
  display: flex;
  justify-content: flex-start;
}

</style>
