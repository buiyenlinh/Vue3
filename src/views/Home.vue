<template>
  <div class="container">
    <div class="home">
      <img alt="Vue logo" src="../assets/images/logo.png" />
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
img {
  width: 200px;
  height: 200px;
}
</style>