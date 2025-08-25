import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Note from '@/views/Note.vue';
import { useAuthStore } from '@/store/auth';

const baseUrl = "http://laravel-docker.test";

const routes = [
  { path: '/', component: Home, meta: { requiresAuth: true } },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/products', component: Note, meta: { requiresAuth: true } }
];

const router = createRouter({
  history: createWebHistory(""),
  routes: routes
});


// Global navigation guard
router.beforeEach((to, from, next) => {
  const auth = useAuthStore();
  auth.loadStoredAuth();
  //console.log("Loaded...");
  
  // If route requires auth and user is not authenticated
  if (to.meta.requiresAuth && !auth.token) {
    next('/login');
  } else {
    next();
  }
});

export default router