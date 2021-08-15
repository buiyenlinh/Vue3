<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted () {
    axios.get("http://localhost:8082/api/products").then(
      response => {
        console.log(response.data)
      }
    )
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
