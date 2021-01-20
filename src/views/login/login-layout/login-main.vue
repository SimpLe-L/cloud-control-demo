<template>
  <div class="login-layout-main">
    <div class="main-form">
      <h2>感谢选择英威讯</h2>
      <el-form
        :model="loginform"
        ref="loginform"
        :rules="rules"
        :inline="false"
        class="main-form-box"
      >
        <el-form-item>
          <el-input
            v-model="loginform.user"
            placeholder="请输入账户"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginform.pass"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="main-form-box_button" @click="submit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginform: {
        user: "",
        pass: "",
      },
      rules: {},
    };
  },
  methods: {
    submit() {
      this.$router.push("./home");
    },
  },
};
</script>

<style lang="less" scoped>
</style>