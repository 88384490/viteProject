<template>
  <el-table
    ref="elTable"
    :border="true"
    :data="data"
    empty-text="暂无数据"
    height="100%"
    style="width: 100%"
    size="mini"
  >
    <el-table-column type="selection" width="55" align="center" />
    <template v-for="(item, index) in columns" :key="index">
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
import { defineComponent, ref, toRefs } from "vue";

export default defineComponent({
  name: "MyTable",
  emits: ["clearSel"],
  props: {
    data: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
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
      default: true,
    },
  },
  setup(props, { emit }) {
    const elTable = ref(null);
    const { data, columns, loading } = toRefs(props);
    const propItem = { data, columns, loading };
    const methods = {
      clearSelection: (): void => {
        (elTable.value as any).clearSelection();
      },
    };
    return { ...methods, elTable, ...propItem };
  },
});
</script>

<style lang="scss" scoped>
@import "./Table.scss";
</style>
