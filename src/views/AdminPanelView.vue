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
import Menubar from 'primevue/menubar' // 按需导入 Menubar 组件
import TableSection from '../components/TableSection.vue' // 按需导入表格组件
import ChartSection from '../components/ChartSection.vue' // 按需导入图表组件

const items = [
  {
    label: 'Table',
    items: [
      {
        label: 'User',
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
  },
  {
    label: 'Chart',
    items: [
      {
        label: 'User',
        command: () => {
          activeSection.value = 'chart'
          activeRole.value = 'user'
        }
      },
      {
        label: 'Volunteer',
        command: () => {
          activeSection.value = 'chart'
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
