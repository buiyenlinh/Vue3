<template>
  <div>
    <h2>This is admin page</h2>
    {{ auth }}
  </div>
  
</template>
<script>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    
    store.dispatch('setAuth', true);
    const auth = computed(() => store.state.authenticated)
    return {
      auth
    }
  },
})
</script>
