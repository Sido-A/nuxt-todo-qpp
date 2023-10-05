<template>
  <div class="max-w-xl mx-auto my-3">
    <div
      class="flex flex-col sm:flex-row justify-evenly items-center px-2 my-5 mx-2 sm:mx-auto"
    >
      <div class="bg-green-500 progress">
        達成数: <span class="font-bold">{{ countCompleted() }}</span>
      </div>
      <div class="bg-gray-500 progress">
        未達成数: <span class="font-bold">{{ countInComplete() }}</span>
      </div>
    </div>
    <ul class="overflow-y-auto min-h-[10rem] max-h-[30rem] px-2 mx-2 sm:pl-0">
      <li
        v-for="todo in todoList"
        class="flex items-center justify-between mt-1 py-2 px-3 bg-gray-100"
        :key="todo.id"
      >
        <p
          :class="[todo.completed ? 'line-through' : '']"
          class="break-words max-w-[15rem] sm:max-w-sm"
        >
          {{ todo.text }}
        </p>
        <div>
          <button
            class="bg-green-500 text-white px-2 align-middle"
            @click="toggleComplete(todo.id)"
          >
            {{ todo.completed ? "元に戻す" : "達成" }}
          </button>

          <button
            class="bg-red-500 text-white px-2 align-middle"
            @click="deleteTodo(todo.id)"
          >
            削除
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todo";

const todoStore = useTodoStore();
const { toggleComplete, deleteTodo, countInComplete, countCompleted } =
  todoStore;
const { todoList } = storeToRefs(todoStore);
</script>
