import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  //   count: 0,
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
      //   state.count += 1;
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
      //   state.count -= 1;
    },
    toggleTodo: (state, { payload }) => {
      state.todos[payload].completed = !state.todos[payload].completed;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
