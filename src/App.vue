<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- page layout -->
  <!-- navbar -->
  <RouterLink to="/login">Login</RouterLink>
  <RouterLink to="/signup">Sign Up</RouterLink>
  <RouterLink to="/">Home Page</RouterLink>
  <!-- page content based on current url -->
  <RouterView />
</template>

<style scoped></style>