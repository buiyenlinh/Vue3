import { reactive } from "vue"


export default function useAccount () {
  const account = reactive({
    username: '',
    password: ''
  })

  return {
    account
  }
}