// stores/note.js
import { defineStore } from 'pinia';
//import fetchClient from '@/utils/fetchClient';
const apiUrl = import.meta.env.VITE_API_URL;

export const useNoteStore = defineStore('note', {

    state: () => ({
        isOpen: false,
        isEdit: false,
        products: [],
        product: null
    }),

    actions: {
        async getAllNotes() {
            try {

                const response = await fetch(`${apiUrl}/api/products`, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status == 200) {
                    const products = await response.json();
                    this.products = products;
                }
            } catch (e) {

            }
        },

        async getNote(id) {
            try {

                const response = await fetch(`${apiUrl}/api/products/${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                });

                if (response.status == 200) {
                    this.product = await response.json();

                }

            } catch (e) {

            }
        },

        async createNote(data) {
            try {

                const res = await fetch(`${apiUrl}/api/products`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (res.status == 201) {
                    this.isOpen = false;
                    this.product = {
                        code: '',
                        name: '',
                        description: '',
                        price: ''
                    };
                    await this.getAllNotes();
                }

            } catch (e) {

            }
        },

        async updateNote(id, data) {

            try {

                const res = await fetch(`${apiUrl}/api/products/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (res.status == 200) {
                    this.isEdit = false;
                    await this.getAllNotes();
                }

            } catch (e) {

            }
        },

        async deletNote(id) {
            try {

                const res = await fetch(`${apiUrl}/api/products/${id}`, {
                    method: 'DELETE'
                });

                if (res.status == 204) {
                    await this.getAllNotes();
                }

            } catch (e) {

            }
        }

    },
})
