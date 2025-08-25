// stores/auth.js
import { defineStore } from 'pinia'
const apiUrl = import.meta.env.VITE_API_URL;

export const useAuthStore = defineStore('auth', {

  state: () => ({
    user: '',
    token: '',
    //  refreshToken: '',
    loading: false,
    error: ''
  }),

  actions: {

    async register(name, email, password, confirmed_password) {
      const response = await fetch(apiUrl + '/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          password_confirmation: confirmed_password
        })
      });

      if (response.status == 201) {
        return true;
      } else {
        return false;
      }
    },

    async login(email, password) {


      this.loading = true;
      this.error = '';

      try {
        const response = await fetch(apiUrl + '/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include',
          body: JSON.stringify({
            email,
            password
          })
        });

        if (response.status == 200) {
          const data = await response.json();
          this.token = data.accessToken;
          //this.refreshToken = data.refreshToken;
          this.user = data.user;

          localStorage.setItem('token', this.token || '');
          // localStorage.setItem('refreshToken', this.refreshToken || '');
          localStorage.setItem('user', JSON.stringify(this.user));

        } else {
          alert("Invalid username or password");
        }

      } catch (err) {
        this.error = 'Login failed';


      } finally {
        this.loading = false;
      }

    },

    logout() {
      this.token = '';
      //this.refreshToken = '';
      this.user = '';
      localStorage.clear();
    },

    loadStoredAuth() {
      const token = localStorage.getItem('token');
      //const refreshToken = localStorage.getItem('refreshToken');
      const user = localStorage.getItem('user');

      if (token && user) {
        this.token = token;
        //this.refreshToken = refreshToken;
        this.user = JSON.parse(user);
      }
    }
  },
})
