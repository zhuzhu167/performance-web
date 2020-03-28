<template>
  <div class="index">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: #6a60a9">
        <div class="user-img">
          <i class="el-icon-user-solid"></i>
          <p class="person">管理员</p>
        </div>
        <el-menu router :default-active="$route.path">
          <el-submenu index="1">
            <template slot="title">系统管理</template>
            <el-menu-item-group>
              <el-menu-item index="/user">用户管理</el-menu-item>
              <el-menu-item index="/role">角色管理</el-menu-item>
              <el-menu-item index="/organize">组织管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">绩效管理</template>
            <el-menu-item-group>
              <el-menu-item index="/target">绩效指标</el-menu-item>
              <el-menu-item index="/alltarget">全部绩效目标</el-menu-item>
              <el-menu-item index="/pertarget">个人绩效目标</el-menu-item>
              <el-menu-item index="/table">报表</el-menu-item>
              <el-menu-item index="/release">发布任务</el-menu-item>
              <el-menu-item index="/verifyrelease">审核发布</el-menu-item>
              <el-menu-item index="/tasklist">任务列表</el-menu-item>
              <el-menu-item index="/perfverify">绩效审核</el-menu-item>
              <el-menu-item index="/perflist">绩效列表</el-menu-item>
              <el-menu-item index="/appeal">申诉</el-menu-item>
              <el-menu-item index="/appealverify">申述审核</el-menu-item>
              <el-menu-item index="/appeallist">申述列表</el-menu-item>
              <el-menu-item index="/perfplan">绩效计划</el-menu-item>
              <el-menu-item index="/planlist">计划列表</el-menu-item>
              <el-menu-item index="/plandeal">计划处理列表</el-menu-item>
              <el-menu-item index="/statistics">统计报表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <span class="out" @click="tuichu()">退出</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import store from "../vuex/index";
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    tuichu() {
      this.$router.push({
        path: "/login"
      });
    },
    selectFn(a) {
      this.$router.push({
        path: a
      });
    }
  },
  store
};
</script>
<style>
.index {
  height: 100%;
}
.el-header {
  background-color: #f2f6fc;
  color: #333;
  line-height: 60px;
}
.el-main {
  overflow: hidden;
}

.el-aside {
  color: #333;
}

.el-menu {
  background-color: #6a60a9;
  border: none;
}
.el-submenu__title i {
  font-weight: bold;
  color: #fff;
}
.elmenu ul {
  color: #fff;
}
.el-submenu__title {
  color: #fff;
}
.el-submenu__title:hover {
  background-color: #6a60a9;
}
.el-menu-item {
  color: #fff;
}
.el-menu-item:hover {
  color: #000;
}
.el-menu-item.is-active {
  color: #000;
  background-color: #fff;
  text-align: right;
}
.user-img {
  font-size: 60px;
  text-align: center;
  color: #fff;
  border: #fff;
  margin-top: 20px;
}
.person {
  font-size: 15px;
}

.out {
  cursor: pointer;
}
</style>

