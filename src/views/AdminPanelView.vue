<template>
  <div class="mt-5 row">
    <div class="col-md-10 offset-md-1">
      <h1 class="text-center">Admin Panel</h1>
      <Menubar :model="items" />
      <div v-if="activeSection === 'table'">
        <TableSection :role="activeRole" />
      </div>
      <div v-if="activeSection === 'chart'">
        <ChartSection :role="activeRole" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Menubar from 'primevue/menubar' 
import TableSection from '../components/TableSection.vue' 

const items = [
  {
    label: 'Table',
    items: [
      {
        label: 'All User',
        command: () => {
          activeSection.value = 'table'
          activeRole.value = 'user'
        }
      },
      {
        label: 'Volunteer',
        command: () => {
          activeSection.value = 'table'
          activeRole.value = 'volunteer'
        }
      }
    ]
  }
]

const activeSection = ref('table')
const activeRole = ref('user')
</script>

<style scoped></style>
