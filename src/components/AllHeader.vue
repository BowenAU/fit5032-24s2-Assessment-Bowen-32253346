<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand to="/">MigrantCare</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- 使用 router-link 的导航 -->
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item v-if="!isAuthenticated" to="/login">Log in</b-nav-item>
          <b-nav-item v-if="!isAuthenticated" to="/signup">Sign Up</b-nav-item>

          <!-- Our Services with Sub-navigation -->
          <b-nav-item-dropdown text="Our Services" right>
            <b-dropdown-item to="/service/language-learning">Language Learning</b-dropdown-item>
            <b-dropdown-item to="/service/career-resources">Career Resources</b-dropdown-item>
            <b-dropdown-item to="/service/health-info">Health Information</b-dropdown-item>
            <b-dropdown-item to="/service/cultural-integration">Cultural Integration</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item to="/admin">Admin Panel View Page</b-nav-item>
          <b-nav-item to="/review">Review</b-nav-item>
          <b-nav-item to="/inform">Inform</b-nav-item>
          <b-nav-item to="/about">About us</b-nav-item>
          <b-nav-item to="/findus">Find us</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item href="#">English</b-dropdown-item>
            <b-dropdown-item href="#">Chinese</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
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
      isAuthenticated: false, // 这里可以从 Vuex 或其他全局状态中获取
    };
  },
};
</script>

<style scoped>
/* Add spacing between nav items */
.b-nav-item {
  margin-right: 50px; /* Adjust this value to control the spacing */
}

/* Adjust navbar background color and other styles */
.b-navbar {
  background-color: #007bff; /* 可根据设计需求调整颜色 */
}

/* 调整导航栏字体颜色 */
.b-nav-item a {
  color: white !important;
}

/* 自定义悬停效果 */
.b-nav-item:hover a {
  color: #ffc107 !important; /* 悬停时的颜色 */
}
</style>
