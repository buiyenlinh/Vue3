<template>
  <div class="posts">
      <div 
        v-for="post in posts"
        :key="post.id">
        <single-post :post="post"></single-post>
      </div>
  </div>
</template>

<script lang="ts">
// import axios from "axios";
import {  defineComponent } from "vue";
import SinglePost from '@/components/SinglePost.vue';

const Posts = defineComponent({
  name: "Posts",
  props: ['posts'],
  components: {
    SinglePost
  },
  setup (props) {
    console.log(props.posts);
    
    return {
     
    }
  }
})

export default Posts;
 

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
