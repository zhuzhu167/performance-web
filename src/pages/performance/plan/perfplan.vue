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
        <el-table-column label="操作" fixed="right" width="180">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="mod('定制计划')">定制计划</el-button>
            <el-button size="mini" type="primary" @click="openreport()">查看</el-button>
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
    <el-dialog title="定制计划" :visible.sync="ismod" width="50%" center>
      <div class="input-list">
        <div class="input-item">
          <div class="item-textarea-label">
            <label class="title">计划</label>
          </div>
          <el-input type="textarea" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="ismod = false">提交</el-button>
      </span>
    </el-dialog>
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

      isreport: false,
      msg: ""
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