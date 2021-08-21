<template>
  <el-row class="row-bg" v-loading="isLoading"
    element-loading-text="Loading..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    >
    <el-col :span="12">
      <div class="grid-content">
        <img src="@/assets/images/login-img-left.jpg" alt=""> 
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content text-left login-right-wrap">
        <div class="login-right">
          <h1>Welcome to my web</h1>
          <div class="login-form" @submit="onSubmit">
            <el-form
              label-width="120px" label-position="left" class="demo-ruleForm">
              <el-form-item label="Tên đăng nhập">
                <el-input type="tel" v-model="username"></el-input>
                <span class="login-error">{{ errors.username }}</span>
              </el-form-item>
              <el-form-item label="Mật khẩu">
                <el-input show-password v-model="password"></el-input>
                <span class="login-error">{{ errors.password }}</span>
              </el-form-item>
              <el-form-item class="login-button">
                <el-button type="primary" @click="onSubmit">Đăng nhập</el-button>
                <el-button @click="resetForm">Đặt lại</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
      </el-col>
  </el-row>
</template>

<script>
import { defineComponent } from "vue"
import useValidateAccount from "../../hook/useValidateAccount.ts"

export default defineComponent({
  setup() {
    const {username, password, onSubmit, errors, resetForm, isLoading } = useValidateAccount();

    return {
      username,
      password,
      onSubmit,
      errors,
      resetForm,
      isLoading
    }
  },
})
</script>
