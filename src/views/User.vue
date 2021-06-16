<template>
  <div :style="{ padding: '20px' }">
    <div class="button-group">
      <el-button-group>
        <el-button size="mini" @click="handleAdd">新增</el-button>
        <el-button size="mini">批量删除</el-button>
        <el-button size="mini">批量启动</el-button>
        <el-button size="mini">批量停用</el-button>
      </el-button-group>
    </div>
    <MyTable :data="data" :columns="columns" ref="myTable">
      <template v-slot:action>
        <el-link size="mini" type="danger" @click="clear">222</el-link>
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

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import MyTable from "@/components/table/Table.vue";
import { PaginationProp } from "@/store/interface/Pagination";

export default defineComponent({
  name: "User",
  components: {
    MyTable,
  },
  async setup() {
    const { push: routerPush } = useRouter();
    const myTable = ref(null);
    const data = ref([]);
    const columns = ref([
      {
        label: "用户",
        prop: "userName1",
      },
      {
        label: "角色",
        prop: "role",
      },
      {
        label: "注册时间",
        prop: "createTime",
      },
      {
        label: "更新时间",
        prop: "updatedTime",
      },
      {
        label: "操作",
        slot: true,
        name: "action",
        align: "right",
        width: "150px",
      },
    ]);
    const pagination: PaginationProp = reactive({
      size: 20,
      total: 100,
      currentPage: 5,
      layout: "prev, pager, next, sizes, jumper, ->, total",
    });
    const methods = {
      clear() {
        const table = myTable.value as any;
        table.clearSelection();
      },
      handleAdd() {
        console.log("add");
      },
    };
    const datas = {
      data,
      columns,
    };
    return {
      pagination,
      ...methods,
      ...datas,
    };
  },
});
</script>

<style lang="scss" scoped>
.button-group {
  margin-bottom: 10px;
}
</style>
