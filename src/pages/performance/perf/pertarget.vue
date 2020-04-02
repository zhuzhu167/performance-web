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
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加个人绩效目标')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="name" label="用户姓名"></el-table-column>
        <el-table-column prop="hlevel" label="考核维度"></el-table-column>
        <el-table-column prop="hlevel" label="绩效指标"></el-table-column>
        <el-table-column prop="hlevel" label="指标定义"></el-table-column>
        <el-table-column prop="hlevel" label="评估标准"></el-table-column>
        <el-table-column prop="hlevel" label="未达成"></el-table-column>
        <el-table-column prop="hlevel" label="底线"></el-table-column>
        <el-table-column prop="hlevel" label="达标"></el-table-column>
        <el-table-column prop="hlevel" label="挑战"></el-table-column>
        <el-table-column prop="hlevel" label="分项权重"></el-table-column>
        <el-table-column prop="hlevel" label="指标定义"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="mod('修改个人绩效目标')">编辑</el-button>
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
    <pertargetlog @Cancel="cancel" :isMod.sync="ismod" :isAdd.sync="isadd" :Msg.sync="msg"></pertargetlog>
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
import pertargetlog from "@/components/pertargetlog";
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
      value: ""
    };
  },
  methods: {},
  components: {
    pertargetlog
  }
};
</script>
<style scoped>
</style>