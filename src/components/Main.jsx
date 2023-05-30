import { useDispatch, useSelector } from "react-redux";
import { removeTodo, toggleTodo } from "../store/slices/todosSlice";

function Main() {
  const { todos } = useSelector((state) => state.todosReducer);

  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeTodo(id));
  };

  const handleClick = (index) => {
    dispatch(toggleTodo(index));
  };

  console.log(todos);

  return (
    <>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <ul className="todo-list">
          {todos &&
            todos.map((todo) => (
              <li
                key={todo.id}
                onClick={() => handleClick(todo.id)}
                className={todo?.completed ? "completed" : ""}
              >
                <div className="view">
                  <input className="toggle" type="checkbox" />
                  <label>{todo.text}</label>
                  <button className="destroy" onClick={() => remove(todo.id)} />
                </div>
              </li>
            ))}
        </ul>
        {/* <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn JavaScript</label>
              <button className="destroy" />
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Learn React</label>
              <button className="destroy" />
            </div>
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Have a life!</label>
              <button className="destroy" />
            </div>
          </li>
        </ul> */}
      </section>
    </>
  );
}

export default Main;
