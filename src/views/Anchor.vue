<template>
  <div id="anchor">
    <div class="button-group">
      <el-button size="mini" class="add-btn">新增</el-button>
      <el-button size="mini" class="del-btn">批量删除</el-button>
      <el-button
        size="mini"
        class="enable-btn"
        @click="batchEnableOrDisable(true)"
        >批量启动</el-button
      >
      <el-button
        size="mini"
        class="disabled-btn"
        @click="batchEnableOrDisable(false)"
        >批量停用</el-button
      >
    </div>
    <MyTable :data="data" :columns="columns" ref="myTable">
      <template #status="{ row }">
        <span v-if="row.status" class="enable-status">{{ row.status }}</span>
        <span v-else class="disabled-status">{{ row.status }}</span></template
      >
      <template #action="{ row }">
        <el-button class="del-table-btn" size="mini" type="text" @click="clear"
          >删除
        </el-button>
        <el-button class="edit-table-btn" size="mini" type="text"
          >编辑</el-button
        >
        <el-button
          v-if="!row.enable"
          class="enable-table-btn"
          size="mini"
          type="text"
          @click="handleEnable(true, row)"
          >启动
        </el-button>
        <el-button
          v-else
          class="disabled-table-btn"
          size="mini"
          type="text"
          @click="handleEnable(false, row)"
          >停用
        </el-button>
      </template>
      <template #pagination>
        <el-pagination
          :small="true"
          :page-size="pagination.size"
          :total="pagination.total"
          :current-page="pagination.currentPage"
          :layout="pagination.layout"
        />
      </template>
    </MyTable>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue"
import MyTable from "/@/components/table/Table.vue"
import { PaginationProp } from "../interface"
import { columns, pagination } from "./event/Anchor"

const myTable = ref(null)
const data = reactive([
  {
    name: "咩咩",
    huyaId: "2222",
    startTime: "2021-8-28",
    fanNumber: "25300",
    status: false,
    enabled: false,
  },
])

const handleEnable = (boll: boolean, row: any) => {
  row.enable = boll
  row.status = !boll
}

const batchEnableOrDisable = () => {
  console.log(myTable)
}
</script>

<style lang="scss" scoped>
@import "src/components/table/Table.scss";
@import "src/assets/style/Anchor.scss";
</style>
