<template>
  <div :style="{ padding: '20px' }">
    <div class="button-group">
      <el-button-group>
        <el-button size="mini" class="add-btn">新增</el-button>
        <el-button size="mini" class="del-btn">批量删除</el-button>
        <el-button size="mini" @click="batchEnableOrDisable(true)"
          >批量启动</el-button
        >
        <el-button size="mini" @click="batchEnableOrDisable(false)"
          >批量停用</el-button
        >
      </el-button-group>
    </div>
    <MyTable :data="data" :columns="columns" ref="myTable">
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
          >禁用
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
import { ref, reactive } from "vue";
import MyTable from "@/components/table/Table.vue";
import { PaginationProp } from "@/store/interface";

const myTable = ref(null);
const data = reactive([
  {
    name: "咩咩",
    huyaId: "2222",

    startTime: "2021-8-28",
    fanNumber: "25300",

    enabled: false,
  },
]);
const columns = ref([
  { label: "主播名", prop: "name" },
  { label: "虎牙号", prop: "huyaId" },
  {
    label: "最后开播时间",
    prop: "startTime",
  },
  { label: "粉丝数量", prop: "fanNumber" },
  {
    label: "操作",
    slot: true,
    name: "action",
    width: 200,
  },
]);
const pagination: PaginationProp = reactive({
  size: 20,
  total: 100,
  currentPage: 5,
  layout: "prev, pager, next, sizes, jumper, ->,total",
});

const handleEnable = (boll: boolean, row: any) => {
  console.log(row);
  row.enable = boll;
};

const batchEnableOrDisable = () => {
  console.log(myTable.value);
};
</script>

<style lang="scss" scoped>
@import "src/components/table/Table.scss";
</style>
