<template>
    <div id="modal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
        <div class="bg-white rounded-lg shadow-lg w-120 max-w-full p-6 relative">
            <button @click="noteStore.isOpen = false"
                class="absolute top-2 right-3 text-xl text-gray-500 hover:text-gray-700">
                &times;
            </button>

            <h2 class="text-xl font-semibold mb-4">New</h2>
            <div class="mb-4">
                <form @submit.prevent="createNote" v-if="noteStore.product" class="space-y-4">
                    <div>
                        <label for="title" class="block text-gray-700 font-medium mb-1">Code</label>
                        <input type="text" id="title" v-model="noteStore.product.code" required
                            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="title" class="block text-gray-700 font-medium mb-1">Name</label>
                        <input type="text" id="title" v-model="noteStore.product.name" required
                            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="title" class="block text-gray-700 font-medium mb-1">Price</label>
                        <input type="number" id="title" min="0" step="0.01" v-model.number="noteStore.product.price" required
                            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <div>
                        <label for="content" class="block text-gray-700 font-medium mb-1">Description</label>
                        <textarea id="content" v-model="noteStore.product.description" rows="5" required
                            class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <div>
                        <button type="submit"
                            class="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                            Create
                        </button>
                    </div>
                </form>

            </div>

        </div>
    </div>

</template>
<script lang="ts">
import { useNoteStore } from "@/store/note";

export default {
    name: "CreateNote",
    setup() {
        const noteStore = useNoteStore();
        noteStore.product = {
            code: '',
            name: '',
            description: '',
            price: 0
        };

        const createNote = async () => {
            await noteStore.createNote(noteStore.product);
        };
        return {
            noteStore,
            createNote
        }
    }
}
</script>