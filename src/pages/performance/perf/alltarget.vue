<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <div class="head-item"></div>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加绩效目标')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="用户姓名"></el-table-column>
        <el-table-column prop="weidi" label="考核维度"></el-table-column>
        <el-table-column prop="hlevel" label="绩效指标"></el-table-column>
        <el-table-column prop="hlevel" label="指标定义"></el-table-column>
        <el-table-column prop="hlevel" label="评估标准"></el-table-column>
        <el-table-column prop="hlevel" label="未达成"></el-table-column>
        <el-table-column prop="hlevel" label="底线"></el-table-column>
        <el-table-column prop="hlevel" label="达标"></el-table-column>
        <el-table-column prop="hlevel" label="挑战"></el-table-column>
        <el-table-column prop="hlevel" label="分项权重"></el-table-column>
        <el-table-column prop="hlevel" label="指标定义"></el-table-column>
        <el-table-column label="操作" fixed="right" width="220">
          <template slot-scope="scope">
            <el-button size="mini" type="success" @click="isver = true">审核</el-button>
            <el-button size="mini" type="primary" @click="mod('修改绩效')">编辑</el-button>
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
    <el-dialog :show-close="false" title="审核" :visible.sync="isver" width="50%" center>
      <div class="input-list">
        <div class="input-item input-list-item input-select">
          <label class="title">审核</label>
          <el-select v-model="value" placeholder="请输入内容">
            <el-option label="通过" value="shanghai"></el-option>
            <el-option label="不通过" value="beijing"></el-option>
          </el-select>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <div class="item-textarea-label">
            <label class="title">不通过原因</label>
          </div>
          <el-input type="textarea" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isver = false">取 消</el-button>
        <el-button type="primary">提交</el-button>
      </span>
    </el-dialog>
    <alltargetlog :ismod.sync="ismod" :isadd.sync="isadd" :msg.sync="msg"></alltargetlog>
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
import alltargetlog from "@/components/alltargetlog";
export default {
  data() {
    return {
      tableData: [
        {
          id: "123",
          name: "开发部",
          hlevel: "项目经理"
        }
      ],
      options: [
        {
          value: 1,
          label: "未知"
        }
      ],
      value: "",
      isadd: false,
      ismod: false,
      iscomf: false,
      msg: "",
      isver: false
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
    },
    getadd(isadd) {
      this.add = isadd;
    },
    getmod(ismod) {
      this.mod = ismod;
    },
    getmsg(msg) {
      this.msg = msg;
    }
  },
  components: {
    alltargetlog
  }
};
</script>
<style scoped>
</style>