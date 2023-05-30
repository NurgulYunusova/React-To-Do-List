import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filtering: "all",
};

const todosSlice = createSlice({
  name: "todosSlice",
  initialState: initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      const todo = {
        id: Math.random() * 10000,
        text: payload,
        completed: false,
      };

      state.todos.push(todo);
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
    setFiltering: (state, { payload }) => {
      state.filtering = payload;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, clearCompleted, setFiltering } =
  todosSlice.actions;

export default todosSlice.reducer;
