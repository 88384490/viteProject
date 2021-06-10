<template>
  <div class="form-container">
    <el-form :model="formData" label-width="80px" size="mini">
      <el-form-item label="projectId" prop="projectId">
        <el-input v-model="formData.projectId" />
      </el-form-item>
      <el-form-item label="text" prop="text">
        <el-input v-model="formData.text" />
      </el-form-item>
    </el-form>
    <el-button size="mini" type="primary" @click="submit">提交</el-button>
    <el-button size="mini">重置</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import $ from "jquery";

export default defineComponent({
  name: "Form",
  setup() {
    const { ajax } = $;
    const formData = reactive({
      projectId: "8247",
      text: "",
      data: "",
    });
    function submit() {
      ajax({
        method: "post",
        url: "http://127.0.0.1:7001/icbu/getDatasetConfig",
        data: {
          projectId: "8427",
        },
        success: function (data) {
          console.log(data);
        },
      });
    }
    return {
      formData,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.form-container {
  width: 900px;
  margin: 0 auto;
}
</style>
