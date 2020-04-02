<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加角色')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div class="table">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="120"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="permission" label="权限"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="mod('修改角色')">编辑</el-button>
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
    <el-dialog :title="msg" :visible.sync="ismod" width="50%" center>
      <div class="input-list">
        <div class="input-item input-list-item">
          <label class="title">用户姓名</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div>
        <el-divider content-position="left">权限</el-divider>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="用户管理"></el-checkbox>
          <el-checkbox label="角色管理"></el-checkbox>
          <el-checkbox label="组织管理"></el-checkbox>
          <el-checkbox label="绩效指标"></el-checkbox>
          <el-checkbox label="全部绩效指标"></el-checkbox>
          <el-checkbox label="报表"></el-checkbox>
          <el-checkbox label="个人绩效目标"></el-checkbox>
          <el-checkbox label="发布任务"></el-checkbox>
          <el-checkbox label="审核发布"></el-checkbox>
          <el-checkbox label="任务列表"></el-checkbox>
          <el-checkbox label="绩效审核(高)"></el-checkbox>
          <el-checkbox label="绩效审核(低)"></el-checkbox>
          <el-checkbox label="绩效列表"></el-checkbox>
          <el-checkbox label="申诉"></el-checkbox>
          <el-checkbox label="申诉审核"></el-checkbox>
          <el-checkbox label="申诉列表"></el-checkbox>
          <el-checkbox label="绩效计划"></el-checkbox>
          <el-checkbox label="计划列表"></el-checkbox>
          <el-checkbox label="计划处理列表"></el-checkbox>
          <el-checkbox label="统计报表"></el-checkbox>
        </el-checkbox-group>
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
          name: "前端工程师",
          permission: "1,2,3,4,5,6"
        }
      ],

      value: "",
      checkList: []
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
      this.checkList = [];
    }
  }
};
</script>
<style scoped>
.head {
  height: 70px;
}
.head-item {
  display: inline-block;
  margin-right: 10px;
}
.el-input {
  width: 200px;
}
.reflash {
  float: right;
}
.table {
  padding: 10px;
}
.pages {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 20px;
}
.el-checkbox {
  margin: 9px;
}
</style>