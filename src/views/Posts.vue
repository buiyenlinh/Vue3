<template>
  <div class="container">
    <div class="posts">
      <img alt="Vue logo" src="../assets/logo.png" />
      <div v-if="error">{{ error }}</div>
      <div v-if="posts.length">
        <PostList :posts="posts" />
      </div>

      <div v-else>Loading...</div>
      
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PostList from "@/components/PostList.vue"; // @ is an alias to /src
import getPostList from '@/composables/getPostList';

export default defineComponent({
  name: "Posts",
  components: {
    PostList,
  },
  setup () {
    const { posts, error, load } = getPostList();
    load()
    return {
        posts,
        error
    }
  }
});
</script>

<style scoped>
.container {
  width: 1200px;
  margin: 0 auto;
}
</style>