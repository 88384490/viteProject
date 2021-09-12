<template>
  <el-table
    ref="elTable"
    :border="true"
    :data="data"
    v-loading="loading"
    empty-text="暂无数据"
    height="height"
    style="width: 100%"
    size="mini"
    @selection-change="handleSelect"
  >
    <el-table-column
      v-if="isMultiSel"
      type="selection"
      width="55"
      align="center"
    />
    <template v-for="item in columns" :key="item.prop">
      <el-table-column
        :label="item.label"
        :prop="item.prop"
        :width="item.width"
        :min-width="item.minWidth"
        :align="item.align"
      >
        <template #default="scope">
          <slot v-if="item.slot" :name="item.name" :row="scope.row" />
          <span
            v-else
            v-html="
              item.format
                ? item.format(scope.row, item.prop)
                : scope.row[item.prop]
            "
          ></span>
        </template>
      </el-table-column>
    </template>
  </el-table>
  <div :style="{ marginTop: '15px' }">
    <slot name="pagination" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, reactive, toRefs } from "vue"

export default defineComponent({
  name: "MyTable",
  emits: ["clearSel", "batchSelect"],
  props: {
    data: {
      type: Array as PropType<any[]>,
      required: true,
    },
    columns: {
      type: Array as PropType<any[]>,
      required: true,
    },
    isMultiSel: {
      type: Boolean,
      default: true,
    },
    highlightCurrentRow: {
      type: Boolean,
      required: false,
      default: false,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    height: { type: Number, required: false },
  },
  setup(props, { emit }) {
    const elTable = ref(null)
    const { data, columns, loading, isMultiSel } = toRefs(props)
    const propItem = {
      data,
      columns,
      loading,
      isMultiSel,
    }
    const _data = {
      tableHeaderStyle: {
        backgroundColor: "#6c757d",
      },
      selectData: [],
    }
    const methods = {
      clearSelection: (): void => {
        ;(elTable.value as any).clearSelection()
      },
      batchSelectAll: (): void => {
        ;(elTable.value as any).clearSelection()
      },
      handleSelect: (selection: any): void => {
        Object.assign(_data, { selectData: selection })
        emit("batchSelect", _data.selectData)
      },
    }
    return { ...methods, elTable, ...propItem, ..._data }
  },
})
</script>
<style lang="scss" scoped>
@import "./Table.scss";
</style>
