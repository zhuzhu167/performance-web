<template>
  <div>
    <div class="head">
      <el-input class="head-item" placeholder="请输入内容"></el-input>
      <el-button type="primary" icon="el-icon-search" circle></el-button>
      <el-button type="success" icon="el-icon-plus" circle @click="add('添加用户')"></el-button>
      <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
    </div>
    <div class="table">
      <el-table border :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>账号: {{ scope.row.num }}</p>
              <p>密码: {{ scope.row.password }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="path" label="部门"></el-table-column>
        <el-table-column prop="role" label="角色"></el-table-column>
        <el-table-column label="操作" fixed="right" width="150">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="mod('修改用户')">编辑</el-button>
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
        <div class="input-item">
          <label class="title">用户姓名</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item input-list-item">
          <label class="title">部门</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-item input-list-item">
          <label class="title">角色</label>
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
        <div class="input-item input-list-item">
          <label class="title">账号</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-item input-list-item">
          <label class="title">密码</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
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
          id: "1",
          name: "梁柱",
          path: "开发部",
          role: "前端工程师",
          num: "123",
          password: "123"
        }
      ],
      options: [
        {
          value: "1",
          label: "管理员"
        },
        {
          value: "2",
          label: "项目经理"
        },
        {
          value: "3",
          label: "组长"
        },
        {
          value: "4",
          label: "组员"
        },
        {
          value: "5",
          label: "实习"
        }
      ],
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
      this.value = "";
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
</style>