<template>
    <pre>{{ jsonData }}</pre>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  
  const jsonData = ref()
  
  const fetchData = async (functionUrl) => {
    try {
      const response = await axios.get(functionUrl)
      jsonData.value = response.data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  
  onMounted(() => {
    fetchData('https://getvolunteers-o2v7rvex2q-uc.a.run.app')
  })
  </script>
  
  <style scoped>
  /* Customize styles as needed */
  </style>
  