<template>
  <div class="container">
    <div class="home">
      <img alt="Vue logo" src="../assets/images/logo.png" />

      <el-button type="success">Success</el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>