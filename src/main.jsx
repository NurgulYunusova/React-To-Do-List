import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todosReducer from "./store/slices/todosSlice.jsx";

const store = configureStore({
  reducer: {
    todosReducer: todosReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
