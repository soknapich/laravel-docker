<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-90">
        <div class="bg-white p-5 rounded shadow-md w-full max-w-md">
            <h2 class="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>

            <form @submit.prevent="submit" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="username">Email</label>

                    <input v-model="data.username" id="username" type="text"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email" required>
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="password">Password</label>
                    <input v-model="data.password" type="password" id="password"
                        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Password" required>
                </div>


                <button class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    type="submit">{{ auth.loading ? 'Login...' : 'Sign in' }}</button>
            </form>

        </div>
    </div>

</template>

<script lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '@/store/auth';

export default {
    name: "Login",
    setup() {
        const data = reactive({
            username: '',
            password: ''
        });
        const auth = useAuthStore();

        const submit = async () => {
            //console.log(data.username, data.password);
            
            await auth.login(data.username, data.password)
            if (auth.token) {
                //await router.push('/');
                window.location = "/";
            }
        }

        return {
            auth,
            data,
            submit
        }
    }
}
</script>