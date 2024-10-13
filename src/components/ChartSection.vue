<template>
  <div class="card">
    <!-- Title displays based on the role: User or Volunteer -->
    <h2>{{ role === 'user' ? 'User' : 'Volunteer' }} Charts</h2>

    <!-- Container for displaying charts -->
    <div class="charts-container">
      <!-- Left chart: Bar or Pie chart depending on data -->
      <Chart :type="chartType1" :data="chartData1" :options="chartOptions1" class="chart-item" />
      <!-- Right chart: Pie or Bar chart depending on data -->
      <Chart :type="chartType2" :data="chartData2" :options="chartOptions2" class="chart-item" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import Chart from 'primevue/chart'
import axios from 'axios'

// Props to determine the role, either 'user' or 'volunteer'
const props = defineProps({
  role: String
})

// Chart data and configuration for both charts
const chartData1 = ref({})
const chartData2 = ref({})
const chartType1 = ref('bar') // Default type for the first chart
const chartType2 = ref('pie') // Default type for the second chart
const chartOptions1 = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top' // Legend is positioned at the top
    },
    tooltip: {
      mode: 'index',
      intersect: false // Tooltip displays information on hover
    }
  }
})
const chartOptions2 = ref({
  responsive: true,
  plugins: {
    legend: {
      position: 'top' // Legend is positioned at the top
    }
  }
})

// Function to fetch data from cloud function
async function fetchData(functionUrl) {
  try {
    const response = await axios.get(functionUrl)
    const fetchedData = response.data

    if (props.role === 'user') {
      chartData1.value = {
        labels: fetchedData.map((user) => user.name),
        datasets: [
          {
            label: 'User Age',
            backgroundColor: '#42A5F5',
            data: fetchedData.map(
              (user) => new Date().getFullYear() - new Date(user.dob).getFullYear()
            )
          }
        ]
      }

      const genderDistribution = fetchedData.reduce((acc, user) => {
        acc[user.gender] = (acc[user.gender] || 0) + 1
        return acc
      }, {})

      chartData2.value = {
        labels: Object.keys(genderDistribution),
        datasets: [
          {
            data: Object.values(genderDistribution),
            backgroundColor: ['#42A5F5', '#66BB6A']
          }
        ]
      }
    } else if (props.role === 'volunteer') {
      chartData1.value = {
        labels: fetchedData.map((volunteer) => volunteer.name),
        datasets: [
          {
            label: 'Volunteer Ratings',
            borderColor: '#FF6384',
            backgroundColor: 'rgba(255,99,132,0.2)',
            data: fetchedData.map((volunteer) => volunteer.rating),
            fill: true
          }
        ]
      }

      const genderDistribution = fetchedData.reduce((acc, volunteer) => {
        acc[volunteer.gender] = (acc[volunteer.gender] || 0) + 1
        return acc
      }, {})

      chartData2.value = {
        labels: Object.keys(genderDistribution),
        datasets: [
          {
            data: Object.values(genderDistribution),
            backgroundColor: ['#FF6384', '#36A2EB']
          }
        ]
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

// Watcher to fetch data based on the role change (user or volunteer)
watch(
  () => props.role,
  (newRole) => {
    if (newRole === 'user') {
      fetchData('https://getusers-jph42zefya-uc.a.run.app')
    } else if (newRole === 'volunteer') {
      fetchData('https://getvolunteers-jph42zefya-uc.a.run.app')
    }
  },
  { immediate: true }
)

// Fetch data when the component is mounted
onMounted(() => {
  fetchData('https://getusers-jph42zefya-uc.a.run.app')
})
</script>

<style scoped>
.charts-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.chart-item {
  flex: 1;
  max-width: 45%;
}
</style>
