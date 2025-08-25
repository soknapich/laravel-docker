<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-90">
    <div class="bg-white p-5 rounded shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Create an Account</h2>

      <form @submit.prevent="register" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Username</label>

          <input v-model="data.name" id="username" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Email</label>

          <input v-model="data.email" id="username" type="text"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Username" required>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Password</label>
          <input v-model="data.password" type="password" id="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password" required>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Confirm Password</label>
          <input v-model="data.confirmed_password" type="password" id="password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Password" required>
        </div>


        <button class="w-full bg-red-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          type="submit">Submit</button>
      </form>
    </div>
  </div>

</template>

<script lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router';

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: '',
      confirmed_password: ''
    });
    const authStore = useAuthStore();
    const register = async () => {
      const result = await authStore.register(data.name, data.email, data.password, data.confirmed_password);
      if (result) {
        await router.push('/');
      }
    }

    return {
      data,
      register
    }
  }
}
</script>