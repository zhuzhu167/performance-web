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
        <el-table-column prop="data" label="任务名称"></el-table-column>
        <el-table-column prop="data" label="类型"></el-table-column>
        <el-table-column prop="data" label="开始时间"></el-table-column>
        <el-table-column prop="data" label="结束时间"></el-table-column>
        <el-table-column prop="data" label="模板名称"></el-table-column>
        <el-table-column prop="data" label="问题反馈"></el-table-column>
        <el-table-column prop="data" label="是否绩效审核"></el-table-column>
        <el-table-column prop="data" label="审核"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="ismod = true">审核</el-button>
            <el-button size="mini" type="danger" @click="iscomf = true">删除</el-button>
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
    <el-dialog title="审核" :visible.sync="ismod" width="50%" center>
      <div class="input-list">
        <div class="input-item">
          <label class="title">任务名称</label>
          <el-input class="input" placeholder="请输入内容" :disabled="true"></el-input>
        </div>
        <div class="input-item">
          <label class="title">模板</label>
          <el-select v-model="value" placeholder="请选择" disabled>
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
          <label class="title">类型</label>
          <el-select v-model="value" placeholder="请选择" disabled>
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="input-item">
          <label class="title">审核</label>
          <el-select v-model="value" placeholder="请选择" disabled>
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
          <el-date-picker type="date" placeholder="选择日期" disabled style="width: 100%;"></el-date-picker>
        </div>
        <div class="input-item">
          <label class="title">结束时间</label>
          <el-date-picker type="date" placeholder="选择日期" disabled style="width: 100%;"></el-date-picker>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="success">模板</el-button>
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" @click="ismod = false">提交</el-button>
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
      isadd: false,
      ismod: false,
      iscomf: false,
      msg: ""
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