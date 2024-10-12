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
      <!-- ID 列，添加搜索框 -->
      <Column field="id" header="ID" style="min-width: 12rem" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            @input="filterCallback()"
            placeholder="Search by ID"
          />
        </template>
      </Column>
      <!-- Email 列，添加搜索框 -->
      <Column field="email" header="Email" style="min-width: 12rem" sortable>
        <template #filter="{ filterModel, filterCallback }">
          <InputText
            v-model="filterModel.value"
            @input="filterCallback()"
            placeholder="Search by Email"
          />
        </template>
      </Column>
      <Column field="role" header="Role" style="min-width: 12rem"></Column>
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

// props
const props = defineProps({
  role: String
})
const { role } = toRefs(props)

const data = ref([])
const selectedData = ref([])
const filters = ref({
  id: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  email: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})

const sendEmailsToSelected = () => {
  console.log(selectedData.value)
}

// 独立数据获取函数
const fetchData = async (functionUrl) => {
  try {
    const response = await axios.get(functionUrl)
    data.value = response.data
    console.log(response)
  } catch (error) {
    console.error('获取数据时出错:', error)
  }
}

// 使用 `watch` 来监视 `role` 变化并获取数据
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

// 使用 `onMounted` 来调用数据获取函数
onMounted(() => {
  fetchData('https://getusers-o2v7rvex2q-uc.a.run.app')
})

// 过滤后的数据
const filteredData = computed(() => {
  const idFilter = filters.value.id.value?.toLowerCase() || ''
  const emailFilter = filters.value.email.value?.toLowerCase() || ''
  return data.value.filter(
    (item) =>
      (!idFilter || item.id.toLowerCase().startsWith(idFilter)) &&
      (!emailFilter || item.email.toLowerCase().startsWith(emailFilter))
  )
})

// 导出 CSV 功能
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
/* Customize styles as needed */
</style>
