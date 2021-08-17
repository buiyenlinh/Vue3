<template>
  <div class="post">
      <router-link 
        :to="{ name: 'DetailsPost', params: { id: post.postId}}"
        >
          <h3>{{ post.postName }}</h3>
      </router-link>
      <div class="post-content">
          {{ snippet }}
      </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SinglePost",
  props: ['post'],
  setup (props) {
      const snippet = computed (() => {
          return props.post.postContent.substring(0, 100) + '...';
      })

      return {
          snippet
      }

      
  }
  
});
</script>
