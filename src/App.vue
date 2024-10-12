<script setup>
import { RouterView } from 'vue-router'
import AllHeader from './components/AllHeader.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <AllHeader />
  <RouterView />
  <Footer /> 
</template>

<style scoped></style>
