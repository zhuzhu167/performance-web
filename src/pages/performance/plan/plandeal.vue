<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="data" label="用户姓名"></el-table-column>
        <el-table-column prop="data" label="任务名称"></el-table-column>
        <el-table-column prop="data" label="评分"></el-table-column>
        <el-table-column prop="data" label="计划内容"></el-table-column>
        <el-table-column prop="data" label="状态"></el-table-column>
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