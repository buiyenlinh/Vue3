<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  setup() {
    const username = ref()
    const password = ref()

    return {
      username, password
    }
  },
})
</script>


<template>
  <el-form label-position="left" label-width="120px">
    <el-form-item label="Tên đăng nhập:">
      <el-input v-model="username"></el-input>
    </el-form-item>
    <el-form-item label="Mật khẩu:">
      <el-input v-model="password"></el-input>
    </el-form-item>
  </el-form>
</template>