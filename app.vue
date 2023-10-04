<template>
  <Layout>
    <form
      @submit.prevent="addNewTodo()"
      class="min-w-min max-w-xl px-2 mx-2 sm:mx-auto my-5 form-control"
    >
      <label
        for="todo"
        class="flex justify-between border border-1 border-green-500"
      >
        <input
          id="todo"
          required
          v-model="newTodo"
          class="flex-1 w-100 p-1 outline-0"
          type="text"
        />
        <button class="px-3 py-1 bg-green-500 text-white">Add</button>
      </label>
    </form>
    <TodoComp />
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layouts/default.vue";
import { ref } from "vue";
import { useTodoStore } from "@/stores/todo";

const store = useTodoStore();
const newTodo = ref("");
const addNewTodo = () => {
  if (!newTodo.value) return;
  store.addNewTodo(newTodo.value);
  newTodo.value = "";
};
</script>
