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
          <b-nav-item to="/inform" tag="router-link">Inform</b-nav-item>
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

          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item>English</b-dropdown-item>
            <b-dropdown-item>Chinese</b-dropdown-item>
          </b-nav-item-dropdown>

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
  display: block;
  text-align: left;
}

/* 悬停时的颜色和背景颜色 */
.dropdown-item:hover {
  background-color: #0056b3 !important; /* 深蓝色背景 */
  color: #ffc107 !important; /* 悬停时的文字颜色 */
}

/* 移除整个菜单的白色边框 */
.b-nav-item-dropdown .dropdown-menu {
  border: none !important; /* 移除下拉菜单的边框 */
  box-shadow: none !important; /* 移除阴影 */
}

/* 确保菜单项的布局为单独的块 */
.b-nav-item-dropdown .dropdown-item {
  margin: 0 !important;
}

/* 导航栏项目间的间距 */
.b-nav-item {
  margin-right: 20px;
}

/* 确保导航栏背景色 */
.b-navbar {
  background-color: #007bff !important;
}

/* 调整导航项的文字颜色 */
.b-nav-item a {
  color: white !important;
}

/* 悬停时的文字颜色 */
.b-nav-item a:hover {
  color: #ffc107 !important;
}
</style>
