import { useStore } from "vuex"

export default function changeState () {
  const setAuth = () => {
    const store = useStore();
    store.dispatch('setAuth', true)
  }

  return {
    setAuth
  };
}