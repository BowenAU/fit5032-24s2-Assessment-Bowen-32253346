<script setup>
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import { useRoute } from 'vue-router'
import AllHeader from './components/AllHeader.vue'
import AllFooter from './components/AllFooter.vue'
const route = useRoute()
const showHeader = computed(() => {
  return !route.path.includes('API')
})
</script>

<template>
  <AllHeader v-if="showHeader" />
  <RouterView />
  <AllFooter v-if="showHeader" />
</template>

<style scoped></style>
