<template>
  <div class="bg-gray-100 pb-10">
    <Nav/>
    <div class="max-w-7xl mx-auto my-4 px-4 sm:px-6 lg:px-8">
      <div class="overflow-x-auto">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import Nav from '@/components/Nav.vue';


export default {
  name: "App",
  components: { Nav },
  setup() {
    onMounted(async () => {
    });
    return {
    }
  }
}
</script>