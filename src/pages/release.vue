<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加任务')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div>
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="data" label="任务名称"></el-table-column>
        <el-table-column prop="data" label="类型"></el-table-column>
        <el-table-column prop="data" label="开始时间"></el-table-column>
        <el-table-column prop="data" label="结束时间"></el-table-column>
        <el-table-column prop="data" label="是否绩效审核"></el-table-column>
        <el-table-column label="操作" fixed="right" width="250">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="mod('修改任务')">编辑</el-button>
            <el-button size="mini" type="danger" @click="iscomf = true">删除</el-button>
            <el-button size="mini" type="warning">发起绩效</el-button>
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
    <el-dialog :title="msg" :visible.sync="ismod" width="50%" center>
      <div class="input-list">
        <div class="input-item">
          <label class="title">任务名称</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-item">
          <label class="title">类型</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">开始时间</label>
          <el-date-picker v-model="time1" type="date" placeholder="选择日期"></el-date-picker>
        </div>
        <div class="input-item">
          <label class="title">结束时间</label>
          <el-date-picker v-model="time2" type="date" placeholder="选择日期"></el-date-picker>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" v-if="!isadd" @click="ismod = false">提交</el-button>
        <el-button type="primary" v-if="isadd">添加</el-button>
      </span>
    </el-dialog>
    <el-dialog title="提示" :visible.sync="iscomf" width="30%" center>
      <span>是否确认删除</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="iscomf = false">取 消</el-button>
        <el-button type="warning" @click="iscomf = false">确 定</el-button>
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
      options: [
        {
          value: 1,
          label: "未知"
        }
      ],

      value: "",
      time1: "",
      time2: ""
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>