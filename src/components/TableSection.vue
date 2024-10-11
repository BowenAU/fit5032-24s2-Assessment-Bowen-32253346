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
      <!-- 搜索框：名字 -->
      <Column field="name" header="Name" style="min-width: 12rem" :showFilterMenu="false" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by name"
          />
        </template>
      </Column>
      <!-- 搜索框：性别 -->
      <Column
        field="gender"
        header="Gender"
        style="min-width: 10rem"
        :showFilterMenu="false"
        sortable
      >
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            type="text"
            @input="filterCallback()"
            placeholder="Search by gender"
          />
        </template>
      </Column>
      <Column field="dob" header="DOB" style="min-width: 12rem" sortable></Column>
      <Column field="email" header="Email" style="min-width: 12rem"></Column>
      <!-- 评分 (仅 volunteer) -->
      <Column
        v-if="props.role === 'volunteer'"
        field="rating"
        header="Rating"
        style="min-width: 8rem"
        sortable
      ></Column>
      <Column header="Send Email" style="min-width: 10rem">
        <template #body="{ data }">
          <Button
            label="Send Email"
            @click="sendEmail(data)"
            class="p-button-sm p-button-success"
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
import { ref, watch, computed } from 'vue'
import { FilterMatchMode } from '@primevue/core/api'
import { saveAs } from 'file-saver'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import axios from 'axios'

// props
const props = defineProps({
  role: String
})

const data = ref([])
const selectedData = ref([])
const filters = ref({
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  gender: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const sendEmail = async (user) => {
  //console.log(user.email, user.name)
  try {
    const response = await axios.post('https://sendemail-jph42zefya-uc.a.run.app', {
      email: user.email,
      name: user.name
    })
    alert('Sent')
  } catch (error) {
    console.log('Error sending email', error)
  }
}

const sendEmailsToSelected = () => {
  console.log(selectedData.value)
}

async function fetchData(functionUrl) {
  try {
    const response = await axios.get(functionUrl)
    console.log(response.data)
    data.value = response.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}
// 监视 role 变化来动态加载数据
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

// 过滤后的数据
const filteredData = computed(() => {
  const nameFilter = filters.value.name.value?.toLowerCase() || ''
  const genderFilter = filters.value.gender.value?.toLowerCase() || ''
  return data.value.filter(
    (item) =>
      (!nameFilter || item.name.toLowerCase().startsWith(nameFilter)) &&
      (!genderFilter || item.gender.toLowerCase().startsWith(genderFilter))
  )
})

// 导出 CSV 功能
function exportCSV() {
  const csvData = selectedData.value
    .map((row) =>
      props.role === 'user'
        ? `${row.name},${row.gender},${row.email}`
        : `${row.name},${row.gender},${row.email},${row.rating}`
    )
    .join('\n')

  const blob = new Blob(
    [
      props.role === 'user'
        ? `Name,Gender,Email\n${csvData}`
        : `Name,Gender,Email,Rating\n${csvData}`
    ],
    { type: 'text/csv;charset=utf-8;' }
  )

  saveAs(blob, `${props.role}_data.csv`)
}
</script>

<style scoped>
/* 样式可根据需求修改 */
</style>
