<template>
    <div class="container">
      <header class="d-flex justify-content-center py-3">
        <ul class="nav nav-pills">
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/login">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Log in</div>
            </router-link>
          </li>
          <li class="nav-item" v-if="!isAuthenticated">
            <router-link to="/signup">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Sign Up</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/homepage">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Home Page</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Admin Panel View Page</div>
            </router-link>
          </li>
        </ul>
      </header>
  
      <!-- Page content based on the current URL -->
      <router-view />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isAuthenticated: false, // Make sure to manage this state accordingly
      };
    },
  };
  </script>
  