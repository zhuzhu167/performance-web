<template>
  <div class="report">
    <table border="1" style="width: 100%;text-align: center;">
      <tr>
        <td>姓名</td>
        <td colspan="2"></td>
        <td>部门/职位或职级</td>
        <td colspan="5"></td>
        <td rowspan="3" colspan="4">绩效评估时使用</td>
      </tr>
      <tr>
        <td>直接上级</td>
        <td colspan="2"></td>
        <td>间接上级</td>
        <td colspan="5"></td>
      </tr>
      <tr>
        <td>目标承诺周期</td>
        <td colspan="3" style="text-align: left;"></td>
      </tr>
      <tr>
        <td rowspan="2">考核维度</td>
        <td rowspan="2">绩效指标</td>
        <td rowspan="2">指标定义</td>
        <td rowspan="2">评估标准</td>
        <td colspan="4">绩效目标承诺</td>
        <td rowspan="2">分项权重</td>
        <td rowspan="2">员工对目标情况进行自评</td>
        <td rowspan="2">自评分</td>
        <td rowspan="2">直接上级评分</td>
        <td rowspan="2">直接上级评价</td>
      </tr>
      <tr>
        <td>未达成</td>
        <td>底线</td>
        <td>达标</td>
        <td>挑战</td>
      </tr>
      <tr>
        <td rowspan="3">服务目标</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td rowspan="3">职业化目标</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>能力提升</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>关键事件加减分项</td>
        <td>请填写部门考核指标</td>
        <td colspan="7"></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.report {
  margin: 0 10px;
}
table {
  border-collapse: collapse;
  width: 100%;
  border-right: 1px solid #ccc;
  height: 600px;
}
table td {
  border: 1px solid #ccc;
  padding: 2px 5px;
  text-align: center;
}
</style>