<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <!-- page layout -->
  <!-- navbar -->
  <RouterLink to="/login">
    <div class="badge text-bg-primary text-wrap" style="width: 6rem;">
      Log in
    </div>
  </RouterLink>
  <RouterLink to="/signup">
    <div class="badge text-bg-primary text-wrap" style="width: 6rem;">
      Sign Up
    </div>
  </RouterLink>
  <RouterLink to="/">
    <div class="badge text-bg-primary text-wrap" style="width: 6rem;">
      Home Page
    </div>
  </RouterLink>
  <!-- page content based on current url -->
  <RouterView />
</template>

<style scoped></style>