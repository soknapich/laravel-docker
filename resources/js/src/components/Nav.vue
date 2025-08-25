<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="text-xl font-bold text-blue-600">Simple App</a>
        </div>

        <!--Icon (Mobile) -->
        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Nav links (desktop) -->
        <div class="hidden md:flex space-x-8" v-if="auth.user">
          <router-link to="/" class="text-gray-700 hover:text-blue-600 divide-gray-200">Home</router-link>
          <router-link to="/products" class="text-gray-700 hover:text-blue-600 divide-gray-200">Products</router-link>
          <button @click="handleLogout" class="text-gray-700 hover:text-blue-600 divide-gray-200 ">Logout</button>
        </div>

        <!--Login Button (desktop) -->
        <div class="hidden md:flex space-x-8" v-if="!auth.user">
          <router-link to="/login" class="text-gray-700 hover:text-blue-600 divide-gray-200">Login</router-link>
          <router-link to="/register" class="text-gray-700 hover:text-blue-600 divide-gray-200">Register</router-link>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden px-4 pb-4" v-if="isMobileMenuOpen">
      <div v-if="auth.user" class="flex flex-col space-y-2 divide-y divide-dashed divide-gray-200">
        <router-link to="/" class="text-gray-700 hover:text-blue-600 divide-gray-200">Home</router-link>
        <router-link to="/products" class="text-gray-700 hover:text-blue-600 divide-gray-200">Products</router-link>
        <button @click="handleLogout" class="text-gray-700 hover:text-blue-600 text-left divide-gray-200">Logout</button>
      </div>
      <!--Login Button (Mobile) -->
      <div v-else class="flex flex-col space-y-2">
        <router-link to="/login" class="text-gray-700 hover:text-blue-600 divide-gray-200">Login</router-link>
        <router-link to="/register" class="text-gray-700 hover:text-blue-600 divide-gray-200">Register</router-link>
      </div>
    </div>
  </nav>

</template>

<script setup>
import router from '@/router';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';

const auth = useAuthStore();
const isMobileMenuOpen = ref(false);

const handleLogout = async () => {
  if (confirm("Are you sure you want to logout?")) {
    auth.logout();
    await router.push('/login');
  }
}

</script>