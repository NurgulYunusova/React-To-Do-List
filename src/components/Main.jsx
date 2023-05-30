import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/slices/todosSlice";

function Main() {
  const { todos, filtering } = useSelector((state) => state.todosReducer);

  const getTodos = () => {
    return todos.filter((todo) => {
      if (filtering === "active") {
        return todo.completed === false;
      } else if (filtering === "completed") {
        return todo.completed === true;
      } else {
        return todo;
      }
    });
  };

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleClick = (index) => {
    dispatch(toggleTodo(index));
  };

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos &&
            getTodos().map((todo) => (
              <li
                key={todo.id}
                onClick={() => handleClick(todo.id)}
                className={todo.completed ? "completed" : ""}
              >
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                  />
                  <label>{todo.text}</label>
                  <button className="destroy" onClick={() => remove(todo.id)} />
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
}

export default Main;
