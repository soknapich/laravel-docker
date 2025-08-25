<template>
  <div class="bg-white p-5">
   Hello: {{ auth.user.name }}
  </div>
</template>

<script lang="ts">
import { useAuthStore } from '@/store/auth';
export default {
  name: "Home",
  setup() {
    const auth = useAuthStore()
    //console.log(auth);

    return {
      auth
    }
  }
}
</script>