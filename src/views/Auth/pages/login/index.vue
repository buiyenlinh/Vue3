<template>
  <el-row class="row-bg">
    <el-col :span="12">
      <div class="grid-content">
        <img src="@/assets/images/login-img-left.jpg" alt=""> 
      </div>
    </el-col>
    <el-col :span="12">
      <div class="grid-content text-left">
        <h1>Welcome to my web</h1>

        <div class="login-form">
          <el-form label-position="top" label-width="100px" :model="account">
            <el-form-item label="Username">
              <el-input v-model="account.username"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input v-model="account.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Login</el-button>
              <el-button @click="resetForm('ruleForm')">Reset</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      </el-col>
  </el-row>
</template>


<script>
import { defineComponent } from "vue"
import useAccount from "../../hook/useAccount.ts"

export default defineComponent({
  setup() {
    const { account } = useAccount();
    const submitForm = () => {
      alert('Clicked');
    }

    const resetForm = () => {
      account.username = "";
      account.password = "";
    }
    return {
      submitForm,
      account,
      resetForm
    }
  },
})
</script>
