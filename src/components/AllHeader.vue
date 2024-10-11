<template>
    <div class="container">
      <header class="d-flex justify-content-center">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link to="/">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Home</div>
            </router-link>
          </li>
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
            <router-link to="/service">
              <div class="badge text-bg-primary text-wrap">Our Services</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/admin">
              <div class="badge text-bg-primary text-wrap">Admin Panel View Page</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/review">
              <div class="badge text-bg-primary text-wrap" style="width: 6rem">Review</div>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/inform">
              <div class="badge text-bg-primary text-wrap">Inform</div>
            </router-link>   
          </li>
          <li class="nav-item">
            <router-link to="/about">
              <div class="badge text-bg-primary text-wrap">About us</div>
            </router-link>   
          </li>
        </ul>
      </header>
  
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
  