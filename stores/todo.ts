import { v4 as uuidv4 } from "uuid";
import { ITodo, ICompletionCount } from "@/interfaces";

export const useTodoStore = defineStore(
  "todo",
  () => {
    const todoList = ref<Array<ITodo>>([]);

    function countCompletion(): ICompletionCount {
      let completed = 0;
      let inComplete = 0;

      todoList.value.forEach((todo) => {
        if (todo.completed) {
          completed += 1;
        }
      });
      inComplete = todoList.value.length - completed;
      return { completed, inComplete };
    }

    function addNewTodo(newTodo: string): Array<ITodo> {
      const newTodoObj: ITodo = {
        id: uuidv4(),
        text: newTodo,
        completed: false,
      };
      todoList.value.unshift(newTodoObj);
      return todoList.value;
    }

    function toggleComplete(id: string): Array<ITodo> {
      todoList.value.forEach((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      });
      return todoList.value;
    }

    function deleteTodo(id: string): Array<ITodo> {
      todoList.value = todoList.value.filter((t) => t.id !== id);
      return todoList.value;
    }

    return {
      todoList,
      addNewTodo,
      toggleComplete,
      deleteTodo,
      countCompletion,
    };
  },
  { persist: true }
);
