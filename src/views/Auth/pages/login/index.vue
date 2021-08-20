<template>
  <el-row class="row-bg">
    <el-col :span="12">
      <div class="grid-content">
        <img src="@/assets/images/login-img-left.jpg" alt=""> 
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content text-left">
        <div class="login-right">
          <h1>Welcome to my web</h1>
          <div class="login-form">
            <el-form
              :model="ruleForm" status-icon
              label-width="80px" label-position="left"
              ref="loginForm" class="demo-ruleForm">
              <el-form-item label="Phone">
                <el-input v-model="account.phone"></el-input>
              </el-form-item>
              <el-form-item label="Password">
                <el-input show-password v-model="account.password"></el-input>
              </el-form-item>
              <el-form-item class="login-button">
                <el-button type="primary" @click="submitForm('account')">Submit</el-button>
                <el-button @click="resetForm('account')">Reset</el-button>
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
import { useField } from "vee-validate";
import useAccount from "../../hook/useAccount.ts"
// import * as yup from 'yup';

export default defineComponent({
  setup() {
    const { account, resetForm, submitForm } = useAccount();
    
    return {
      submitForm,
      account,
      resetForm
    }
  },
})
</script>
