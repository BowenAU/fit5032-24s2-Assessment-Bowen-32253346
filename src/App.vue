<script setup>
import { RouterView } from 'vue-router'
import AllHeader from './components/AllHeader.vue'
import AllFooter from './components/AllFooter.vue'
</script>

<template>
  <AllHeader />
  <RouterView />
  <AllFooter />
</template>

<style scoped></style>
