<template>
  <div>
    <div class="table-head-item">
      <div class="head">
        <label class="title">用户名称</label>
        <el-select v-model="value1" placeholder="请选择">
          <el-option label="组员" value="shanghai"></el-option>
          <el-option label="组长" value="beijing"></el-option>
        </el-select>
        <label class="title">任务</label>
        <el-select style="margin-right:20px" v-model="value2" placeholder="请选择">
          <el-option label="绩效" value="shanghai"></el-option>
          <el-option label="审核" value="beijing"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" circle></el-button>
        <el-button class="reflash" type="warning" icon="el-icon-refresh" circle></el-button>
      </div>
    </div>
    <div>
      <report></report>
    </div>
  </div>
</template>
<script>
import report from "../../src/components/report";
export default {
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  components: {
    report
  }
};
</script>
<style scoped>
.table-head-item .title {
  margin: 0 10px;
}
</style>