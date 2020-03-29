<template>
  <div>
    <el-dialog
      :title="msg"
      :visible.sync="ismod"
      width="50%"
      center
      :before-close="cancel"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      top="20px"
    >
      <div class="input-list">
        <div class="input-item input-list-item">
          <label class="title">用户</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="input-item input-list-item">
          <label class="title">任务</label>
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
          <label class="title">考核维度</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="input-item input-list-item">
          <label class="title">绩效指标</label>
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
          <div class="item-textarea-label">
            <label class="title">评估标准</label>
          </div>
          <el-input type="textarea" :rows="2" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item input-list-item">
          <label class="title">未达成</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-item input-list-item">
          <label class="title">底线</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item input-list-item">
          <label class="title">达标</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
        <div class="input-item input-list-item">
          <label class="title">挑战</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">分权权重</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">完成情况</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">自评分</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">上级评分</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="input-list">
        <div class="input-item">
          <label class="title">上级评价</label>
          <el-input class="input" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel()">取 消</el-button>
        <el-button type="primary" v-if="!isadd">提交</el-button>
        <el-button type="primary" v-if="isadd">添加</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["isadd", "ismod", "msg"],
  data() {
    return {
      options: [
        {
          value: 1,
          label: "未知"
        }
      ],
      value: ""
    };
  },
  methods: {
    mod(msg) {
      this.$emit("update:isadd", true);
      this.$emit("update:msg", msg);
    },
    cancel() {
      this.$emit("update:isadd", false);
      this.$emit("update:ismod", false);
    }
  }
};
</script>