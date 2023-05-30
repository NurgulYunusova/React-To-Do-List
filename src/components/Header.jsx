import { useDispatch } from "react-redux";
import { addTodo } from "../store/slices/todosSlice";
import { useState } from "react";

function Header() {
  const [todoInput, setTodoInput] = useState("");

  const dispatch = useDispatch();

  const addTodoList = (e) => {
    e.preventDefault();
    dispatch(addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={(e) => addTodoList(e)}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
          />
        </form>
      </header>
    </>
  );
}

export default Header;
