<template>
  <div class="card">
    <DataTable
      v-model:filters="filters"
      v-model:selection="selectedData"
      :value="filteredData"
      paginator
      :rows="10"
      dataKey="id"
      filterDisplay="row"
    >
      <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
      <Column field="id" header="ID" style="min-width: 12rem" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            @input="filterCallback()"
            placeholder="Search by ID"
          />
        </template>
      </Column>
      <Column field="email" header="Email" style="min-width: 12rem" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            @input="filterCallback()"
            placeholder="Search by Email"
          />
        </template>
      </Column>
  
      <Column field="role" header="Role" style="min-width: 12rem" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            @input="filterCallback()"
            placeholder="Search by Role"
          />
        </template>
      </Column>
    </DataTable>

    <div class="mt-3">
      <Button label="Export to CSV" @click="exportCSV" :disabled="!selectedData.length" />
      <Button
        label="Send Email to Selected"
        class="ml-2 p-button-warning"
        @click="sendEmailsToSelected"
        :disabled="!selectedData.length"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed, onMounted, toRefs } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import { saveAs } from 'file-saver'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import axios from 'axios'
import emailjs from 'emailjs-com'

emailjs.init('woIvKzjWPZjbeCrVo')

const props = defineProps({
  role: String
})
const { role } = toRefs(props)

const data = ref([])
const selectedData = ref([])
const filters = ref({
  id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  role: { value: null, matchMode: FilterMatchMode.CONTAINS } 
})

const sendEmailsToSelected = async () => {
  if (selectedData.value.length > 0) {
    try {
      const emailPromises = selectedData.value.map((item) => {
        return emailjs.send(
          'service_Bowen5032',
          'template_emqvjc3',
          {
            to_name: item.id,
            from_name: 'FIT5032_Bowen',
            message: 'We hope this message finds you well! We wanted to let you know that we will be holding offline events in the near future. To learn more about this event, please visit our website!',
            to_email: item.email
          }
        )
      })

      await Promise.all(emailPromises)
      alert('Emails sent successfully!')
    } catch (error) {
      console.log(error)
      alert('Failed to send email. Please try again later.')
    }
  } else {
    alert('Please select at least one user to send emails.')
  }
}

const fetchData = async (functionUrl) => {
  try {
    const response = await axios.get(functionUrl)
    data.value = response.data
    console.log(response)
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

watch(
  () => role.value,
  (newRole) => {
    if (newRole === 'user') {
      fetchData('https://getusers-o2v7rvex2q-uc.a.run.app')
    } else if (newRole === 'volunteer') {
      fetchData('https://getvolunteers-o2v7rvex2q-uc.a.run.app')
    }
  },
  { immediate: true }
)

onMounted(() => {
  fetchData('https://getusers-o2v7rvex2q-uc.a.run.app')
})

const filteredData = computed(() => {
  const idFilter = filters.value.id.value?.toLowerCase() || ''
  const emailFilter = filters.value.email.value?.toLowerCase() || ''
  const roleFilter = filters.value.role.value?.toLowerCase() || ''
  return data.value.filter(
    (item) =>
      (!idFilter || item.id.toLowerCase().startsWith(idFilter)) &&
      (!emailFilter || item.email.toLowerCase().startsWith(emailFilter)) &&
      (!roleFilter || item.role.toLowerCase().includes(roleFilter))
  )
})

function exportCSV() {
  const csvData = selectedData.value
    .map((row) =>
      role.value === 'user'
        ? `${row.id},${row.email},${row.role}`
        : `${row.id},${row.email},${row.role},${row.rating}`
    )
    .join('\n')

  const blob = new Blob(
    [role.value === 'user' ? `ID,Email,Role\n${csvData}` : `ID,Email,Role,Rating\n${csvData}`],
    { type: 'text/csv;charset=utf-8;' }
  )

  saveAs(blob, `${role.value}_data.csv`)
}
</script>

<style scoped>
</style>
