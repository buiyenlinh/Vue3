import { ref } from "vue";
const getPostList = () => {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
        try {
            const data = await fetch ('http://localhost:8082/api/postList/')
            console.log(data)
            if (!data.ok) {
                throw Error('No data available')
            }

            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(error.value)
        }
    }

    return {
        posts,
        error,
        load
    }
}

export default getPostList