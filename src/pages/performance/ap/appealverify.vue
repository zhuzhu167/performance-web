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
        <el-table-column prop="data" label="申述原因"></el-table-column>
        <el-table-column prop="data" label="审核状态"></el-table-column>
        <el-table-column label="操作" fixed="right" width="240">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="openreport()">查看</el-button>
            <el-button size="mini" type="success">提交</el-button>
            <el-button size="mini" type="danger">不通过</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="pages"
      :page-size="10"
      :pager-count="11"
      layout="prev, pager, next"
      :total="200"
    ></el-pagination>
    <el-dialog title="报表" :visible.sync="isreport" width="80%" center top="20px">
      <report></report>
    </el-dialog>
  </div>
</template>
<script>
import report from "@/components/report";
export default {
  data() {
    return {
      tableData: [
        {
          id: "123",
          data: "梁柱"
        }
      ],
      isreport: false
    };
  },
  methods: {},
  components: {
    report
  }
};
</script>
<style scoped>
</style>