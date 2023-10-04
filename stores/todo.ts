import { v4 as uuidv4 } from "uuid";
import { ITodo } from "@/interfaces";

export const useTodoStore = defineStore("todo", () => {
  const todoList = ref<Array<ITodo>>([]);

  function countInComplete(): number {
    let sum = 0;
    todoList.value.forEach((todo) => {
      if (!todo.completed) {
        sum += 1;
      }
    });
    return sum;
  }

  function countCompleted(): number {
    let sum = 0;
    todoList.value.forEach((todo) => {
      if (todo.completed) {
        sum += 1;
      }
    });
    return sum;
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
    countInComplete,
    countCompleted,
  };
});
