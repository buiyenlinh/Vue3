<template>
  <div class="post-details">
    <div class="container">
      <h2>Details</h2>
      <div v-if="error"> {{ error }}</div>
      <div v-if="post">
        <div v-for="pt in post" :key="pt.postId">
          <h3>{{ pt.postName }}</h3>
          <p>{{ pt.postContent }} </p>
        </div>
      </div>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import getPost from '@/composables/getPost';
export default defineComponent({
  name: 'Details',
  props: ['id'],
  setup (props) {
    console.log('here')

    const { post, error, load } = getPost(props.id)
    console.log(post);
    load()
    return {
      post,
      error
    }
  }
})
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
</style>
