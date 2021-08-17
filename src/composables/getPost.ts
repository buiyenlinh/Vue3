import { ref } from 'vue';

const getPost = (id : any) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const data = await fetch ('http://localhost:8082/api/postList?postId=' + id);
      if (!data.ok) {
        throw Error('This post does not exist');
      }
      post.value = await data.json()
    } catch (err) {
      error.value = err.message
    }
  }

  return { post, error, load }
}

export default getPost