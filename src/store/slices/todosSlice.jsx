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
      };

      console.log("payload", payload);

      state.todos.push(todo);
      //   state.count += 1;
    },
    // removeTodo: (state, { payload }) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== payload);
    //   //   state.count -= 1;
    // },
  },
});

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
