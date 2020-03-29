<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加申诉')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="data" label="用户姓名"></el-table-column>
        <el-table-column prop="data" label="任务名称"></el-table-column>
        <el-table-column prop="data" label="申述原因"></el-table-column>
        <el-table-column prop="data" label="审核状态"></el-table-column>
      </el-table>
    </div>
    <el-pagination
      class="pages"
      :page-size="10"
      :pager-count="11"
      layout="prev, pager, next"
      :total="200"
    ></el-pagination>
    <el-dialog :title="msg" :visible.sync="ismod" width="50%" center>
      <div class="input-list">
        <div class="input-item">
          <label class="title">申诉原因</label>
          <el-select v-model="value" placeholder="请输入内容">
            <el-option label="绩效" value="shanghai"></el-option>
            <el-option label="绩效任务" value="beijing"></el-option>
          </el-select>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <div class="item-textarea-label">
            <label class="title">任务</label>
          </div>
          <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" v-if="!isadd" @click="ismod = false">提交</el-button>
        <el-button type="primary" v-if="isadd">添加</el-button>
      </span>
    </el-dialog>
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
      ],
      isadd: false,
      ismod: false,
      iscomf: false,
      msg: "",
      value: ""
    };
  },
  methods: {
    add(msg) {
      this.isadd = true;
      this.ismod = true;
      this.msg = msg;
    },
    mod(msg) {
      this.ismod = true;
      this.msg = msg;
    },
    cancel() {
      this.isadd = false;
      this.ismod = false;
    }
  }
};
</script>
<style scoped>
</style>