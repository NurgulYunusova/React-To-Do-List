import { useSelector, useDispatch } from "react-redux";
import { setFiltering, clearCompleted } from "../store/slices/todosSlice";

function Footer() {
  const { todos, filtering } = useSelector((state) => state.todosReducer);

  const dispatch = useDispatch();

  const getLength = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <>
      <footer className="footer">
        <span className="todo-count">
          <strong>{getLength()}</strong> items left
        </span>
        <ul className="filters">
          <li>
            <a
              href="#/"
              className={filtering === "all" ? "selected" : ""}
              onClick={() => {
                dispatch(setFiltering("all"));
              }}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filtering === "active" ? "selected" : ""}
              onClick={() => {
                dispatch(setFiltering("active"));
              }}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/"
              className={filtering === "completed" ? "selected" : ""}
              onClick={() => {
                dispatch(setFiltering("completed"));
              }}
            >
              Completed
            </a>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => {
            dispatch(clearCompleted());
          }}
        >
          Clear completed
        </button>
      </footer>
    </>
  );
}

export default Footer;
