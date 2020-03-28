<template>
  <div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="部门"></el-table-column>
        <el-table-column prop="data" label="总分数"></el-table-column>
        <el-table-column prop="data" label="等级A"></el-table-column>
        <el-table-column prop="data" label="等级B"></el-table-column>
        <el-table-column prop="data" label="等级C"></el-table-column>
        <el-table-column prop="data" label="等级D"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="pages"
      :page-size="10"
      :pager-count="11"
      layout="prev, pager, next"
      :total="200"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "123",
          data: "梁柱"
        }
      ]
    };
  }
};
</script>
<style scoped>
</style>