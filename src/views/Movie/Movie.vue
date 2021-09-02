<template>
  <div id="movie">
    <div class="button-group">
      <el-button size="mini" class="add-btn" @click="handleAddMovieData"
        >新增</el-button
      >
      <el-button size="mini" class="del-btn">批量删除</el-button>
      <el-button size="mini" class="enable-btn">批量启动</el-button>
      <el-button size="mini" class="disabled-btn">批量停用</el-button>
    </div>
    <div>
      <MyTable :data="data" :columns="columns">
        <template #action>
          <el-button class="del-table-btn" size="mini" type="text"
            >删除</el-button
          >
          <el-button
            class="edit-table-btn"
            size="mini"
            type="text"
            @click="handleEditMovieData"
            >编辑</el-button
          >
        </template>
      </MyTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import MyTable from "/@/components/table/Table.vue"
import MyModal from "/@/components/modal/Dialog.vue"
import { PaginationProp } from "/@/interface"
import { columns } from "/@/views/Movie/Movie"
import { MovieTableColumns } from "/@/interface/movie"
import { reactive, ref } from "vue"
import { Router, useRouter } from "vue-router"

const router: Router = useRouter()

const data: MovieTableColumns[] = reactive([
  {
    movieName: "test",
    type: "test",
    year: "test",
    runtime: 167,
    userRating: 2,
    userNumber: 43,
    principalCsat: "刘德华",
  },
])

const handleShowModal = (show: boolean) => {
  // dialogVisible.value = show
}

const handleAddMovieData = () => {
  router.push({ path: "/movieForm/" })
}

const handleEditMovieData = (row: MovieTableColumns) => {
  const { id } = row
  router.push({ path: "/movieForm/", query: { plan: "private" } })
}
</script>

<style lang="scss" scoped>
@import "../../components/table/Table";
@import "../../assets/style/Movie";
</style>
